const express = require('express');
const https = require('https');
const axios = require('axios');
const app = express();


app.post('/cb', async (req,res) =>{

    let body = req.body;
    console.log(body);
    res.status(200).json({
        ok:true,
        body
    });


});

module.exports = app;