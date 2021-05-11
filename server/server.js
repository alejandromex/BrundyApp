const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, '../public')));
require('dotenv').config();


app.use(require('./routes/index'));

const port = process.env.PORT;

app.listen(port, () =>{
    console.log("Escuchando el puerto: ",port);
})