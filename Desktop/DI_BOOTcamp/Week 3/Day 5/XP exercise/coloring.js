// coloring.js - Coloring Squares Project

let currentColor = "#000000";
let isDrawing = false;

const palette = document.getElementById("palette");
const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");

// Color Palette
const colors = [
    "#000000", "#FF0000", "#00FF00", "#0000FF", 
    "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500",
    "#800080", "#FFC0CB", "#A52A2A", "#808080", 
    "#FFFFFF"
];

colors.forEach(color => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;
    colorDiv.dataset.color = color;

    colorDiv.addEventListener("click", () => {
        currentColor = color;
        document.querySelectorAll(".color").forEach(c => c.classList.remove("selected"));
        colorDiv.classList.add("selected");
    });

    palette.appendChild(colorDiv);
});

// Select first color by default
palette.children[0].classList.add("selected");

// Create 20x20 Grid
for (let i = 0; i < 400; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Mouse events for drawing
    cell.addEventListener("mousedown", () => {
        isDrawing = true;
        cell.style.backgroundColor = currentColor;
    });

    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            cell.style.backgroundColor = currentColor;
        }
    });

    cell.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    grid.appendChild(cell);
}

// Clear Grid Button
clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});

// Eraser Button
eraserBtn.addEventListener("click", () => {
    currentColor = "#FFFFFF";
    document.querySelectorAll(".color").forEach(c => c.classList.remove("selected"));
});

// Stop drawing when mouse leaves the grid
grid.addEventListener("mouseleave", () => {
    isDrawing = false;
});