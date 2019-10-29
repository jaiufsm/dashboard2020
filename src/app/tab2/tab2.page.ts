import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ApiJaiService } from '../services/api-jai.service';
import { Days } from '../services/days';
import { Avaliacao } from '../interfaces/Avaliacao';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public graficos: Array<ChartRow>;
  private avaliacoes: Array<Avaliacao>;
  private loading = null;

  constructor(private apiJai: ApiJaiService, private loadingController: LoadingController) {}

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
    this.apiJai.getAvaliacoes().then((avaliacoes: Array<Avaliacao>) => {
      const days = Days.getDays();
      for (const day of days) {
        const avaliacoesDia = avaliacoes.filter(avaliacao => avaliacao.timestamp.split(' | ')[0] === day);
        const dataTable = [];
        dataTable.push(['Hora', '']);
        avaliacoesDia.map(avaliacao => {
          const ano = Number(avaliacao.timestamp.slice(6, 10));
          const mes = Number(avaliacao.timestamp.slice(3, 5)) - 1;
          const dia = Number(avaliacao.timestamp.slice(0, 2));
          const hora = Number(avaliacao.timestamp.slice(13, 15));
          const minuto = Number(avaliacao.timestamp.slice(16, 18));
          dataTable.push([new Date(ano, mes, dia, hora, minuto), 1]);
        });
        const googleChart: GoogleChartInterface = {
          chartType: 'ScatterChart',
          dataTable,
          options: {
            width: 380
          },
        };
        const chart = {
          title: day,
          chart: googleChart
        };
        this.graficos.push(chart);
      }
      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

}

interface ChartRow {
  title: string;
  chart: GoogleChartInterface;
}
