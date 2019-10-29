import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ApiJaiService } from '../services/api-jai.service';
import { Days } from '../services/days';
import { Trabalho } from '../interfaces/Trabalho';
import { Avaliacao } from '../interfaces/Avaliacao';
import { Check } from '../interfaces/Check';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public graficos: Array<ChartRow>;
  private trabalhos: Array<Trabalho>;
  private avaliacoes: Array<Avaliacao>;
  private checks: Array<Check>;
  private loading = null;

  constructor(private apiJai: ApiJaiService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadCharts();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });
    await this.loading.present();
  }

  private loadCharts() {
    this.presentLoading();
    this.graficos = [];
    const promiseList = [];
    promiseList.push(this.apiJai.getTrabalhos());
    promiseList.push(this.apiJai.getAvaliacoes());
    promiseList.push(this.apiJai.getCheck());
    Promise.all(promiseList).then((response: Array<any>) => {
      this.trabalhos = response[0];
      this.avaliacoes = response[1];
      this.checks = response[2];
      const days = Days.getDays();
      for (const day of days) {
        const checksDia = this.checks.filter(check => check.data === day);
        const trabalhosDia = this.trabalhos.filter(trabalho  => trabalho.dia === day);
        const chartRow: ChartRow = {
          trabalhos: {
            title: day,
            chart: this.estadoTrabalhoChart(trabalhosDia, checksDia, this.avaliacoes)
          },
          avaliadores: {
            title: day,
            chart: this.checkChart(trabalhosDia, checksDia, this.avaliacoes)
          }
        };
        console.log(chartRow);
        this.graficos.push(chartRow);
      }
      const chartGeral: ChartRow = {
        trabalhos: {
          title: 'Geral',
          chart: this.estadoTrabalhoChart(this.trabalhos, this.checks, this.avaliacoes)
        },
        avaliadores: {
          title: 'Geral',
          chart: this.checkChart(this.trabalhos, this.checks, this.avaliacoes)
        }
      };
      this.graficos.push(chartGeral);
      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

  private estadoTrabalhoChart(trabalhos, checks, avaliacoes) {
    let avaliados = 0;
    let naoAvaliados = 0;
    let emAndamento = 0;
    trabalhos.map(trabalho => {
      if (avaliacoes.findIndex(avaliacao => avaliacao.id === trabalho.idTrabalho) > -1) {
        avaliados += 1;
      } else if (checks.findIndex(check => check.idAvaliador === trabalho.idAvaliador) > -1) {
        emAndamento += 1;
      } else {
        naoAvaliados += 1;
      }
    });
    const chart = {
      chartType: 'PieChart',
      dataTable: [
        ['Estado', 'Trabalhos'],
        ['Avaliado', avaliados],
        ['Não Avaliado', naoAvaliados],
        ['Em Andamento', emAndamento]
      ],
      options: {
        width: 380,
        colors: ['#32CD32', '#FF0000', '#FFA500']
      }
    };
    return chart;
  }

  private checkChart(trabalhos: Array<Trabalho>, checks: Array<Check>, avaliacoes: Array<Avaliacao>) {
    const avaliadores = trabalhos
      .map(trabalho => trabalho.idAvaliador)
      .filter((value, index, self) => self.indexOf(value) === index)
      .length;
    const avaliadoresPresentes = checks
      .map(check => check.idAvaliador)
      .filter((value, index, self) => self.indexOf(value) === index)
      .length;
    const avaliadoresSubstitutos = checks
      .filter(check => check.tipo === 'in-sub')
      .map(check => check.idAvaliador)
      .filter((value, index, self) => self.indexOf(value) === index)
      .length;
    const chart = {
      chartType: 'PieChart',
      dataTable: [
        ['Check-in', 'Avaliadores'],
        ['Efetuado', avaliadoresPresentes - avaliadoresSubstitutos],
        ['Efetuado - Substituto', avaliadoresSubstitutos],
        ['Não Efetuado', avaliadores - avaliadoresPresentes]
      ],
      options: {
        width: 380,
        colors: ['#32CD32', '#033DFC', '#FF0000']
      }
    };
    return chart;
  }

}

interface ChartRow {
  trabalhos: {
    title: string,
    chart: GoogleChartInterface
  };
  avaliadores: {
    title: string,
    chart: GoogleChartInterface
  };
}
