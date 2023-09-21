const apiUrl = 'https://api.ambeedata.com/latest/by-lat-lng?lat=12&lng=77';
const apiKey = '2c30af85321ece6e47fc671496cd06829795f8cba7ca2886a530ac38bbc75d2a';

// Set up headers with your API key
const headers = new Headers({
    'x-api-key': apiKey,
});

// Set up the request configuration
const requestOptions = {
    method: 'GET',
    headers: headers,
};

// Function to fetch data and populate HTML elements
function fetchDataAndDisplay() {
    // Get a reference to the API data section
    const apiDataSection = document.getElementById('api-data-section');

    // Make the API request
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display API data in HTML elements
            document.getElementById('co-value').textContent = data.stations[0].CO;
            document.getElementById('no2-value').textContent = data.stations[0].NO2;
            document.getElementById('ozone-value').textContent = data.stations[0].OZONE;
            document.getElementById('pm10-value').textContent = data.stations[0].PM10;
            document.getElementById('pm25-value').textContent = data.stations[0].PM25;
            document.getElementById('so2-value').textContent = data.stations[0].SO2;
            document.getElementById('city-value').textContent = data.stations[0].city;
            document.getElementById('country-code-value').textContent = data.stations[0].countryCode;
            document.getElementById('division-value').textContent = data.stations[0].division;
            document.getElementById('lat-value').textContent = data.stations[0].lat;
            document.getElementById('lng-value').textContent = data.stations[0].lng;
            document.getElementById('place-name-value').textContent = data.stations[0].placeName;
            document.getElementById('postal-code-value').textContent = data.stations[0].postalCode;
            document.getElementById('state-value').textContent = data.stations[0].state;
            document.getElementById('updated-at-value').textContent = data.stations[0].updatedAt;
            document.getElementById('aqi-value').textContent = data.stations[0].AQI;
            document.getElementById('pollutant-value').textContent = data.stations[0].aqiInfo.pollutant;
            document.getElementById('concentration-value').textContent = data.stations[0].aqiInfo.concentration;
            document.getElementById('category-value').textContent = data.stations[0].aqiInfo.category;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the function to fetch data and populate HTML elements
fetchDataAndDisplay();
