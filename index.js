const express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

require('dotenv').config();

var korisnici = [];

app.get('/', (req, res) => {
    res.send('')
});

app.post('/', (req, res) => {
    korisnici = [...korisnici, req.body]
    res.send('')
})

app.delete('/:prezime', (req, res) => {
    korisnici = korisnici.filter(arg => arg.prezime != req.params.prezime);
    console.log(korisnici);
    res.send(`Korisnik ${req.params.prezime} izbrisan`);
})

app.put('/:prezime', (req, res) => {
    let korisnici = korisnici.map((arg) => {
        korisnik = arg;
        if (korisnik) {
            korisnik.ime = req.body.ime;
            return korisnik;
        }
    })
    res.send(`Korisnik ${req.params.prezime}`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});