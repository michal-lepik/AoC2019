const fs = require('fs');

const data = fs
    .readFileSync('data.txt', 'utf8')
    .split(',')
    .map(Number);

const getResult = (data, index = 0) => {
    if (data[index] === 99) {
        return data[0];
    }

    const [xPosition, yPosition, outputPosition] = data.slice(index + 1);

    const outputValue =
        data[index] === 1 ? data[xPosition] + data[yPosition] : data[xPosition] * data[yPosition];

    const newData = [...data.slice(0, outputPosition), outputValue, ...data.slice(outputPosition + 1)];

    return getResult(newData, index + 4);
};

const prepareData = (data, noun, verb) => [data[0], noun, verb, ...data.slice(3)];

console.log(getResult(prepareData(data, 12, 2)));
