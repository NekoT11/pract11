// import {eror} from ".main.js"
// import { flag } from "./module/valid.js"
import { flag } from "./valid.js"
import { studentsArr } from "./add_element.js";
import { calculateAge } from "./calculate.js";
import { formatStudyYears } from "./calculate.js";

// import { calcformatStudyYearsulateAge } from "./calculate.js";



let data = document.getElementById('data')
const tr = document.createElement('tr')

let name = document.getElementById('name')
let surname = document.getElementById('surname')
let lastname = document.getElementById('lastname')
let Bday = document.getElementById('Bday')
let start_training = document.getElementById('start_training')
let facult = document.getElementById('facult')




export function addTable() {

    if (flag === true) {

        let tr = document.createElement('tr')

        let td_fio = document.createElement('td')
        let td_facult = document.createElement('td')
        let td_Bday = document.createElement('td')
        let td_start_training = document.createElement('td')
        data.append(tr)
        td_fio.textContent = name.value + " " + surname.value + " " + lastname.value
        tr.append(td_fio)

        td_facult.textContent = facult.value
        tr.append(td_facult)

        td_Bday.textContent = Bday.value + ` ${calculateAge(Bday.value)}  лет   `
        tr.append(td_Bday)

        td_start_training.textContent = formatStudyYears(start_training.value)
        tr.append(td_start_training)
        

    }


}