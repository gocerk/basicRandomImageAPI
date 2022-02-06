const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const Router = require('./routes/imageRoute');
const cors = require('cors');
const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(express.json({'limit': '50mb'}));
app.use(express.urlencoded({'extended': true, 'limit': '50mb'}));

app.use('/image/', Router);
app.use(cors(corsOptions));

app.listen(3000);
