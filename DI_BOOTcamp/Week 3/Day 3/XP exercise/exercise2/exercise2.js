// move-script.js - Exercise 2: Move the Box

function myMove() {
    const animate = document.getElementById("animate");
    let position = 0;           // Starting position (left = 0px)
    const containerWidth = 400;
    const boxWidth = 50;

    // Clear any existing interval to prevent multiple animations
    if (window.myInterval) {
        clearInterval(window.myInterval);
    }

    // Start moving the box
    window.myInterval = setInterval(function() {
        if (position >= containerWidth - boxWidth) {
            clearInterval(window.myInterval);   // Stop when box reaches the end
            console.log("Box reached the end!");
        } else {
            position++;                    // Move 1px to the right
            animate.style.left = position + "px";
        }
    }, 1);   // Move every 1 millisecond
}