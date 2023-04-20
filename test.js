const students = [
    {
        id: 1,
        name: 'ahmed',
        city: 'cairo'
    }
    ,
    {
        id: 2,
        name: 'abod',
        city: 'alex'
    }
    ,
    {
        id: 3,
        name: 'amir',
        city: 'menofia'
    }
    ,
    {
        id: 4,
        name: 'ayman',
        city: 'cairo'
    }
]
import express, { response } from 'express'; 
const app = express();

const studentsFunction =(request,response)=>{
    let output ='<ul>';
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        output+="<li>"+student.name+"</li>"
    }
    output+='</ul>'
    response.send(output);
}
app.get('/students',studentsFunction) 
app.listen(5000);
