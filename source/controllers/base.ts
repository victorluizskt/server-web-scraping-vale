import axios from "axios";
import https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false });

const base = axios.create({
    baseURL: "https://tremdepassageiros.vale.com/sgpweb/rest/externo/Ferrovia/publico",
    httpsAgent: agent,
});

export default base;