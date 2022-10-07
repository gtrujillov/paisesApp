import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
 
  //Evento que recoge el valor del input y lo envia
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  //Instancia para establecer el tiempo de espera antes de lanzar un método
  debouncer: Subject<string> = new Subject();
   
  termino: string = '';

  //Ejecutar código cuando el componente carga por primera vez
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    //Cuando se presiona ENTER se captura el valor del input y se emite para que en otro sitio lo
    //podamos capturar ( app-por-pais.component )
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
