//COMPONENTE
const BotaoDeleta =  () => {
    //minusculo pq é variavel
    const botaoDeleta = document.createElement('button');
    
    botaoDeleta.classList.add('check-button');
    botaoDeleta.innerText = "Deletar";

    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
};

//FUNÇÃO
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;

    //Criado para pegar elemento li que é o pai do botão
    //Precisamos pegar a li toda
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();
    return botaoDeleta;
};

export default BotaoDeleta;