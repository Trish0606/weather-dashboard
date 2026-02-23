function updateBackground(weatherId) {
    const body = document.body;
    if (weatherId >= 200 && weatherId < 600) {
        body.style.background = "linear-gradient(to bottom, #4b6cb7, #182848)"; // Rainy/Stormy
    } else if (weatherId >= 800) {
        body.style.background = "linear-gradient(to bottom, #f7b733, #fc4a1a)"; // Sunny/Clear
    } else {
        body.style.background = "linear-gradient(to bottom, #757f9a, #d7dde8)"; // Cloudy
    }
}
