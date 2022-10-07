import { Component, Input} from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent{

  @Input() paises: RESTCountriesResponse[] = [];

  constructor() { }


}
