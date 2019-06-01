# Node.js API Example: Get Stock Quote from TSX

## Steps to Run
0. Copy app.js and package.json [at GitHub](https://github.com/valentine-dev/valentine-dev.github.io/tree/master/nodejs/app1)
1. Install Node.js
2. Run "npm install" to Get Dependencies
3. Run "node app.js" to Start Server
4. In Browser, Go to [`http://localhost:3000/quote?symbol=GIB.A`](http://localhost:3000/quote?symbol=GIB.A) to Get Stock Quote

```json
{
   "equityinfo":{
      "longname":"CGI Inc. Class A Subordinate  Voting Shares",
      "shortname":"CGI Group Cl A S"
   },
   "pricedata":{
      "changepercent":-0.182371,
      "high":99.07,
      "lasttradedatetime":"2019-05-31T16:00:00-04:00",
      "last":98.52,
      "low":98.26,
      "change":-0.18,
      "tradevolume":3141,
      "prevclose":98.7,
      "tick":1,
      "lastmarketidentificationcode":"TSX",
      "open":98.27,
      "sharevolume":466518
   },
   "datetime":"2019-06-01T05:47:06-04:00",
   "datatype":"equity",
   "entitlement":"RT",
   "key":{
      "exShName":"TSX",
      "symbol":"GIB.A:CA",
      "exchange":"TSX",
      "exLgName":"Toronto Stock Exchange"
   },
   "symbolstring":"GIB.A"
}
```

## To do items
* UI using React JS
  1. Add input text field
  2. Add output display field
