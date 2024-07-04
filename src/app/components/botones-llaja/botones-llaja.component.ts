import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-llaja',
  standalone: true,
  imports: [],
  templateUrl: './botones-llaja.component.html',
  styleUrl: './botones-llaja.component.css'
})
export class BotonesLlajaComponent {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
