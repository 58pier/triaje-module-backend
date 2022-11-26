const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

app.use(bodyParser.json())

const MongoClient = require('mongodb').MongoClient;

let db;
let collection;
MongoClient.connect('mongodb+srv://admin:Hwufcpam@cluster0.2un7enz.mongodb.net/module-triaje', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    db = client.db('module-triaje')
    collection= db.collection('patient')
})

app.listen(3006,function () {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

app.get('/patients', (req,res) => {
    db.collection('patient').find().toArray()
        .then(results => {
            res.json(results);
        }).catch(error => console.error(error));
})

app.post('/patients', (req, res) => {
    console.log(req.body)
    collection.insertOne(req.body)
        .then(result => {
            res.json('Success');
        })
        .catch(error => console.error(error))
})

