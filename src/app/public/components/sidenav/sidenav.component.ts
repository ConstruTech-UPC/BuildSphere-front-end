import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isSidenavOpen: boolean = true; // El sidenav estará abierto inicialmente

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen; // Cambia el estado del sidenav (abierto/cerrado)
  }
}
