document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '391b7c465cmsh8cc22b77c90571bp16cc0ejsn79896869245c',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Extracting the required data
        const cityName = data.location.name;
        const temperature = data.current.temp_c; // Temperature in Celsius
        const windSpeed = data.current.wind_kph; // Wind speed in kph
        const humidity = data.current.humidity; // Humidity as a number

        // Displaying the data in the div
        document.getElementById('weatherData').innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Wind Speed: ${windSpeed} kph</p>
            <p>Humidity: ${humidity}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherData').innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    }
});
