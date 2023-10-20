import express from 'express';
import { Request, Response } from 'express';
import controller from '../controllers/fetchData';
import RailwayLocation from '../interfaces/RailwayLocation';
import ClassPassageSearch from '../interfaces/ClassPassageSearch';
import SearchTypePassage from '../interfaces/SearchTypePassage';
import { ResponseTicket } from '../interfaces/Ticket';

const router = express.Router();

router.post('/obterLocaisFerroviarios', (req: Request, res: Response) => {
    controller.fetchData<RailwayLocation>(req, res, '/Ferrovia/publico/obterLocaisFerroviarios');
});

router.post('/pesquisaClassePassagem', (req: Request, res: Response) => {
    controller.fetchData<ClassPassageSearch>(req, res, '/VendaInternet/publico/pesquisaClassePassagem');
});

router.post('/pesquisaTipoPassagem', (req: Request, res: Response) => {
    controller.fetchData<SearchTypePassage>(req, res, '/VendaInternet/publico/pesquisaTipoPassagem');
});

router.post('/buscaPassagem', (req: Request, res: Response) => {
    controller.fetchData<ResponseTicket>(req, res, 'VendaInternet/publico/pesquisaPassagem');
})

export = router;