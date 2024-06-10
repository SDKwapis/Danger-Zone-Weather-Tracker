const cityInput = document.querySelector('#srchbttn');
const cityName = document.querySelector('#searchCity');

const cityList = [];

cityInput.addEventListener('click', function(event) {
    event.preventDefault();
    const cityValue = cityName.value;
    cityList.push(cityValue);
    localStorage.setItem('City', JSON.stringify(cityList));
    // document.getElementById("searchCity").reset();
    const cityArray = JSON.parse(window.localStorage.getItem('City'));
    for (let i = 0; i < cityArray.length; i++) {
        const cityButtonList = document.getElementById('cityButtons');
        const bttn = document.createElement('button');
        bttn.innerHTML = cityArray[i];
        bttn.className = 'city';
        cityButtonList.appendChild(bttn);
    }
});