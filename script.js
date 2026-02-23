const API_KEY = 'cb5c448e3842ddcb0862861dd2c25cf9'; // <--- PUT YOUR KEY HERE

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherDisplay = document.getElementById('weather-display');
const errorMsg = document.getElementById('error-msg');

// Function to fetch data
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            updateUI(data);
            errorMsg.classList.add('hidden');
            weatherDisplay.classList.remove('hidden');
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        weatherDisplay.classList.add('hidden');
        errorMsg.classList.remove('hidden');
        console.error(err);
    }
}

// Function to update the HTML with data
function updateUI(data) {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('wind').innerText = `${data.wind.speed} km/h`;
    document.getElementById('date').innerText = new Date().toDateString();
    
    // Set Weather Icon
    const iconCode = data.weather[0].icon;
    document.getElementById('icon-container').innerHTML = 
        `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">`;
}

// Listen for clicks
searchBtn.addEventListener('click', () => {
    if (cityInput.value) {
        getWeather(cityInput.value);
    }
});

// Listen for "Enter" key
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && cityInput.value) {
        getWeather(cityInput.value);
    }
});
