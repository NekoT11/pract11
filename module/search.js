import { students,studentsArr} from "./add_element.js";
import { addTable } from "./table.js";


let search = document.getElementById('search')
let surname = document.getElementById('surname')
let data = document.getElementById('data')

export function search_surname(){

data.innerHTML = `
        <tr>
            <th>ФИО</th>
            <th>Факультет</th>
            <th>Дата рождения </th>
            <th>Год обучения</th>
        </tr>
    `;


const search_info = search.value.toLowerCase().trim();
// const lover_info = search_info.toLoverCase()

// const info_surname = surname.value
// const lover_info_surname = info_surname.toLoverCase()
let found = false;

studentsArr.forEach(students =>{
    if(students.surname.toLowerCase().includes(search_info)){
        addTable(students)
        found = true
    }

}

)



}