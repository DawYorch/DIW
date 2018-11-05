const mongoose= require('mongoose');

const IncidenciaSchema = mongoose.Schema({
    alumno:String,
    grupo:String,
    profe:String,
    horari:String
},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);