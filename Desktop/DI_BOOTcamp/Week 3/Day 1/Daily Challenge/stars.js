console.log("=== Version 1: One Loop ===");

let pattern = "";

for (let i = 1; i <= 6; i++) {
    pattern += "* ".repeat(i).trim() + "\n";
}

console.log(pattern);