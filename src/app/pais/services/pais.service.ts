import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTCountriesResponse } from '../interfaces/interface';


@Injectable({ providedIn: 'root' })
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<RESTCountriesResponse[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<RESTCountriesResponse[]>(url);
  }

  buscarCapital(termino: string): Observable<RESTCountriesResponse[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<RESTCountriesResponse[]>(url);
  }

}
