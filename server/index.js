import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import {Letter} from './models/Model.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome!')
});

app.post('/letters', async (request, response) => {
    try {
        if (
            !request.body.person ||
            !request.body.message 
        ) {
            return response.status(400).send ({
                message: 'Send all required fields: person, message',
            });
        }
        const newLetter = {
            person: request.body.person, 
            message: request.body.message,
        };

        const letter = await Letter.create(newLetter);
        
        return response.status(201).send(letter);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

app.get('/letters', async (request, response) => {
    try {
        const letters = await Letter.find({});

        return response.status(200).json({
            count: letters.length, 
            data: letters
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

mongoose 
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });

    