import { Component } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  //Gracias a "Banana in a box" tenemos el doble binding por lo que podemos capturar
  //el valor del formulario utilizando [(ngModel)]
  termino: string = '';
  hayError: boolean = false;
  paises: RESTCountriesResponse[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
