let tareas =[];

const tareas_inicial = [
    {"id": 1, "title": "Tarea 1", "description": "Descripción de la tarea 1", "created":"2023-09-10T13:48:27.820660Z","completed": false},
    {"id": 2, "title": "Tarea 2", "description": "Descripción de la tarea 2", "created":"2023-09-10T13:48:27.820660Z","completed": true},
    {"id": 3, "title": "Tarea 3", "description": "Descripción de la tarea 3", "created":"2023-09-10T13:48:27.820660Z","completed": false},
    {"id": 4, "title": "Tarea 4", "description": "Descripción de la tarea 4", "created":"2023-09-10T13:48:27.820660Z","completed": false},
    {"id": 5, "title": "Tarea 5", "description": "Descripción de la tarea 5", "created":"2023-09-10T13:48:27.820660Z","completed": false},
    {"id": 6, "title": "Tarea 6", "description": "Descripción de la tarea 6", "created":"2023-09-10T13:48:27.820660Z","completed": false},
]
const DALAY_TIME = 1000;
const initModel=() => {
   tareas_inicial.forEach(tarea => {
       tareas.push(tarea);
   });
  
}



//crud tasks
 const getTasksModel =  () => {

    return  new Promise((resolve, reject) => {
    
        setTimeout(() => {
          resolve(tareas);
          reject(new Error('Error en la llamada'));
        }, DALAY_TIME);
      });

    
}
const getTaskModel =  (id) => {
   
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(tareas.find(tarea => tarea.id === id));
          reject(new Error('Error en la llamada'));
        }, DALAY_TIME);
      });

}
const createTaskModel =   (task) => {
    tareas.push(task);
}
const updateTaskModel =  (id, task) => {
    const index = tareas.findIndex(tarea => tarea.id === id);
    tareas[index] = task;
}
const deleteTaskModel =  (id) => {
  
  tareas= tareas.filter(tarea => tarea.id !== id);
  
    
}
export {initModel, getTaskModel, getTasksModel, createTaskModel, updateTaskModel, deleteTaskModel}