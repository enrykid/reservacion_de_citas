const jwt = require('jsonwebtoken');
const User = require('../models/scheduleModel')


const Cita = require("../models/scheduleModel");

exports.createCita = async (req, res) =>{
//console.log(req.body);
try {
    let cita;
    //crear tarea
    cita = new Cita(req.body);
   await cita.save();
   res.send(cita);
} catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
}
}

exports.getCitas = async (req,res)=>{
    try {
        const citas = await Cita.find();
        res.json(citas)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getCita = async (req,res)=>{
    try {
        let cita = await Cita.findById(req.params.id); 
        
        if (!cita) {
            res.status(404).json({msj: 'no existe la tarea'})
        }
        res.json(cita);
 
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.updateCita = async (req,res)=>{
    try {
        const {description, responsable} = req.body;
        let cita = await Cita.findById(req.params.id); 
        
        if (!cita) {
            res.status(404).json({msj: 'no existe la tarea'})
        }
        cita.description = description;
        cita.responsable = responsable;

        cita = await Cita.findByIdAndUpdate({_id: req.params.id},cita,{new: cita})
        res.json(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteCita = async (req,res)=>{
    try {
        let cita = await cita.findById(req.params.id); 
        
        if (!cita) {
            res.status(404).json({msj: 'no existe la tarea'})
        }
await Cita.findOneAndRemove({id_: req.params.id})
        res.json({msg:'Tarea eliminada con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

