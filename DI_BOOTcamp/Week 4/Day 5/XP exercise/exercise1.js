console.log("=== GIPHY API & ASYNC/AWAIT EXERCISES ===\n");

// EXERCISE 1 : Basic Giphy Fetch 
console.log("EXERCISE 1: Fetching 'hilarious' gifs");

const url1 = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url1)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => console.log("Exercise 1 - Giphy Data:", data))
    .catch(error => console.error("Exercise 1 Error:", error.message));


// ====================== EXERCISE 2 : Giphy with parameters ======================
console.log("\nEXERCISE 2: Fetching 10 'sun' gifs with offset 2");

const url2 = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url2)
    .then(response => {
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => console.log("Exercise 2 - 10 Sun Gifs:", data))
    .catch(error => console.error("Exercise 2 Error:", error.message));


// ====================== EXERCISE 3 : Async/Await Star Wars ======================
console.log("\nEXERCISE 3: Async/Await - Starship");

async function getStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Exercise 3 - Starship Data:", data.result);

    } catch (error) {
        console.error("Exercise 3 Error:", error.message);
    }
}

getStarship();


// ====================== EXERCISE 4 : Analyze Code ======================
console.log("\nEXERCISE 4: Analyze the following code");

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();   // This will print "calling" immediately, then "resolved" after 2 seconds

console.log("\n=== All exercises initialized ===");
console.log("Note: Exercise 2 will show result soon. Exercise 4 will show 'resolved' after 2 seconds.");