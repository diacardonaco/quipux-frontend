import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List } from 'src/app/models/list.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-crear-lista',
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.css']
})
export class CrearListaComponent implements OnInit {

  createForm!: FormGroup;
  listsObtained: List[] | undefined;
  
  dataList!: any;

  constructor(private fb: FormBuilder, private listsService: ListsService) {}

  ngOnInit() {
    this.buildForm();
  }


  onSubmit() {
    if (this.createForm && this.createForm.valid) {
      console.log("Submitting form: ", this.createForm.value);
      this.dataList =  this.createForm.value;
      this.listsService.createList(new List(this.dataList.id, this.dataList.nombre, this.dataList.descripcion, 
        this.dataList.canciones)).subscribe(list => this.listsObtained?.push(list));
    } else {
      console.error("Form is invalid!");
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
