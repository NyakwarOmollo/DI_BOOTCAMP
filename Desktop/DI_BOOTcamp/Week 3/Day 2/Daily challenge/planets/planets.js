// Array of planets with their moons (Bonus)
const planetsData = [
    { name: "Mercury", color: "#A8A8A8", moons: 0 },
    { name: "Venus",   color: "#E0C090", moons: 0 },
    { name: "Earth",   color: "#4A90E2", moons: 1 },
    { name: "Mars",    color: "#CD5C5C", moons: 2 },
    { name: "Jupiter", color: "#D2B48C", moons: 4 },
    { name: "Saturn",  color: "#F4E8C1", moons: 3 },
    { name: "Uranus",  color: "#A0D8EF", moons: 2 },
    { name: "Neptune", color: "#4B70DD", moons: 1 }
];

// Get the section where we will append planets
const section = document.querySelector(".listPlanets");

// Loop through each planet
planetsData.forEach(planet => {
    
    // 1. Create planet div
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // 2. Position planets nicely (optional visual improvement)
    planetDiv.style.margin = "20px";
    planetDiv.style.display = "inline-block";

    // 3. Create moons (Bonus)
    if (planet.moons > 0) {
        for (let i = 0; i < planet.moons; i++) {
            const moon = document.createElement("div");
            moon.classList.add("moon");

            // Position moons around the planet
            const angle = (i * 360) / planet.moons;   // spread moons evenly
            const distance = 45;                      // distance from planet center

            moon.style.left = `calc(50% + ${Math.cos(angle * Math.PI / 180) * distance}px)`;
            moon.style.top  = `calc(50% + ${Math.sin(angle * Math.PI / 180) * distance}px)`;

            planetDiv.appendChild(moon);
        }
    }

    // 4. Append planet to the section
    section.appendChild(planetDiv);
});
