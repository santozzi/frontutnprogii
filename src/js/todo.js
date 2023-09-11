import {article} from './articles.js';
import { init,getTasks,getTask, createTask, updateTask, deleteTask  } from './services/tasks.js';
import {Task} from './models/entities/task.js';
const section = document.getElementById('section_id');

const articles = document.getElementsByClassName('todo_article');


async function tasks() {
  try{
    
    const tasks = await getTasks();
    //section.removeChild(articles[0]);
    if (section.hasChildNodes() ){
      section.innerHTML = '';
    }

     tasks.forEach(tarea => {
        const dia = new Date(tarea.created);
        
        section.insertAdjacentHTML(
           'beforeend', 
           article(
               tarea.title,
               tarea.completed,
               tarea.description,
               `${dia.getDate()}/${dia.getMonth()}/${dia.getFullYear()}`
                  )
                  );
    });
  }catch(error){
    console.log(error);
  }  
  }
async function task(id) {
    try{
      const tarea = await getTask(id);
      const dia = new Date(tarea.created);
      section.insertAdjacentHTML(
         'beforeend', 
         article(
             tarea.title,
             tarea.completed,
             tarea.description,
             `${dia.getDate()}/${dia.getMonth()}/${dia.getFullYear()}`
                )
                );
    }catch(error){
      console.log(error);
    }
}
function create() {
  const task = new Task(7, 'Tarea 7', 'Descripción de la tarea 7', false, '2023-09-10T13:48:27.820660Z');
  try{
    createTask(task);
  }catch(error){
    console.log(error);
  }
}
function update(id, task) {
try{
    updateTask(id,task);
  }catch(error){
    console.log(error);
  }
}
function remove(id) { 
  try{
    deleteTask(id);
  }catch(error){
    console.log(error);
  }
}
init();
const tarea = new Task(6, 'Tarea 6', 'Descripción actualizada de la tarea 6', true, '2023-09-10T13:48:27.820660Z');
  
update(6,tarea)
tasks();
remove(5);
tasks();



           




  