// Replace these mock values with actual API calls
const mockAQIData = 75;
const mockWQIData = 85;

// Function to update AQI and WQI values on the webpage
function updateData() {
    document.getElementById("aqi-value").textContent = mockAQIData;
    document.getElementById("wqi-value").textContent = mockWQIData;
}

// Simulate data updates every 5 seconds (for demonstration purposes)
updateData();
setInterval(updateData, 5000);
