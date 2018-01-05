const express = require("express");
const pug = require("pug");
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/** BODY PARSER **/
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ 
        extended: true
    })); 
    app.use(express.json());

fs.readFile('./public/doc/pride-and-prejudice.txt', 'utf8', function(err, data) {
    if (err) throw err;
    obj.processDoc(data);
});
      
app.get('/', function (req, res){
    res.render('index', {title:'SCV Excercise', message: 'SCV Excercise',
    textAnalyzed : obj.textAnalyzed,
    number_of_words: obj.number_of_words,
    number_of_different_words: obj.number_of_different_words,
    number_of_letters: obj.number_of_letters,
    number_of_symbols: obj.number_of_symbols
    });
});

app.post('/', function(req, res){
    //posted
    let textInput = req.body.textInput;
    obj.processDoc(textInput);
    res.render('index', {title:'SCV Excercise', message: 'SCV Excercise', postedText: textInput,
    textAnalyzed : obj.textAnalyzed,
    number_of_words: obj.number_of_words,
    number_of_different_words: obj.number_of_different_words,
    number_of_letters: obj.number_of_letters,
    number_of_symbols: obj.number_of_symbols} );
});

app.listen(3000, () => console.log('server en puerto 3000'));

var obj = {
    /*
    This method should return an object with the following attributes:
    - number_of_words: the total number of words in the document
    - number_of_different_words: the total number of different words in the document
    - number_of_letters: the total number of letters in the document
    - number_of_symbols: any non-letter and non-digit character, excluding white spaces
    */
    textAnalyzed : '',
    number_of_words: 0,
    number_of_different_words: 0,
    number_of_letters: 0,
    number_of_symbols: 0,
    processDoc: data => {
        obj.textAnalyzed = data;

        //Creates an array from data received spliting by spaces
        const arrWords = data.replace(/(^\s*)|(\s*$)/gi,"").split(' ');

        obj.number_of_words = arrWords.length;

        //Reducer return different words with counter
        obj.number_of_different_words = Object.keys(arrWords.reduce(function (arr, item) { 
            if (item in arr) {
              arr[item]++;
            }
            else {
              arr[item] = 1;
            }
            return arr;
          }, {})).length;
        
        obj.number_of_letters = data.match(/\S/g).length;
        
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        obj.number_of_symbols = Object.keys(arrWords.reduce(function (arr, item) {
            if (format.test(item)) {
              arr[item]++;
            }
            else {
              arr[item] = 1;
            }
            return arr;
          }, {})).length;
    }
};