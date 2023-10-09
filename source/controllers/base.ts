import axios from "axios";
import https from 'https';

const base = axios.create({
    baseURL: "https://tremdepassageiros.vale.com/sgpweb/rest/externo",
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export default base;