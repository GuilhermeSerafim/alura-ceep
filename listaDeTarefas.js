const novaTarefa = document.querySelector('[data-form-button]');

//novaTarefa é o elemento
//addEventListener é o cara que fica pra "escutar" o evento
//click é o tipo de evento
//() => {} função anonima
novaTarefa.addEventListener('click', () => {
    console.log('fui clicado');
});
//Ou seja, quando o evento acontecer, a função será executada e vai exibir "fui clicado"