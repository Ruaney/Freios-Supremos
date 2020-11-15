const mongoose = require('mongoose');

const connectURL =process.env.MONGOODB_URI
const connect = () => {
    mongoose.connect(connectURL,{useUnifiedTopology: true}, { useNewUrlParser: true } )
    const connection = mongoose.connection;
    connection.on('error', () => console.error("erro ao se conectar no mongo"))
    connection.once('open', () => console.log('Conectado ao banco'))
}

module.exports = {
    connect
}