// import {eror} from ".main.js"
// import { flag } from "./module/valid.js"
import { flag } from "./valid.js"
import { studentsArr } from "./add_element.js";

let data = document.getElementById('data')
const tr = document.createElement('tr')

let name = document.getElementById('name')
let surname = document.getElementById('surname')
let lastname = document.getElementById('lastname')
let Bday = document.getElementById('Bday')
let start_training = document.getElementById('start_training')
let facult = document.getElementById('facult')



export function addTable(){

    if(flag === true){
        
        tr.innerHTML =
        name.value
        // <td> name.value </td>
        // <td></td>
        // <td></td>
        
    }
    

}