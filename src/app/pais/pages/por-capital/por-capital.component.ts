import { Component, OnInit } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;

  paises: RESTCountriesResponse[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {

    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(this.termino).subscribe(
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
