interface ResponseTicket {
    buscarPorSubTrecho?: string;
    dataViagemPrevista?: Date;
    dataViagemProgramada?: Date;
    dataViagemVoltaPrevista?: Date;
    dataViagemVoltaProgramada?: Date;
    descricaoDestino?: string;
    descricaoOrigem?: string;
    excessao?: string;
    passagensIda: 
    [{
        chegadaPrevista?: Date;
        chegadaProgramada?: Date;
        descricaoClasse?: string;
        descricaoDestino?: string;
        descricaoJuncao?: string;
        descricaoOrigem?: string;
        descricaoPrefixoTrem?: string;
        descricaoSubTrechos?: Array<string>;
        descricaoTrem?: string;
        horaChegadaPrevista?: string;
        horaChegadaProgramada?: string;
        horaPartidaPrevista?: string;
        horaPartidaProgramada?: string;
        idClasse?: number;
        idDestino?: number;
        idOrigem?: number;
        indicadorClasseCadeirante?: string;
        partidaPrevista?: Date;
        partidaProgramada?: Date;
        qtdTotal?: number;
        tipo?: string;
        tokenCompra?: string;
        valorTotal?: number;
    }];
    passagensVolta?: number
    quantidadePassageiros?: number
};

export { ResponseTicket };