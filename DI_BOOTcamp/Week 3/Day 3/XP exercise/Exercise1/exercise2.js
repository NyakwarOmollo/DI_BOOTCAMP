// form-script.js - Exercise 2: Work with Forms

// 1. Retrieve the form and console.log it
const form = document.getElementById("userForm");
console.log("Retrieved form:", form);

// 2. Retrieve inputs by their id
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log("First name input (by id):", fnameInput);
console.log("Last name input (by id):", lnameInput);

// 3. Retrieve inputs by their name attribute
const fnameByName = document.querySelector('input[name="firstname"]');
const lnameByName = document.querySelector('input[name="lastname"]');
console.log("First name input (by name):", fnameByName);
console.log("Last name input (by name):", lnameByName);

// 4. Form submit event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();   // Prevents page from reloading

    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();

    // Validation: check if fields are empty
    if (firstName === "" || lastName === "") {
        alert("Please fill in both First Name and Last Name!");
        return;
    }

    // Get the ul where we will append the results
    const ul = document.querySelector(".usersAnswer");

    // Create li elements
    const liFirst = document.createElement("li");
    liFirst.textContent = firstName;

    const liLast = document.createElement("li");
    liLast.textContent = lastName;

    // Append to the list
    ul.appendChild(liFirst);
    ul.appendChild(liLast);

    console.log(`Submitted: ${firstName} ${lastName}`);

    // Optional: Clear the form after submission
    fnameInput.value = "";
    lnameInput.value = "";
});