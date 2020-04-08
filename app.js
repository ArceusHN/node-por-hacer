

const porHacer = require('./por-hacer/por-hacer')

const color = require('colors')

const {argv} = require('./config/yargs')

let comando = argv._[0]

switch(comando){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break 
    
    case 'listar':
        let listado = porHacer.listar()

        for( let tarea of listado){
            console.log('==========Por Hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('============================='.green);
        }
        break
    
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion,argv.completado))
        break

    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion))
        break
    
    default:
        console.log('Comando no es reconocido');
}