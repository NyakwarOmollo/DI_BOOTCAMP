// data.js
export const persons = [
    { name: "Alice", age: 28, location: "Nairobi" },
    { name: "Bob", age: 34, location: "Mombasa" },
    { name: "Charlie", age: 22, location: "Kisumu" },
    { name: "Diana", age: 29, location: "Nairobi" }
];

export function calculateAverageAge(people) {
    const total = people.reduce((sum, p) => sum + p.age, 0);
    return (total / people.length).toFixed(1);
}