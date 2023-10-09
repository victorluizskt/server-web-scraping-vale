import { Base } from "./Base";

interface ClassPassageSearch extends Base {
    classesPassagem: {
        codigoFerrovia: string;
        id: Int32Array;
        indicadorClasseCadeirante: string;
        nome: string;
    }[];
};

export default ClassPassageSearch;