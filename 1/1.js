const fs = require('fs');

const calculateFuel = fuel => Math.floor(fuel / 3) - 2;

try {
    const data = fs.readFileSync('data.txt', 'utf8').split('\n');

    const result = data.reduce((acc, curr) => acc + calculateFuel(curr), 0);

    console.log(result);
} catch (e) {
    console.log('Error:', e.stack);
}
