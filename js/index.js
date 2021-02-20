var imgArray = [
    {
        url: 'http://placehold.it/200x200',
        title: 'Test',
        description: 'test'
    },
    {
        url: 'http://placehold.it/200x200',
        title: 'Test',
        description: 'test'
    },
    {
        url: 'http://placehold.it/200x200',
        title: 'Test',
        description: 'test'
    },
];

for (card of imgArray) {
    var parentDiv = document.querySelector('.parent-div');

    var cardDiv = document.createElement(`div`);
    cardDiv.className = 'photo-div';

    var cardHtml = `
        <div class="imagem-div">
            <img src="${card.url}">
        </div>
        <div class="conteudo-div">
            <h3 class="photo-titulo">${card.title}</h3>
            <p class="photo-legenda">
                ${card.description}
            </p>
            <button class="photo-button">
                Botão
            </button>
        </div>`;

    cardDiv.innerHTML = cardHtml;
    parentDiv.appendChild(cardDiv);

}