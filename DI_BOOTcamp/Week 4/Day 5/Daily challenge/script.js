const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const container = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

// API KEY
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch GIF using Async/Await
async function fetchGif(category) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}`
        );

        const data = await response.json();

        // Get GIF URL from images object
        const gifUrl = data.data.images.original.url;

        displayGif(gifUrl);

    } catch (error) {
        console.error("Error fetching GIF:", error);
    }
}

// Display GIF + Delete button
function displayGif(url) {
    const gifDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = url;
    img.style.width = "200px";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";

    // Delete specific GIF
    deleteBtn.addEventListener("click", () => {
        gifDiv.remove();
    });

    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);
    container.appendChild(gifDiv);
}

// Form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const category = input.value.trim();

    if (category) {
        fetchGif(category);
    }

    input.value = "";
});

// Delete all GIFs
deleteAllBtn.addEventListener("click", () => {
    container.innerHTML = "";
});