// 2. Write a JavaScript function that takes a sentence as input and returns the sentence with the first
// letter of each word capitalized.

function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map((word) => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    });
    return capitalizedWords.join(' ');
}

console.log(capitalizeWords('you will become a devoleper'));

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the
// odd numbers

function removeEvenNumbers(arr) {
    const oddNumbers = arr.filter((number) => number % 2 !== 0);
    return oddNumbers;
}

const array = [1,2,3,4,5,6,7,8,9];
console.log(removeEvenNumbers(array));


// 4. Write a JavaScript function that takes a sentence as input and returns the longest word in the
// sentence

function findLongestWord(sentence) {
    const words = sentence.split(' ');

    let longestWord = '';
    let longestWordLength = 0;

    for (const word of words) {
        if (word.length > longestWordLength) {
            longestWord = word;
            longestWordLength = word.length;
        }
    }
    return longestWord;
}

console.log(findLongestWord('javascript is hard to learn'));


// 5.Write a JavaScript function that takes an array of numbers and returns the average (mean) of
// those numbers
  
function calculateAverage(arr) {
    if(arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((total,number) => total + number, 0);
    const average = sum / arr.length;
    return average; 
}

const array1 = [10,20,30,40,50]
console.log(calculateAverage(array1));

// 6.Write a JavaScript function to calculate the factorial of a non-negative integer using a loop

function factorialWithLoop(n) {
    if (n < 0) {
        return undefined;
    }
    let factorial = 1;
    for (let i = 1; i <= n ; i++) {
        factorial *=i;
    }
    return factorial;
}

console.log(factorialWithLoop(5));
console.log(factorialWithLoop(0));



