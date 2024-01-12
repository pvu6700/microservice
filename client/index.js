import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as jsdom from "jsdom";
const app = express();
const dom = new jsdom.JSDOM("template/index.html");
// const jquery = require('jquery')(dom.window);

const daprPort = '3500';
const daprHost = `http://localhost:${daprPort}/v1.0/invoke/meo/method/`;
const errorResponse = "Opps! Something went wrong"

var meo = {};
app.use(express.static('template'));
app.get('', async (_req, res) => {
    try {
        const response = await fetch(`${daprHost}`);
        if (!response.ok){
            throw errorResponse;
        }
        const welcome = await response.json();
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const _retfile = path.join(__dirname, 'index.html');
        document.querySelector(".welcome").append(welcome);
        // res.send(welcome);
        res.sendFile(_retfile);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error});
    }
});

app.get('/meos', async (_req, res) => {
    try {
        const response = await fetch(`${daprHost}/meos`);
        if(!response.ok){
            throw errorResponse;
        }
        const listMeo = await response.json();
        res.json(listMeo);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error});
    }
});

app.post('/addmeos', async (req, res) => {
    const data = req.body;
    console.log("Got new obj")

    try {
        const response = await fetch(`${daprHost}/addmeos`, {
            method: "POST",
            body: JSON.stringify(data),
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw errorResponse;
        }
        console.log("OK");
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error});
    }
});

app.listen(3000, () => console.log("Application is running"));