const apikey = "246d77fa3307bbbce3376609f911bf38";

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (!city) return alert("Please enter a city name");

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(api)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            const temp = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            document.getElementById('cityName').textContent = `City: ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${temp} °C`;
            document.getElementById('description').textContent = `Weather: ${description}`;
            document.getElementById('weatherIcon').src = iconUrl;
        })
        .catch(err => console.error(err));
});
