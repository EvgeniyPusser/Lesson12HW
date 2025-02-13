function some(array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (fun(array[i])) {
            return true;
        }
    }
    return false;
}

function evenNumber(num) {
    return num % 2 === 0;
}

function every(array, fun) {
    for (let i = 0; i < array.length; i++) {
        if (!fun(array[i])) {
            return false;
        }
    }
    return true;
}


const array = [1, 3, 5, 7]; 
console.log(`Using "some" function for even numbers in ${array}: ${some(array, evenNumber)} - Expected: false`);

const array2 = [2, 4, 6, 8]; 
console.log(`Using "some" function for even numbers in ${array2}: ${some(array2, evenNumber)} - Expected: true`);

console.log(`Using "every" function for even numbers in ${array}: ${every(array, evenNumber)} - Expected: false`);
console.log(`Using "every" function for even numbers in ${array2}: ${every(array2, evenNumber)} - Expected: true`);
