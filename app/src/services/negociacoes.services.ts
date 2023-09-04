import { negociacoesDia } from "../interface/negociacoes.dia.js";
import { Negociacao } from "../models/negociacao.js";

export class negociacoesServices {
    public obterNegociacoes (): Promise<Negociacao[]> {
        return fetch ('http://localhost:8080/dados')
            .then (res => res.json())
            .then ((dados: negociacoesDia[]) => {
                return dados.map ((dado) => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            })
    }
}