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

const findInput = (data, searchedInput) =>
    [...Array(100).keys()].reduce((acc, noun) => {
        const searchedVerb = [...Array(100).keys()].find(verb => {
            const preparedData = prepareData(data, noun, verb);

            return getResult(preparedData) === searchedInput;
        });

        return searchedVerb ? 100 * noun + searchedVerb : acc;
    }, 0);

console.log(findInput(data, 19690720));
