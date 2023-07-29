//COMPONENTE
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Conclui';

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
};

//FUNÇÃO
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target; //descobrir qual elemento eu cliquei

    const tarefaCompleta = botaoConclui.parentElement //pegar o pai do elemento

    tarefaCompleta.classList.toggle('done'); //vai executar essa classe css, a partir do momento
    // em que eu clicar no botão | O metodo toggle devolve um booleano
};

export default BotaoConclui;