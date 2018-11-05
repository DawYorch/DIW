const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({
    extended:true
}));

//Parsearemos los jsones
app.use(bodyParser.json());


// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada");
    }).catch(err => {
        console.log(" Algo ha pasado...saliendo : ",err);
        process.exit();
    });


// Vamos a definir un "punto de inicio" 
// Es la respuesta que daremos si no indicamos
// ninguna ruta. localhost:3000
app.get('/',(req,res)=>{
    res.json({"message":"Bienvenido al desierto de lo real"});
});

// Require Investigadores routes
require('./app/routes/incidencia.routes.js')(app);






// Escuchemos en un puerto

app.listen(3000,() => {
    console.log(" * Server EUW UP and Running");
});