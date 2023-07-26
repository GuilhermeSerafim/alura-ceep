const criarTarefa = (evento) => {
    
    evento.preventDefault();
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`; //template String

    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    input.value = " ";
} 

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

//criando componente (parte da aplicação)
//varios componentes criam a aplicação
//geralmente componentes são independentes, ou seja
//posso usar ele em várias partes da minha aplicação

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Conclui';

    botaoConclui.addEventListener('click', ()=> {
        console.log('fui clicado');
    });

    return botaoConclui;
}