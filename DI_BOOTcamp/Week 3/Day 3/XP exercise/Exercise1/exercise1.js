// script.js - Chocolate Facts Exercise

// 1. Retrieve the h1 and console.log it
const h1 = document.querySelector("h1");
console.log("Retrieved h1:", h1);

// 2. Remove the last paragraph in the article
const paragraphs = document.querySelectorAll("article p");
if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].remove();
    console.log("Last paragraph removed");
}

// 3. Click on h2 → change background to red
const h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    this.style.backgroundColor = "red";
    this.style.color = "white";
    this.style.padding = "8px";
    this.style.borderRadius = "5px";
});

// 4. Click on h3 → hide it (display: none)
const h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    this.style.display = "none";
});

// 5. Button → Make all paragraphs bold
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", function() {
    document.querySelectorAll("article p").forEach(p => {
        p.style.fontWeight = "bold";
    });
    console.log("All paragraphs are now bold");
});

// 6. Bonus: Hover on h1 → random font size (0-100px)
h1.addEventListener("mouseover", function() {
    const randomSize = Math.floor(Math.random() * 101); // 0 to 100
    this.style.fontSize = randomSize + "px";
    console.log(`h1 font size changed to ${randomSize}px`);
});

// 7. Bonus: Hover on the 2nd paragraph → fade out
const secondParagraph = document.querySelectorAll("article p")[1];

if (secondParagraph) {
    secondParagraph.style.transition = "opacity 0.6s ease";

    secondParagraph.addEventListener("mouseover", function() {
        this.style.opacity = "0.2";
    });

    secondParagraph.addEventListener("mouseout", function() {
        this.style.opacity = "1";
    });
}