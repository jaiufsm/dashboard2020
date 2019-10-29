import { Component, OnInit } from '@angular/core';
import { ApiJaiService } from '../services/api-jai.service';
import { Days } from '../services/days';
import { Trabalho } from '../interfaces/Trabalho';
import { Avaliacao } from '../interfaces/Avaliacao';
import { Check } from '../interfaces/Check';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public cards: Array<CardDia>;
  private trabalhos: Array<Trabalho>;
  private avaliacoes: Array<Avaliacao>;
  private titulosQuestoes = {
    q1: '1) O título do trabalho reflete seu conteúdo e as palavras usadas são adequadas?',
    q2: '2) O tema do trabalho é relevante na sua respectiva área do conhecimento?',
    q3: '3) A contextualização do trabalho com a literatura e/ou processos criativos existentes é feita de forma satisfatória?',
    q4: '4) A metodologia empregada no trabalho reflete o atual estado da arte na sua respectiva área do conhecimento?',
    q5: '5) Os resultados são apresentados de forma clara, estruturada e coerente, utilizando-se dos meios adequados '
      + '(tabelas, gráficos, etc.)?',
    q6: '6) A discussão dos resultados enfatizou seus aspectos mais relevantes e suas limitações?',
    q7: '7) As conclusões do trabalho são coerentes com seus resultados, métodos e objetivos?',
    q8: '8) O pôster ou os slides continham as informações necessárias de forma sintética e objetiva?',
    q9: '9) O apresentador domina o conteúdo do trabalho apresentado?',
    q10: '10) Qual conceito o(a) Sr(a) daria para o trabalho/apresentador como um todo?'
  };
  private respostasQuestoes = [
    'A - Melhor',
    'B',
    'C',
    'D',
    'E - Pior'
  ];
  private loading = null;

  constructor(private apiJai: ApiJaiService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadData();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  private loadData() {
    this.presentLoading();
    this.cards = [];
    const promiseList = [];
    promiseList.push(this.apiJai.getTrabalhos());
    promiseList.push(this.apiJai.getAvaliacoes());
    Promise.all(promiseList).then((response: Array<any>) => {
      this.trabalhos = response[0];
      this.avaliacoes = response[1];
      const days = Days.getDays();
      for (const day of days) {
        const trabalhosDia = this.trabalhos.filter(trabalho => trabalho.dia === day);
        const avaliacoesDia = this.avaliacoes.filter(avaliacao => avaliacao.timestamp.split(' | ')[0] === day);
        const totalTrabalhos = trabalhosDia.length;
        let totalAusentes = 0;
        trabalhosDia.map(trabalho => {
          const index = avaliacoesDia.findIndex(avaliacao => avaliacao.id === trabalho.idTrabalho);
          if (index < 0) {
            totalAusentes += 1;
          }
        });
        const questoes = [];
        for (let i = 1; i <= 10; i++) {
          const indexQuestao = 'q' + i;
          const respostas = [0, 0, 0, 0, 0];
          avaliacoesDia.map(avaliacao => {
            switch (avaliacao[indexQuestao]) {
              case this.respostasQuestoes[0]:
                respostas[0] += 1;
                break;
              case this.respostasQuestoes[1]:
                respostas[1] += 1;
                break;
              case this.respostasQuestoes[2]:
                respostas[2] += 1;
                break;
              case this.respostasQuestoes[3]:
                respostas[3] += 1;
                break;
              case this.respostasQuestoes[4]:
                respostas[4] += 1;
                break;
            }
          });
          questoes.push({
            titulo: this.titulosQuestoes[indexQuestao],
            respostas
          });
        }
        const card: CardDia = {
          titulo: day,
          totalTrabalhos,
          totalAusentes,
          questoes
        };
        this.cards.push(card);
      }
      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

}

interface CardDia {
  titulo: string;
  totalTrabalhos: number;
  totalAusentes: number;
  questoes: Array<{
    titulo: string;
    respostas: Array<number>
  }>;
}
