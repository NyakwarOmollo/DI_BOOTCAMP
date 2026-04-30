const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

//PART I 
function getCarHonda(carInventory) {
    // Find the first car with make "Honda"
    const hondaCar = carInventory.find(car => car.car_make === "Honda");

    if (hondaCar) {
        return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}.`;
    }
    return "No Honda car found.";
}

// Test Part I
console.log("Part I - Honda Car:");
console.log(getCarHonda(inventory));


// PART II 
function sortCarInventoryByYear(carInventory) {
    // Create a copy and sort by car_year (ascending)
    return [...carInventory].sort((a, b) => a.car_year - b.car_year);
}

// Test Part II
console.log("\nPart II - Sorted Inventory by Year:");
console.log(sortCarInventoryByYear(inventory));