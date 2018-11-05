const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el incidencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"incidencia Vacio..." 
        });
    }

    const incidencia = new Incidencia({
        alumno: req.body.alumno || "Sin Nombre",
        grupo: req.body.grupo || "Sin profesion",
        profe: req.body.profe|| "42",
        horari: req.body.horari  || "21"
    })

    incidencia.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating incidencia"
        });
    });
};



// Obtener todos los incidenciaes
exports.findAll = (req,res) => {

        Incidencia.find().then(incidencias=>{
            res.send(incidencias);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un incidencia por Id
exports.findOne = (req,res) => {
    Incidencia.findById(req.params.incidenciaId)
    .then(incidencia=>{
        if (!incidencia){
            return res.status(404).send({
                message: "Incidencia NOT FOUND con ID " +req.params.incidenciaId
            });
            }
            res.send(incidencia);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Incidencia no encontrado con ese id :" +req.params.incidenciaId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.incidenciaId
             });
        });
    };




// Actualizar un incidencia
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Incidencia vacio"
        });
    }

    // Find note and update it with the request body
    Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
        nombre: req.body.nombre|| "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, {new: true})
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaId
            });
        }
        res.send(incidencia);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "Error updating Incidencia with id " + req.params.incidenciaId
        });
    });
};

// Borrar un incidencia 
exports.delete = (req,res)=>{
    Incidencia.findByIdAndRemove(req.params.incidenciaId)
    .then(incidencia => {
        if(!incidencia) {
            return res.status(404).send({
                message: "Incidencia no encontrado " + req.params.incidenciaId
            });
        }
        res.send({message: "Cthulhu ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Incidencia not found with id " + req.params.incidenciaId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Incidencia with id " + req.params.incidenciaId
        });
    });
};