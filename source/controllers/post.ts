import { Request, Response, NextFunction } from 'express';
import { AxiosResponse } from 'axios';
import base from './base';

interface RailwayLocation {
    excessao: any,
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
}


const getRailwayLocations = async (req: Request, res: Response, next: NextFunction) => {
    let codigoFerrovia: string = req.body.codigoFerrovia;
    let result: AxiosResponse = await base.post('/obterLocaisFerroviarios', { codigoFerrovia });
    let post: [RailwayLocation] = result.data;
    return res.status(200).json({
        message: post
    });
};

export default { getRailwayLocations };