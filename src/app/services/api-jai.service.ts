import { Injectable } from '@angular/core';
import { ApiArrayUtils } from './array-map-util';

@Injectable({
  providedIn: 'root'
})
export class ApiJaiService {

  apiUrl = 'https://script.google.com/macros/s/AKfycbxhE2ls-gS-s51A_16OcVMlRdJWcEIPQJPSplTNVfK5hlZn1s-C/exec';
  daysList: Array<string> = [];
  trabalhosList: Array<ListaTrabalhos> = [];
  avaliacoesList: Array<Avaliacao> = [];
  checkList: Array<Array<string>> = [];

  constructor() {  }

  public getValuesByDay(day: string) {
    const trabalhosPromise = new Promise((resolve, reject) => {
      const trabalhosListFiltered = this.trabalhosList.filter(trabalho  => trabalho.dia === day);
      if (trabalhosListFiltered.length > 0) {
        resolve(trabalhosListFiltered.pop().trabalhos);
      } else {
        const params = new URLSearchParams();
        params.append('type', 'getValuesByDay');
        params.append('day', day);
        fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
          response.json().then(jsonResponse => {
            const trabalhoList: ListaTrabalhos = {
              dia: day,
              trabalhos: jsonResponse.values
            };
            this.trabalhosList.push(trabalhoList);
            resolve(trabalhoList.trabalhos);
          }, err => {
            reject(err);
          });
        }, err => {
          reject(err);
        });
      }
    });
    return trabalhosPromise;
  }

  public getCheck() {
    const checkPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getCheck');
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          this.checkList = jsonResponse.values.map(ApiArrayUtils.checkToObject);
          resolve(this.checkList);
        }, err => {
          reject(err);
        });
      }, err => {
        reject(err);
      });
    });
    return checkPromise;
  }

  public getAvaliacoes() {
    const avaliacoesPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getAvaliacoes');
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          this.avaliacoesList = jsonResponse.values.map(ApiArrayUtils.avaliacaoToObject);
          resolve(this.avaliacoesList);
        }, err => {
          reject(err);
        });
      }, err => {
        reject(err);
      });
    });
    return avaliacoesPromise;
  }

  public getTrabalhos()  {
    const trabalhosPromise = new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append('type', 'getTrabalhos');
      fetch(this.apiUrl, {method: 'POST', redirect: 'follow', body: params}).then(response => {
        response.json().then(jsonResponse => {
          resolve(jsonResponse.values.map(ApiArrayUtils.trabalhoToObject));
        }, err => {
          reject(err);
        });
      }, err => {
        reject(err);
      });
    });
    return trabalhosPromise;
  }

}

interface ListaTrabalhos {
  dia: string;
  trabalhos: Array<Array<string>>;
}

export interface Trabalho {
  titulo: string;
  apresentador: string;
  avaliador: string;
  dia: string;
  horario: string;
  predio: string;
  sala: string;
}

export interface Avaliacao {
  idTrabalho: string;
  nomeTrabalho: string;
  avaliadorOriginal: string;
  avaliadorReal: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
}
