import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  
  listsObtained: List[] | undefined;

  constructor(private listsService: ListsService) { }

  ngOnInit(): void {
    
    this.listsService.getAllLists().subscribe(e => this.listsObtained=e);
  }

}
