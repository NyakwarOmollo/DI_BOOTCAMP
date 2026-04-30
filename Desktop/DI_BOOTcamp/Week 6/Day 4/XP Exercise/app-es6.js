// app-es6.js
import { persons, calculateAverageAge } from './data.js';

console.log("👥 Person Data Analysis\n");
persons.forEach(p => {
    console.log(`- ${p.name} (${p.age} years) - ${p.location}`);
});

console.log(`\n📊 Average Age: ${calculateAverageAge(persons)} years`);