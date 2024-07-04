import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesLlajaComponent } from './components/botones-llaja/botones-llaja.component';
import { ComentarioLlajaComponent } from './components/comentario-llaja/comentario-llaja.component';
import { PersonajesLlajaComponent } from './components/personajes-llaja/personajes-llaja.component';

export const routes: Routes = [
    {
        path:'',component:BotonesLlajaComponent
    },
    {
        path:'personajes',component:PersonajesLlajaComponent
    },
    {
        path:'comentarios',component:ComentarioLlajaComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }