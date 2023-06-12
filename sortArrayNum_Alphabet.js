const array = [10, 5, 'a', 'b', 'h', 11];
const numbers = [];
const alphabets = [];

for(let i=0; i<array.length; i++){
    if(typeof array[i] === 'number'){
        numbers.push(array[i]);
    }else if(typeof array[i] === 'string'){
        alphabets.push(array[i]);
    }
}
console.log("");
console.log("Given Array :",array);
console.log("");
console.log("Numbers :", numbers);
console.log("");
console.log("Alphabets :", alphabets);