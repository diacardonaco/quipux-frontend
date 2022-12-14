import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/', 'index']);
  }
  
  goToCancion() {
    this.router.navigate(['/', 'cancion']);
  }

  goToLists() {
    this.router.navigate(['/', 'lists']);
  }

  goToCrearCancion() {
    this.router.navigate(['/', 'crear-cancion']);
  }
  
  goToCrearLista() {
    this.router.navigate(['/', 'crear-lista']);
  }

}
