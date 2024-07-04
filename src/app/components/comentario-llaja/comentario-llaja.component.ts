import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicioIService } from '../services/servicio-i.service';

@Component({
  selector: 'app-comentario-llaja',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comentario-llaja.component.html',
  styleUrl: './comentario-llaja.component.css'
})
export class ComentarioLlajaComponent implements OnInit {
  filteredComments: any[] = [];

  constructor(private commentsService: ServicioIService) { }

  ngOnInit(): void {
    this.commentsService.ListarCommentsWithGarfieldBiz().subscribe((comments: any[]) => {
      this.filteredComments = comments;
    });
  }

}
