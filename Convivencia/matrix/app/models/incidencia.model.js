const mongoose= require('mongoose');

const IncidenciaSchema = mongoose.Schema({
    alumno:String,
    grupo:String,
    profe:String,
    horari:String,
    data:String,
    lloc:String,
    opA:String,
    opB:String,
    opC:String,
    opD:String,
    tareas:String,
    fechaTareaInicioD:String,
    fechaTareaFinD:String,
    horaTareaInicioD:String,
    horaTareaFinD:String,
    opE:String,
    InicioSuspE:String,
    FinalSuspE:String,
    opF:String,
    InicioSuspF:String,
    FinalSuspF:String,
    btLleu:String, //Pongo los botones ???
    btGreu:String,
    tipLleu01:String,  
    tipLleu02:String,
    tipLleu03:String,
    tipLleu04:String,
    tipLleu05:String,
    tipLleu06:String,
    tipLleu07:String,
    tipLleu08:String,
    tipLleu09:String,
    tipLleu10:String,
    tipLleu11:String,
    tipLleu12:String,
    tipLleu13:String,
    tipLleu14:String,
    tipLleu15:String,
    tipLleu16:String,
    tipLleu17:String, 
    tipLleu18:String,
    tipLleu19:String,
    tipGreu01:String,
    tipGreu02:String,
    tipGreu03:String,
    tipGreu04:String,
    tipGreu05:String,
    tipGreu06:String,
    tipGreu07:String,
    tipGreu08:String,
    tipGreu09:String,
    tipGreu10:String,
    tipGreu11:String,
    tipGreu12:String,
    tipGreu13:String,
    tipGreu14:String,
    tipGreu15:String,
    tipGreu16:String,
    tipGreu17:String,
    tipGreu18:String,
    tlfPad:String,
    ePad:String,
    fechaHoy:String,
    enviar:String, //El enviar tambien ??


















},{
    timestamps:true
});


module.exports = mongoose.model('Incidencia',IncidenciaSchema);