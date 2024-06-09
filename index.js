const cityInput = document.querySelector('#srchbttn');
const cityName = document.querySelector('#searchCity');
const cityButton = document.createElement('button');

const cityList = [];

cityInput.addEventListener('click', function(event) {
    event.preventDefault();
    const cityValue = cityName.value;
    cityList.push(cityValue);
    localStorage.setItem('City', JSON.stringify(cityList));
    document.getElementById("searchCity").reset();
});


function renderCities() {
    for (let i = 0; i< cityList.length; i++) {
        const cities = cityList[i];

        const button = document.createElement('button');
        button.textContent = cities;

    }
}