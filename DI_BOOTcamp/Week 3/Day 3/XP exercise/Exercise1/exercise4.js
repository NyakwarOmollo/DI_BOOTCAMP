// volume-script.js - Exercise 4: Volume of a Sphere

// Get the form
const form = document.getElementById("MyForm");

// Add submit event listener
form.addEventListener("submit", function(event) {
    
    event.preventDefault();   // Prevent form from reloading the page

    // Get the radius value
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    const radius = parseFloat(radiusInput.value);

    // Validation
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }

    // Calculate volume of sphere: V = (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the result with 2 decimal places
    volumeInput.value = volume.toFixed(2);

    console.log(`Radius: ${radius}, Volume: ${volume.toFixed(2)}`);
});