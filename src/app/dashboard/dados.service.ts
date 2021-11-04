import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro',32],
    ['Fevereiro',41],
    ['Março',39],
    ['Abril',24],
    ['Maio',35],
    ['Junho',49],
    ['Julho',28],
    ['Agosto',46],
    ['Setembro',65],
    ['Outubro',89],
    ['Novembro',85],
    ['Dezembro',75],

  ]

  constructor() { }

  /**
   * Retorna um observable contendo os dados a serem exibidos no gráfico.
   * @returns Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
