const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api.route');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs')

//conecta ao banco
const mongoose = require('mongoose');
const connectURL ='mongodb+srv://db_usernew:root@cluster0.2mh8x.mongodb.net/FreiosSupremos?retryWrites=true&w=majority'
mongoose.connect(connectURL,{useUnifiedTopology: true}, { useNewUrlParser: true } )
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){})

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