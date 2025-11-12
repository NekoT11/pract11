import { addTable } from "./module/table.js"
// import { error } from "./module/valid.js"
import { flag } from "./module/valid.js"
import { add_element } from "./module/add_element.js";
import { go_form } from "./module/go_form.js";
import { search_surname } from "./module/search.js";


let training = document.getElementById('start_training')
let addStudent = document.getElementById('addStudent')
let search_button = document.getElementById('search_button')



// const Year = new Date().getFullYear();


// const localDate = now.toLocaleDateString('ru-RU')
// const Bday_limit = parseDate('01.01.1900');
// const myDate = parseDate('01.01.1900');



addStudent.addEventListener('click', (add) => {

add_element()
addTable()



})

add_student_table.addEventListener('click', (add) => {

go_form()

})

search_button.addEventListener('click', (add) => {
add.preventDefault
search_surname()

})