const Incidencia = require('../models/incidencia.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos la incidencia
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"incidencia Vacia..." 
        });
    }

    const incidencia = new Incidencia({
		
        alumno: req.body.alumno || "No especificado",
        grupo: req.body.grupo || "No especificado",
        profe: req.body.profe || "No especificado",
        horari: req.body.horari  || "No especificado",
		data: req.body.data  || "00/00/0000",
		lloc: req.body.lloc || "Lugar del incidente",
		opA: req.body.opA || "No especificado",
		opB: req.body.opB || "No especificado",
		opC: req.body.opC || "No especificado",
		opD: req.body.opD || "No especificado",
		tareas: req.body.tareas || "No especificado",
		fechaTareaInicioD: req.body.fechaTareaInicioD  || "00/00/0000",
		fechaTareaFinD: req.body.fechaTareaFinD  || "00/00/0000",
		horaTareaInicioD: req.body.horaTareaInicioD  || "00/00/0000",
		horaTareaFinD: req.body.horaTareaFinD  || "00/00/0000",
		opE: req.body.opE || "No especificado",
		InicioSuspE: req.body.InicioSuspE  || "00/00/0000",
		FinalSuspE: req.body.FinalSuspE  || "00/00/0000",
		opF: req.body.opF || "No especificado",
		InicioSuspF: req.body.InicioSuspF  || "00/00/0000",
		FinalSuspF: req.body.FinalSuspF || "00/00/0000",
		// btLleu:String, //Pongo los botones ???
		// btGreu:String,
		
		
		tipLleu01: req.body.tipLleu01 || false,  
		tipLleu02: req.body.tipLleu02 || false,
		tipLleu03: req.body.tipLleu03 || false,
		tipLleu04: req.body.tipLleu04 || false,
		tipLleu05: req.body.tipLleu05 || false,
		tipLleu06: req.body.tipLleu06 || false,
		tipLleu07: req.body.tipLleu07 || false,
		tipLleu08: req.body.tipLleu08 || false,
		tipLleu09: req.body.tipLleu09 || false,
		tipLleu10: req.body.tipLleu10 || false,
		tipLleu11: req.body.tipLleu11 || false,
		tipLleu12: req.body.tipLleu12 || false,
		tipLleu13: req.body.tipLleu13 || false,
		tipLleu14: req.body.tipLleu14 || false,
		tipLleu15: req.body.tipLleu15 || false,
		tipLleu16: req.body.tipLleu16 || false,
		tipLleu17: req.body.tipLleu17 || false, 
		tipLleu18: req.body.tipLleu18 || false,
		tipLleu19: req.body.tipLleu19 || false,
		
		
		tipGreu01: req.body.tipGreu01 || false,
		tipGreu02: req.body.tipGreu02 || false,
		tipGreu03: req.body.tipGreu03 || false,
		tipGreu04: req.body.tipGreu04 || false,
		tipGreu05: req.body.tipGreu05 || false,
		tipGreu06: req.body.tipGreu06 || false,
		tipGreu07: req.body.tipGreu07 || false,
		tipGreu08: req.body.tipGreu08 || false,
		tipGreu09: req.body.tipGreu09 || false,
		tipGreu10: req.body.tipGreu10 || false,
		tipGreu11: req.body.tipGreu11 || false,
		tipGreu12: req.body.tipGreu12 || false,
		tipGreu13: req.body.tipGreu13 || false,
		tipGreu14: req.body.tipGreu14 || false,
		tipGreu15: req.body.tipGreu15 || false,
		tipGreu16: req.body.tipGreu16 || false,
		tipGreu17: req.body.tipGreu17 || false,
		tipGreu18: req.body.tipGreu18 || false,
		tlfPad: req.body.tlfPad || "No especificado",
		ePad: req.body.ePad || "No especificado",
		fechaHoy: req.body.fechaHoy || "00/00/0000",
		gravedad: req.body.gravedad || "No especificado", 
		

        
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
										//CUIDADO CON LOS NOMBRES INCIDENCIA-INCIDENCIAS Mayúsculas y Minúsculas

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
            message: "Incidencia vacia"
        });
    }

    // Find note and update it with the request body
	
    Incidencia.findByIdAndUpdate(req.params.incidenciaId, {
		
        alumno: req.body.alumno || "No especificado",
        grupo: req.body.grupo || "No especificado",
        profe: req.body.profe || "No especificado",
        horari: req.body.horari  || "No especificado",
		data: req.body.data  || "00/00/0000",
		lloc: req.body.lloc || "Lugar del incidente",
		opA: req.body.opA || "No especificado",
		opB: req.body.opB || "No especificado",
		opC: req.body.opC || "No especificado",
		opD: req.body.opD || "No especificado",
		tareas: req.body.tareas || "No especificado",
		fechaTareaInicioD: req.body.fechaTareaInicioD  || "00/00/0000",
		fechaTareaFinD: req.body.fechaTareaFinD  || "00/00/0000",
		horaTareaInicioD: req.body.horaTareaInicioD  || "00/00/0000",
		horaTareaFinD: req.body.horaTareaFinD  || "00/00/0000",
		opE: req.body.opE || "No especificado",
		InicioSuspE: req.body.InicioSuspE  || "00/00/0000",
		FinalSuspE: req.body.FinalSuspE  || "00/00/0000",
		opF: req.body.opF || "No especificado",
		InicioSuspF: req.body.InicioSuspF  || "00/00/0000",
		FinalSuspF: req.body.FinalSuspF || "00/00/0000",
		btLleu:String, //Pongo los botones ???
		btGreu:String,
		
		
		tipLleu01: req.body.tipLleu01 || false,  
		tipLleu02: req.body.tipLleu02 || false,
		tipLleu03: req.body.tipLleu03 || false,
		tipLleu04: req.body.tipLleu04 || false,
		tipLleu05: req.body.tipLleu05 || false,
		tipLleu06: req.body.tipLleu06 || false,
		tipLleu07: req.body.tipLleu07 || false,
		tipLleu08: req.body.tipLleu08 || false,
		tipLleu09: req.body.tipLleu09 || false,
		tipLleu10: req.body.tipLleu10 || false,
		tipLleu11: req.body.tipLleu11 || false,
		tipLleu12: req.body.tipLleu12 || false,
		tipLleu13: req.body.tipLleu13 || false,
		tipLleu14: req.body.tipLleu14 || false,
		tipLleu15: req.body.tipLleu15 || false,
		tipLleu16: req.body.tipLleu16 || false,
		tipLleu17: req.body.tipLleu17 || false, 
		tipLleu18: req.body.tipLleu18 || false,
		tipLleu19: req.body.tipLleu19 || false,
		
		
		tipGreu01: req.body.tipGreu01 || false,
		tipGreu02: req.body.tipGreu02 || false,
		tipGreu03: req.body.tipGreu03 || false,
		tipGreu04: req.body.tipGreu04 || false,
		tipGreu05: req.body.tipGreu05 || false,
		tipGreu06: req.body.tipGreu06 || false,
		tipGreu07: req.body.tipGreu07 || false,
		tipGreu08: req.body.tipGreu08 || false,
		tipGreu09: req.body.tipGreu09 || false,
		tipGreu10: req.body.tipGreu10 || false,
		tipGreu11: req.body.tipGreu11 || false,
		tipGreu12: req.body.tipGreu12 || false,
		tipGreu13: req.body.tipGreu13 || false,
		tipGreu14: req.body.tipGreu14 || false,
		tipGreu15: req.body.tipGreu15 || false,
		tipGreu16: req.body.tipGreu16 || false,
		tipGreu17: req.body.tipGreu17 || false,
		tipGreu18: req.body.tipGreu18 || false,
		tlfPad: req.body.tlfPad || "No especificado",
		ePad: req.body.ePad || "No especificado",
		fechaHoy: req.body.fechaHoy || "00/00/0000",
		gravedad: req.body.gravedad || "No especificado",


		
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
                message: "Incidencia no encontrada " + req.params.incidenciaId
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
            message: "No podemos eliminar esa Incidencia with id " + req.params.incidenciaId
        });
    });
};
