export async function tasks() {
    const response = await fetch("http://127.0.0.1:8000/tasks/api/v1/tasks/");
    const tasks = await response.json();
    return tasks;
}