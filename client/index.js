const express = require('express');
const jsdome = require('jsdom');
const app = express();
const dom = new jsdome.JSDOM("");
const jquery = require('jquery')(dom.window);


const daprPort = '3500';
const daprHost = `http://localhost:${daprPort}/v1.0/invoke/meo/method/`;
const errorResponse = "Opps! Something went wrong"

var meo = {};

app.get('', async (_req, res) => {
    try {
        const response = await fetch(`${daprHost}`);
        if (!response.ok){
            throw errorResponse;
        }
        const welcome = await response.json();
        dom.window.document.body.innerHTML = res.send(welcome);
    } catch (error) {
        console.log(error);
        dom.window.document.body.innerHTML = res.status(500).send({message: error});
    }
});

app.get('/meos', async (_req, res) => {
    try {
        const response = await fetch(`${daprHost}/meos`);
        if(!response.ok){
            throw errorResponse;
        }
        const listMeo = await response.json();
        dom.window.document.body.innerHTML = res.json(listMeo);
    } catch (error) {
        console.log(error);
        dom.window.document.body.innerHTML = res.status(500).send({message: error});
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