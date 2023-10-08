import express from 'express';
import controller from '/home/victor/Documents/server-scraping-vale/source/controllers/post';
const router = express.Router();

router.post('/obterLocaisFerroviarios', controller.getRailwayLocations);

export = router;