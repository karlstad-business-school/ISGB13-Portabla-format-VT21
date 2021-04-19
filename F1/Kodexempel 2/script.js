window.addEventListener('load', init);

function init() {

    let container = document.querySelector('main');
    let loader = document.querySelector('#preloader');

    window.fetch('https://restcountries.eu/rest/v2/name/sweden')
        .then(function(response) {
            return response.json();
    }).then(function(data) {
        console.log(data);
        loader.classList.add('d-none');

        let countryData = data[0];

        let card = document.createElement('div');
        card.classList.add('card');
        card.style.maxWidth='20rem';
        container.appendChild(card);

        let cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = countryData.flag;
        card.appendChild(cardImage);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.className='card-title';
        cardTitle.textContent = countryData.name;
        cardBody.appendChild(cardTitle);

        let capital = document.createElement('p');
        capital.className='card-text';
        capital.innerHTML='<b>Huvudstad: </b>' + countryData.capital;
        cardBody.appendChild(capital);





    });

}