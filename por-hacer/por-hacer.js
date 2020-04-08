const fs = require('fs')


let listadoPorHacer = []

const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer)
    JSON.a

    fs.writeFile('db/data.json',data,(err) =>{
        if(err) throw new Error('No se pudo grabar', err)
    })

}

const cargarDB = () =>{
    
    try {
        listadoPorHacer = require('../db/data.json') 
    } catch (error) {
        listadoPorHacer = []
    }
    

}

const crear = (descripcion) =>{

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardarDB()

    return porHacer
}

const listar = () =>{
    cargarDB()

    return listadoPorHacer
}


const actualizar = (descripcion,completado) =>{
    cargarDB()

    const actualizarDB = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion)

    if(actualizarDB >= 0){
        listadoPorHacer[actualizarDB].completado = completado
        guardarDB()

        return "La tarea se ha actualizado con exito"
        
    }else{
        return "No se pudo actualizar la tarea"
    }
        
    
}

const borrar = (descripcion) =>{
    cargarDB()

    const eliminarDB = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if(eliminarDB.length == listadoPorHacer.length){
        return false
    }else{
        listadoPorHacer = eliminarDB
        guardarDB()
        return true
    }



}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}