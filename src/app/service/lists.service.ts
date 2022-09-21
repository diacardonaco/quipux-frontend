import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { List } from '../models/list.model';
import { Observable } from "rxjs";
import { Cancion } from '../models/cancion.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'});
  options = { headers: this.headers };  

  constructor(private http: HttpClient) {
   } 

   public getAllLists(): Observable<List[]> {
    return this.http.get<List[]>("http://localhost:8080/lists");
  }

  public getAllSongs(): Observable<Cancion[]> {
    return this.http.get<Cancion[]>("http://localhost:8080/cancion/canciones");
  }

  public createSong(cancion: Cancion): Observable<Cancion> {
    console.log('esto es lo q se envia:' + JSON.stringify(cancion))
    return this.http.post<Cancion>("http://localhost:8080/cancion/create-cancion", JSON.stringify(cancion), { headers: this.headers})
  }

  public createList(list: List): Observable<List> {
    console.log('esto es lo q se envia:' + JSON.stringify(list))
    return this.http.post<List>("http://localhost:8080/lists", JSON.stringify(list), { headers: this.headers})
  }

}
