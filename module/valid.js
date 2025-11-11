
let regForm = document.getElementById('regForm')
let regForm2 = document.getElementById('regForm2')
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let lastname = document.getElementById('lastname')
let Bday = document.getElementById('Bday')

let facult = document.getElementById('facult')
let addStudent = document.getElementById('addStudent')

let p_name = document.getElementById('p_name')
let p_surname = document.getElementById('p_surname')
let p_Bday = document.getElementById('p_Bday')
let p_start_training = document.getElementById('p_start_training')
let p_facult = document.getElementById('p_facult')
let start_training = document.getElementById('start_training')





export let flag = true;

// const Year = new Date().getFullYear();
const now = new Date();
const nowM = now.toISOString().split('T')[0];
const Bday_limit = new Date('1900-01-01');
const year_limit = new Date('2000');


export function error() {
    flag = true


    if (name.value === "") {

        p_name.textContent = 'Введите имя!'
        flag = false

    }
    else {
        p_name.textContent = ""
    }


    if (surname.value === "") {

        p_surname.textContent = 'Введите фамилию!'
        flag = false
    }
    else {
        p_surname.textContent = ""
    }

    // if (lastname.value === "") {

    //     p_lastname.textContent = 'Введите имя!'
    // }
    // else{
    // p_name.textContent = ""}




    if (Bday.value === "" || Bday_limit > Bday.value || Bday.value >= nowM) {
        console.log();

        p_Bday.textContent = 'Введите день рождения!'
        flag = false


    }
    else {
        p_Bday.textContent = ""
    }

    // console.log(start_training.value);
    // console.log(now);



    if (start_training.value === "") {

        p_start_training.textContent = 'Введите дату поступления!'
        flag = false
    }
    else if (year_limit <= start_training.value) {
        p_start_training.textContent = 'Введите дату поступления!'
        flag = false
    }
    else if (start_training.value >= nowM) {
        p_start_training.textContent = 'Введите дату поступления!'
        flag = false
    }
    else {
        p_start_training.textContent = ""
    }




    if (facult.value === "") {

        p_facult.textContent = 'Введите факультет!'
        flag = false
    }
    else {
        p_facult.textContent = ""
    }

    // return(flag)
    

}
 