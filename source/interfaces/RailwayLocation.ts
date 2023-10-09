import { Base } from './Base';

interface RailwayLocation extends Base {
    locaisFerroviarios: {
        codigo: string;
        codigoIBGE: string;
        descricaoDetalhada: string;
        descricaoInternet: string;
        ferroviaOperadora: string;
        ferroviaProprietaria: string;
        id: number;
        sequencia?: null;
        unidadeFederacao: string;
    }[];
};

export default RailwayLocation;