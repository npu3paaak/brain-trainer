import expressHandlebars from 'express-handlebars';
import bodyParser from 'body-parser';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {

    }
});
import __dirname from './public/__dirname.js';
import express from 'express';
let app = express();
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.use(express.static(__dirname));


import { wordsCounter } from './handlers/mainPageHandler.js';
import { random } from "./arrayWords.js";
import { mainPageHandler } from './handlers/mainPageHandler.js';

let countWords = 3;

mainPageHandler(app, random, countWords);
wordsCounter(app, random, countWords);


app.listen(3000, function() {
    console.log('running');
});