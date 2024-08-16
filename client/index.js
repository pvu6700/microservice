import express from "express";
import dapr from "@dapr/dapr";
import path from "path";
import * as jsdom from "jsdom";
const app = express();

// app.use(dapr.middleware());

const daprPort = '3500';
const daprHost = `http://localhost:${daprPort}/v1.0/invoke/meo/method/`;
const errorResponse = "Opps! Something went wrong"

var meo = {};
app.use(express.static('template'));
app.get('', async (_req, res) => {
    try {
        const welcomeResponse = await fetch(`${daprHost}`);
        const welcomeData = await welcomeResponse.json();
        const welcome = document.getElementById("welcome");
        welcome.textContent = JSON.stringify(welcomeData);

        res.send(welcome);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error});
    }
});

app.get('/meos', async (_req, res) => {
    try {
        const meoResponse =  await fetch(`${daprHost}/meos`);
        const meoData = await meoResponse.json();

        if(!response.ok){
            throw errorResponse;
        }
        //Update HTMl elements
        const meoList = document.getElementById("meos-list");
        meoData.array.forEach(meo => {
            const meoObj = document.createElement("li");
            listMeo.textContent = JSON.stringify(meo);
            meoList.appendChild(meoObj);
        });
        res.send(listMeo);
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