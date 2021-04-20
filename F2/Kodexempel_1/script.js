window.addEventListener('load', init);

function init() {

  //Göm preloader
  document.querySelector('#preloader').classList.add('d-none');

  document.querySelector('#content').classList.add('d-flex','flex-wrap')

  document.querySelector('#search-form').addEventListener('submit', handleSearchFormSubmit);


}

function handleSearchFormSubmit(event) {
  event.preventDefault();
  
  let searchField = document.querySelector('#search');
  let content = document.querySelector('#content');

  content.innerHTML=null;
  document.querySelector('#preloader').classList.remove('d-none');
  search(searchField.value, content);
}

function search(query, container) {

  window.fetch('https://restcountries.eu/rest/v2/name/' + encodeURIComponent(query))
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      document.querySelector('#preloader').classList.add('d-none');

      for(let countryData of data) {
        
        let card = document.createElement('div');
        card.className = 'card';
        card.style.minWidth = '20rem';
        card.style.width = '25%';
        container.appendChild(card);

        let cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = countryData.flag;
        card.appendChild(cardImage)

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = countryData.name;
        cardBody.appendChild(cardTitle)

        let capital = document.createElement('p');
        capital.className = 'card-text';
        capital.innerHTML = '<b>Capital:</b> ' + countryData.capital;
        cardBody.appendChild(capital)

        let area = document.createElement('p');
        area.className = 'card-text';
        if (countryData.area == null) {
          area.innerHTML = '<b>Area:</b> n/a';
        } else {
          area.innerHTML = '<b>Area:</b> ' + countryData.area.toLocaleString('en') + ' km<sup>2</sup>';
        }
        cardBody.appendChild(area)

        let population = document.createElement('p');
        population.className = 'card-text';
        population.innerHTML = '<b>Population:</b> ' + countryData.population.toLocaleString('en');
        cardBody.appendChild(population)

      }

    });




}





function loadData() {
  let container = document.querySelector('#content');
  let preloader = document.querySelector('#preloader');

  window.fetch('https://restcountries.eu/rest/v2/name/sweden')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
      let countryData = data[0];

      let card = document.createElement('div');
      card.className = 'card';
      card.style.maxWidth = '20rem';
      container.appendChild(card);

      let cardImage = document.createElement('img');
      cardImage.className = 'card-img-top';
      cardImage.src = countryData.flag;
      card.appendChild(cardImage)

      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      card.appendChild(cardBody);

      let cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = countryData.name;
      cardBody.appendChild(cardTitle)

      let capital = document.createElement('p');
      capital.className = 'card-text';
      capital.innerHTML = '<b>Capital:</b> ' + countryData.capital;
      cardBody.appendChild(capital)

      let area = document.createElement('p');
      area.className = 'card-text';
      area.innerHTML = '<b>Area:</b> ' + countryData.area.toLocaleString('en') + ' km<sup>2</sup>';
      cardBody.appendChild(area)

      let population = document.createElement('p');
      population.className = 'card-text';
      population.innerHTML = '<b>Population:</b> ' + countryData.population.toLocaleString('en');
      cardBody.appendChild(population)

      preloader.classList.add('d-none')

    });
}
