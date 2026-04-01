// script.js - Exercise 3: Transform the Sentence

// 1. Declare a global variable named allBoldItems
let allBoldItems;

// 2. Function to collect all bold items
function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

// 3. Function to highlight bold text (change color to blue)
function highlight() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {
            item.style.color = "blue";
            item.style.fontWeight = "bold";   // optional enhancement
        });
    }
}

// 4. Function to return bold text to default color (black)
function returnItemsToDefault() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {
            item.style.color = "black";
        });
    }
}

// 5. Get the paragraph and add event listeners
const paragraph = document.querySelector("p");

if (paragraph) {
    // First, collect the bold items
    getBoldItems();

    // Add mouseover and mouseout events
    paragraph.addEventListener("mouseover", highlight);
    paragraph.addEventListener("mouseout", returnItemsToDefault);
}