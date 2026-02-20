interface LoginTask {
  username: string;
  senha: string;
}

const form = document.getElementById('formLogin') as HTMLFormElement;

function logar(event: Event): void {
  event.preventDefault();

  const usernameInput = document.getElementById('username') as HTMLInputElement;
  const senhaInput = document.getElementById('senha') as HTMLInputElement;

  const username = usernameInput.value.trim();
  const senha = senhaInput.value.trim();

  if (!username || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  const loginTask: LoginTask = {
    username,
    senha
  };

  console.log("Dados de login:", loginTask);

  form.reset();
}

form.addEventListener('submit', logar);