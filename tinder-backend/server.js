const express = require('express');
const mongoose = require('mongoose');

//App configurable

const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://hemant:2834@cluster0.sasse.mongodb.net/tinder-clone?retryWrites=true&w=majority"


//middleware


// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API endpoint
app.get('/', (req, res) => {
    res.status(200).send("Hello")
})
//Listner
app.listen(port, () => console.log(`listen to port: ${port}`));