'use strict';

const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

const host = 'https://app.quotemedia.com/datatool/getSnapQuotes.json';
const token = 'f2adfab0fdd2d0d89eacfd4eb78aa7a2439f4632fd11568bf80c6adce1a665ba';

app.get('/test', (req, res) => res.send('App is running well!'));
app.get('/', (req, res) => res.send('Usage: /quote?symbol=xxx'));

app.get('/quote', (req, res) => {
   const symbol = req.query.symbol;
   if (symbol) {
   axios({
      method: 'get',
      url: host + '?symbols=' + symbol + '&token=' + token,
      headers: { 'Origin': 'https://web.tmxmoney.com' }
   })
      .then(resp => {
         const quote = resp.data.results.quote[0];
         console.log("Got quote info ... ");
         console.log(quote);
         res.send(resp.data.results.quote[0]);
      }).catch(error => {
         console.error(error);
         res.send(error);
      });
   } else {
      res.sendStatus(400);
   }
   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));