let colors = require('colors');
const estudiantes1 = ["Juan Madero", 
                      "Jack Gonzalez", 
                      "Duvan Zapata"]

const estudiantes2= [
    "Avila",
    "Veronica",
    "Paula"
]
//OPERADOR SPREAD(resto)
const estudiantes3 = [
    'Karol', 
    ...estudiantes1, 
    'laura',
    ...estudiantes2
]

console.log( estudiantes3)
//console.log(estudiantes1[2])


