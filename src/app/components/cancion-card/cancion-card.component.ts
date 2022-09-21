import { Component, Input, OnInit } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { ListsService } from 'src/app/service/lists.service';

@Component({
  selector: 'app-cancion-card',
  templateUrl: './cancion-card.component.html',
  styleUrls: ['./cancion-card.component.css']
})
export class CancionCardComponent implements OnInit {

  @Input() cancion: Cancion = {

    id: 0,
    titulo: '',
    artista: '',
    album: '',
    anno:'',
    genero: ''
  }

  songsObtained: Cancion[] | undefined;


  constructor(private listsService: ListsService) {
   }

  ngOnInit(): void {
     this.listsService.getAllSongs().subscribe(e =>this.songsObtained=e);
  }

}
