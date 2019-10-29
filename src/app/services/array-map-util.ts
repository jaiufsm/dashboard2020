import { Trabalho } from '../interfaces/Trabalho';
import { Avaliacao } from '../interfaces/Avaliacao';
import { Check } from '../interfaces/Check';

export class ApiArrayUtils {

    public static trabalhoToObject(trabalho: Array<string>): Trabalho {
        return {
            avaliador: trabalho[0],
            idAvaliador: trabalho[1],
            idTrabalho: trabalho[2],
            titulo: trabalho[3],
            apresentador: trabalho[4],
            orientador: trabalho[5],
            evento: trabalho[6],
            dia: trabalho[7],
            horario: trabalho[8],
            predio: trabalho[9],
            sala: trabalho[10],
            painel: trabalho[11],
            modulo: trabalho[12],
            idModulo: trabalho[13],
            tipoForm: trabalho[14]
        };
    }

    public static avaliacaoToObject(avaliacao: Array<string>): Avaliacao {
        return {
            id: avaliacao[0],
            nomeTrabalho: avaliacao[1],
            avaliadorOriginal: avaliacao[2],
            avaliadorReal: avaliacao[3],
            q1: avaliacao[4],
            q2: avaliacao[5],
            q3: avaliacao[6],
            q4: avaliacao[7],
            q5: avaliacao[8],
            q6: avaliacao[9],
            q7: avaliacao[10],
            q8: avaliacao[11],
            q9: avaliacao[12],
            q10: avaliacao[13],
            estado: avaliacao[14],
            timestamp: avaliacao[15]
        };
    }

    public static checkToObject(check: Array<string>): Check {
        return {
            idAvaliador: check[0],
            nomeAvaliador: check[1],
            data: check[2],
            hora: check[3],
            tipo: check[4]
        };
    }
}
