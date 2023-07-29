import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (evento) => {
    
    evento.preventDefault();
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`; //template String

    tarefa.innerHTML = conteudo;
    
    //Para possicionar o botão de acordo com o pai que é a "li"
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa);
    input.value = " ";
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

//componente começa com letra maiscula
//varios componentes criam a aplicação
//geralmente componentes são independentes, ou seja
//posso usar ele em várias partes da minha aplicação