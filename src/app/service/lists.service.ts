import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { List } from '../models/list.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private getAllListsUrl: string;
  private createListUrl: string;

  constructor(private http: HttpClient) {
    this.getAllListsUrl = 'http://localhost:8080/lists';
    this.createListUrl = 'http://localhost:8080/lists';
   } 

   public getAllLists(): Observable<List[]> {
    return this.http.get<List[]>(this.getAllListsUrl);
  }
}
