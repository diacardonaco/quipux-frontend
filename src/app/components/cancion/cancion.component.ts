import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  songsObtained: Cancion[] | undefined;

  constructor(private listsService: ListsService) { }

  ngOnInit(): void {    
    this.listsService.getAllSongs().subscribe(e => this.songsObtained=e);
  }

}
