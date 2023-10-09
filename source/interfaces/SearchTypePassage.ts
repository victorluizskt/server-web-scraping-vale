import { Base } from "./Base";

interface SearchTypePassage  extends Base {
    classesPassagem: {
        codigo: string;
        codigoFerrovia: string;
        descricaoInternet: string;
        gratuidade: boolean;
        id: Int32Array;
        indicadorAlertaDocumentoComprobatorio: string;
        indicadorNecessitaAcompanhante: string;
        indicadorOcupacaoAssento: string;
        limiteInferior: Int32Array;
        limiteSuperior: Int32Array;
    }[];
};

export default SearchTypePassage;