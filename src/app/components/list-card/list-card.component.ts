import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() list: List = {

    id: 0,
    nombre: '',
    descripcion: '',
    canciones: []
  }
  
  listsObtained: List[] | undefined;

  constructor(private listsService: ListsService) { }

  ngOnInit(): void {    
    this.listsService.getAllLists().subscribe(e => this.listsObtained=e);
  }

}
