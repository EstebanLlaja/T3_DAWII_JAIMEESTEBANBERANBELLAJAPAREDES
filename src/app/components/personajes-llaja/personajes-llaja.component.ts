import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicioIIService } from '../services/servicio-ii.service';

@Component({
  selector: 'app-personajes-llaja',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personajes-llaja.component.html',
  styleUrl: './personajes-llaja.component.css'
})
export class PersonajesLlajaComponent implements  OnInit {
  humanCharacters: any[] = [];

  constructor(private rickMortyService: ServicioIIService) { }

  ngOnInit(): void {
    this.rickMortyService.ListarHumanCharacters().subscribe((characters: any[]) => {
      this.humanCharacters = characters;
    });
  }


}
