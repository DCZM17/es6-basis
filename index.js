import materias from "./materias.js";


//1. recorrido de arreglo: foreach
materias.forEach((materia)=> {
if(materia.profesor === 'Cristian Buitrago'){
    console.log(`materias: ${materia.name}`)
    console.log(`materias: ${materia.notas}`)
}
})
//2. Convertir a un arreglo de profesores 
//metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})
console.log(profesores)

//3 Agregar una materia al arreglo de materias
//push()
materias.push(
    {
        id: 4,
        name:"Cultura Fisica",
        profesor:"Luis Baquero",
        notas:[
            3.6,
            4.5
        ]
    }
)
console.log(materias)

//4 busqueda en arreglo:
//find()
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})
console.log(PHP)





//traer la dependencia del componente suma 
/*import {sumar , restar} from './sumar.js'
import estudiantes from './materias.js'

//desestructuracion

let {first_name, last_name, id } = estudiantes
/*
//let: variables
let a = 10
//const: constantes
const b = 29


console.log(`suma de a+b:${sumar(a,b)}`)
console.log(`resta de a-b:${restar(a,b)}`)

console.log(`Nombre estudiante ${first_name}`)
console.log(`Apellido estudiante ${last_name}`)
console.log(`Id estudiante ${id}`)
*/

