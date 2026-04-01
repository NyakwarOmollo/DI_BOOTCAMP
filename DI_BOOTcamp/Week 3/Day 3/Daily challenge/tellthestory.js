// move-script.js - Exercise 2: Move the Box

function myMove() {
    const box = document.getElementById("animate");
    
    let position = 0;                    // Starting position
    const containerWidth = 400;
    const boxWidth = 50;
    const speed = 1;                     // pixels per interval

    // Clear any previous interval to prevent multiple animations running at once
    if (window.myAnimationInterval) {
        clearInterval(window.myAnimationInterval);
    }

    // Start the animation
    window.myAnimationInterval = setInterval(() => {
        
        // Check if box has reached the right end
        if (position >= containerWidth - boxWidth) {
            clearInterval(window.myAnimationInterval);
            console.log("Animation finished - Box reached the end!");
        } 
        else {
            position += speed;                    // Move the box
            box.style.left = position + "px";     // Update position
        }

    }, 1);   
}