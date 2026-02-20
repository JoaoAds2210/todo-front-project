interface Task {
    titulo: String;
    descricao: String;
    data: String;
    prioridade: String;
    status: String;
}

const form = document.getElementById('taskForm') as HTMLFormElement;

function enviarFormulario(event: Event): void {
    event.preventDefault();
    

    const titulo = (document.getElementById('titulo') as HTMLFormElement).value;
    const descricao = (document.getElementById('descricao') as HTMLFormElement).value;
    const data = (document.getElementById('data') as HTMLFormElement).value;
    const prioridade = (document.getElementById('prioridade') as HTMLFormElement).value;
    const status = (document.getElementById('status') as HTMLFormElement).value;

    const task: Task = {
        titulo, 
        descricao, 
        data,
        prioridade,
        status
    };

    console.log("Tarefa enviada");
    console.log(task);
    
    form.reset();
}

form.addEventListener('submit', enviarFormulario);