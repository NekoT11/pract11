import { error } from "./valid.js"

import { flag } from "./valid.js"


let regForm = document.getElementById('regForm')
let regForm2 = document.getElementById('regForm2')
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let lastname = document.getElementById('lastname')
let Bday = document.getElementById('Bday')
let start_training = document.getElementById('start_training')
let facult = document.getElementById('facult')
let addStudent = document.getElementById('addStudent')
let student_table = document.getElementById('student_table')

export let studentsArr = [];

export function add_element() {
    event.preventDefault()
    error()
    let students = {
        name: name.value,
        surname: surname.value,
        lastname: lastname.value,
        Bday: Bday.value,
        start_training: start_training.value,
        facult: facult.value

    }
    // console.log(flag);
// console.log(event);

    if (flag == true) {
        studentsArr.push(students)
        console.log(studentsArr)
        regForm2.style.display = 'none'
        student_table.style.display ='flex'

    }

}