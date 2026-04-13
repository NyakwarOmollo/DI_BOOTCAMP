// DOM Elements
const fetchBtn = document.getElementById('fetchBtn');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const characterEl = document.getElementById('character');

const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthYearEl = document.getElementById('birthYear');
const homeworldEl = document.getElementById('homeworld');

// Base API URL
const BASE_URL = 'https://www.swapi.tech/api';

// Get random character ID (API has ~83 characters)
function getRandomId() {
    return Math.floor(Math.random() * 83) + 1; // 1 to 83
}

// Fetch homeworld name (homeworld is a URL in the character data)
async function getHomeworldName(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.result.properties.name || 'Unknown';
    } catch (err) {
        return 'Unknown';
    }
}

// Main function to fetch and display character
async function fetchRandomCharacter() {
    // Hide previous results
    characterEl.classList.add('hidden');
    errorEl.classList.add('hidden');
    loadingEl.classList.remove('hidden');
    fetchBtn.disabled = true;

    try {
        const id = getRandomId();
        const response = await fetch(`${BASE_URL}/people/${id}`);

        if (!response.ok) {
            throw new Error('Character not found');
        }

        const data = await response.json();
        const character = data.result.properties;

        // Get homeworld name
        const homeworldName = await getHomeworldName(character.homeworld);

        // Update DOM
        nameEl.textContent = character.name;
        heightEl.textContent = character.height;
        genderEl.textContent = character.gender.charAt(0).toUpperCase() + character.gender.slice(1);
        birthYearEl.textContent = character.birth_year;
        homeworldEl.textContent = homeworldName;

        // Show character card
        characterEl.classList.remove('hidden');

    } catch (error) {
        console.error('Error fetching character:', error);
        errorEl.classList.remove('hidden');
    } finally {
        loadingEl.classList.add('hidden');
        fetchBtn.disabled = false;
    }
}

// Event Listener
fetchBtn.addEventListener('click', fetchRandomCharacter);

// Optional: Load a character automatically on page load
// window.addEventListener('load', fetchRandomCharacter);