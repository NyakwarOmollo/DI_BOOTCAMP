

//PART I 
// 1. Using setTimeout, alert "Hello World" after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);


//PART II 
// 2. Using setTimeout, add a paragraph <p>Hello World</p> after 2 seconds
setTimeout(function() {
    const container = document.getElementById("container");
    
    const p = document.createElement("p");
    p.textContent = "Hello World";
    
    container.appendChild(p);
}, 2000);


//PART III 
// 3. Using setInterval, add a paragraph every 2 seconds

const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

let intervalId;   // To store the interval ID

// Start the interval
intervalId = setInterval(function() {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // Check if we have 5 paragraphs → clear interval
    if (container.children.length >= 5) {
        clearInterval(intervalId);
        console.log("Interval cleared automatically after 5 paragraphs");
    }
}, 2000);


// Button to manually clear the interval
clearButton.addEventListener("click", function() {
    clearInterval(intervalId);
    console.log("Interval cleared by user");
});