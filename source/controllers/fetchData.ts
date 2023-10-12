import { Request, Response } from 'express';
import { AxiosResponse } from 'axios';
import base from './base';

const fetchData = async <T>(req: Request, res: Response, endpoint: string): Promise<void> => {
    try {
        const codigoFerrovia: string = req.body.codigoFerrovia;
        const result: AxiosResponse<T[]> = await base.post(endpoint, { codigoFerrovia });
        const data: T[] = result.data;
        res.status(200).json({ message: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocorreu um erro na solicitação.' });
    }
};

export default { fetchData };