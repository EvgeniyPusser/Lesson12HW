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

function elemMoreIndex(num, i) {
    return num > i;
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



const array1 = [0, 2, 3, 4]; // 2 > 1, 3 > 2, 4 > 3 (some elements are greater than index)
console.log(`Using "some" for elemMoreIndex in ${array1}: ${some(array1, elemMoreIndex)} - Expected: true`);

const array3 = [0, 1, 2, 3]; // No element is greater than its index
console.log(`Using "some" for elemMoreIndex in ${array2}: ${some(array3, elemMoreIndex)} - Expected: false`);

const array4 = [1, 2, 3, 4]; // All elements are greater than their indexes
console.log(`Using "every" for elemMoreIndex in ${array3}: ${every(array4, elemMoreIndex)} - Expected: true`);

const array5 = [0, 2, 1, 4]; // 1 is not greater than its index 2
console.log(`Using "every" for elemMoreIndex in ${array4}: ${every(array5, elemMoreIndex)} - Expected: false`);
