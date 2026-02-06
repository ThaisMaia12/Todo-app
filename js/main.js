// Verificar se o usuário está logado

const user = localStorage.getItem('loggedInUser');
if (!user) {
    window.location.href = 'login.html';
}
let currentFilter = 'all'; // Filtro padrão 

// Elementos da interface
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const logoutButton = document.getElementById('logout');

// Array de tarefas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Se não estiver logado, redirecionar para a página de Login
if (!loggedUser) {
    window.location.href = "login.html"; 
}

//Seleciona os elementos da interface
const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list")

//Criar a chave das tarefas por usuário
const taskkey = 'tasks_$(loggedUser)';

//Função renderizar tarefas
function renderTasks() {
    tasksList.innerHTML = ""; 

    let filteredTasks = tasks; 

    tasks.forEach((task, index) =>{
        const li = document.createElement("li");
        li.className = task.done ? "done" : "";

        const span = document.createElement("span");
        span.textContent = task.text; 

        const button = document.createElement("button"); 
        button.textContent = "✓"; 
        button.className = "complete-btn";

        button.onclick = () => toggleTask(index);

        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li); 
    })

    filteredTasks = tasks.filter(task => {
        if (currentFilter === 'completed') return task.done;
        if (currentFilter === 'pending') return !task.done;
        return true;
    });

        if (task.done) li.classList.add("done"); 

        li.addEventListener("click", () => {
            const realIndex = tasks.indexOf(task); 
            saveTasks(); 
            renderTasks(); 
        }); 
        list.appendChild(li); 
    }

    tasks.forEach((task) => {
        const li = document.createElement("li"); 
        li.textContent = task.text;

        if (task.done) li.classList.add("done");

        li.addEventListener("click", ()=> {
            task.done = !task.done; 
            saveTasks(); 
            renderTasks(); 
        });

        const removeBtn = document.createElement("button"); 
        removeBtn.textContent = "X"; 

        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t !== tasks); 
            saveTasks();
            renderTasks();  
        }); 

        li.appendChild(removeBtn); 
        list.appendChild(li); 
    }); 

// Função para adicionar tarefa 
function addTask(text) {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tasks.push({
        text: text,
        done: false 
    }); 

    taskInput.value = ""; 

    saveTasks(); 
    renderTasks();
}

addTaskButton.addEventListener("click", addTask); 

taskInput.addEventListener("keypress", function (e){
    if (e.key === "Enter") {
        addTask(); 
    }
}); 

// Função para mostrar tarefas 
function renderTasks() {
    taskInput.value = ""; // Limpar a Lista de tarefas

    const li = document.createElement('li');
    li.className = task.done ? "done" : "";

    const span = document.createElement('span');
    span.textContent = task.text;

    const button = document.createElement('button');
    button.textContent = "✓"; 
    button.className = "complete-btn"; 

    button.onclick = () => toggleTask(index); 

    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);  
}

// Função para concluir tarefa 
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

//Função para salvar tarefas 
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Botão de adicionar tarefa funcionar
addTaskButton.addEventListener('click', () => {
    const text = tasksInput.value.trim();

    if (text === "") return; 

    tasks.push({ text: text, done: false });
    taskInput.value = ""; 

    saveTasks(); 
    renderTasks(); 
}); 
}