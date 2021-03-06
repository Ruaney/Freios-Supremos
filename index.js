const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api.route');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoose = require('mongoose');
const connectURL =process.env.MONGOODB_URI
mongoose.connect(connectURL,{useUnifiedTopology: true}, { useNewUrlParser: true } )
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){})
//conecta ao banco

app.use('/api', api)
app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({error: err.message});
})



app.get('/', function(req,res){
    res.send('<h2><a href="https://github.com/Ruaney/Freios-Supremos">Mais informações: Git Hub</a></h2>')
});


//Servidor
let porto = process.env.PORT;
if(porto == null || porto == "")
    porto = 8000;

app.listen(porto)
