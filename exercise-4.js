/*
Create a program that loops over the 2 arrays; if t
here are any common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'Math'];

//=================   Ciclo For ===================//


const commonCourses = [];
for (let course1 of student1Courses ){
    for(let course2 of student2Courses ){
        if( course1 === course2) commonCourses.push( course1 ); //push almacena en un nuevo arreglo el dato si se cumple la condicion
    }
}
console.log("Cursos en común: " +  commonCourses.join(", "));



//=================== filter Include =================//

const commonCourses2 = student1Courses.filter( course1 => student2Courses.includes(course1)) //filter te regresa lo quencumpla con la condicion con una arreglo
console.log(commonCourses2);
// include busca en los arreglos el argumento que le asigno y es boolean