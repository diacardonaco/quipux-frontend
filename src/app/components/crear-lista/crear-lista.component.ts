import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cancion } from 'src/app/models/cancion.model';
import { List } from 'src/app/models/list.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-crear-lista',
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.css']
})
export class CrearListaComponent implements OnInit {

  createForm!: FormGroup;
  listsObtained!: List[] | undefined;
  idCancionesList!: string[] | undefined;
  idCancionesListInt: number[] | undefined;
  idCanciones!: string | undefined;
  songsObtained: Cancion[] | undefined;
  result: Cancion[] | undefined;
  songsObtainedFilter: Cancion[] | undefined;
  idSongsObtained!: number[];
  cancion!: Cancion;
  
  dataList!: any;

  constructor(private fb: FormBuilder, private listsService: ListsService) {}

  ngOnInit() {
    this.buildForm();
    this.listsService.getAllSongs().subscribe(e => this.songsObtained=e);
    this.result = [];
  }


  onSubmit() {
    if (this.createForm && this.createForm.valid) {
      this.dataList =  this.createForm.value;
      this.idCanciones = this.dataList.canciones;

      var b = this.idCanciones?.split(',').map(function(item) {
        return parseInt(item, 10);
      });

      b?.forEach( id => 
        {
          this.songsObtained?.forEach( song => {
            if(song.id == id){
              this.result?.push(song);
            }
          })
        }) 

      this.listsService.createList(new List(this.dataList.id, this.dataList.nombre, this.dataList.descripcion, 
        this.result)).subscribe(list => this.listsObtained?.push(list));
    } else {
      alert("Form invalid!");
    }
  }

  private buildForm() {
    this.createForm = this.fb.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      canciones: ["", Validators.required]
    });
  }


}
