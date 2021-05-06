import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App configurable

const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://hemant:2834@cluster0.sasse.mongodb.net/tinder-clone?retryWrites=true&w=majority"


//middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API endpoint
app.get('/', (req, res) => {
    res.status(200).send("Hello")
});

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, card) => {
        if(err) {
            res.status(500).send(err.message)
        } else {
            res.status(201).send(card);
        }
    })
})

app.get('/tinder/card', (req, res) => {
    Cards.find((err, card) => {
        if(err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).send(card);
        }
    })
})
//Listner
app.listen(port, () => console.log(`listen to port: ${port}`));