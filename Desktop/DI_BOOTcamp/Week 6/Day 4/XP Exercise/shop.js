// shop.js
import products from './products.js';

function findProduct(productName) {
    const product = products.find(p => 
        p.name.toLowerCase() === productName.toLowerCase()
    );
    
    if (product) {
        console.log("\n✅ Product Found:");
        console.log(`Name     : ${product.name}`);
        console.log(`Price    : $${product.price}`);
        console.log(`Category : ${product.category}`);
    } else {
        console.log(`❌ Product "${productName}" not found!`);
    }
}

console.log("🛒 Welcome to the Shop");
findProduct("Laptop");
findProduct("Book");
findProduct("Phone");