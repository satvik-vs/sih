// Function to fetch AQI data from the API
function fetchAQIData() {
    const apiUrl = 'https://api.example.com/aqi'; // Replace with the actual API endpoint
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    // Include the API key as a query parameter in the URL
    const urlWithApiKey = `${apiUrl}?apiKey=${apiKey}`;

    // Make an HTTP GET request to the API
    fetch(urlWithApiKey)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API response contains AQI parameters and AQI information
            const pm25 = data.stations[0].PM25;
            const pm10 = data.stations[0].PM10;
            const no2 = data.stations[0].NO2;
            const co = data.stations[0].CO;
            const o2 = data.stations[0].OZONE;

            // Update the webpage with the specific AQI parameters
            document.getElementById("pm25-value").textContent = `PM2.5: ${pm25}`;
            document.getElementById("pm10-value").textContent = `PM10: ${pm10}`;
            document.getElementById("no2-value").textContent = `NO2: ${no2}`;
            document.getElementById("co-value").textContent = `CO: ${co}`;
            document.getElementById("o2-value").textContent = `O2: ${o2}`;

            // Assuming the API response also contains AQI information
            const aqi = data.stations[0].AQI;
            const pollutant = data.stations[0].aqiInfo.pollutant;
            const concentration = data.stations[0].aqiInfo.concentration;
            const category = data.stations[0].aqiInfo.category;

            // Update AQI-related elements
            document.getElementById("aqi-value").textContent = `AQI: ${aqi}`;
            document.getElementById("pollutant-value").textContent = `Pollutant: ${pollutant}`;
            document.getElementById("concentration-value").textContent = `Concentration: ${concentration}`;
            document.getElementById("category-value").textContent = `Category: ${category}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to update AQI data initially and then at regular intervals (every 5 seconds)
function updateAQIData() {
    fetchAQIData();
}

// Call the function to update AQI data initially and then at regular intervals (every 5 seconds)
updateAQIData();
setInterval(updateAQIData, 5000);
