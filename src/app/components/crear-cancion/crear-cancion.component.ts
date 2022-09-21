import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cancion } from 'src/app/models/cancion.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-crear-cancion',
  templateUrl: './crear-cancion.component.html',
  styleUrls: ['./crear-cancion.component.css']
})
export class CrearCancionComponent implements OnInit {

  createForm!: FormGroup;
  songsObtained: Cancion[] | undefined;
  
  dataSong!: any;

  constructor(private fb: FormBuilder, private listsService: ListsService) {}

  ngOnInit() {
    this.buildForm();
  }


  onSubmit() {
    if (this.createForm && this.createForm.valid) {
      console.log("Submitting form: ", this.createForm.value);
      this.dataSong =  this.createForm.value;
      this.listsService.createSong(new Cancion(this.dataSong.id, this.dataSong.titulo, this.dataSong.artista, 
        this.dataSong.album,  this.dataSong.anno, this.dataSong.genero)).subscribe(cancion => this.songsObtained?.push(cancion));
    } else {
      console.error("Form is invalid!");
    }
  }

  private buildForm() {
    this.createForm = this.fb.group({
      id: ["", Validators.required],
      titulo: ["", Validators.required],
      artista: ["", Validators.required],
      album: ["", Validators.required],
      anno: ["", Validators.required],
      genero: ["", Validators.required]
    });
  }

}


