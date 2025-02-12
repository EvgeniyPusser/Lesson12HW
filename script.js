let initialArray = ["abc", 23];
//array[1000000] = 10;
// console.log(array.length);
// console.log(array[0])}
function forEach (array, fun) {
     for(let i = 0; i < array.length; i++) {
        fun(array[i], i);
     }
}
//forEach takes array and fun with two parameters: first - element of array, second - index
function print(elem, index){
    console.log(`index: ${index}, element: ${elem}`)
};


forEach(initialArray, print);

function moreThan(num, a) {
 return num > a;
}

// function some(array, fun) {
//   let gotIt = false;
//   forEach(array, fun(element, index){
//     if (fun(element, index)) {
//       gotIt = true;
//     }
//   });
//     return gotIt;
//   return false;
//   //returns true if at least one element of the array match a condition given in the function (fun)
// }



// `some` using `forEach`
function some(array, fun) {
    let found = false; // Track if at least one element matches
    forEach(array, function(elem, index) {
        if (fun(elem, index)) {
            found = true;
        }
    });
    return found;
}

// `every` using `forEach`
function every(array, fun) {
    let allMatch = true; // Assume all elements match
    forEach(array, function(elem, index) {
        if (!fun(elem, index)) {
            allMatch = false;
        }
    });
    return allMatch;
}

function evenNumber(num) {
    return num % 2 == 0;
}


console.log(`using "some" function for even numbers array: ${initialArray}, function ${evenNumber}, result: ${some(initialArray, evenNumber)} - false`)


function every(array, fun){

  forEach(array, fun)
  return false;
//TODO
    //returns true if all elemnts of the array match a condition given in the function (fun)
}
array = [2, 3, 4];
function elmGreaterIndex(elem, index) {
    return elem > index
}

// console.log(`using "every" function for elements greater than the index values, array: ${array}, function ${elmGreaterIndex}`);

console.log(`using "some" function for even numbers, array: ${initialArray}, function evenNumber, result: ${some(initialArray, evenNumber)}`);

console.log(`using "every" function for elements greater than the index values, array: ${array}, function elmGreaterIndex, result: ${every(array, elmGreaterIndex)}`);


let array1 = [1, 2, 0, -1];

// Correctly call `some` with `moreThan`
let si = some(array1, function(elem) {
    return moreThan(elem, 1);
});
console.log(`Result of some: ${si}`);

// Correctly call `every` with `moreThan`
let su = every(array1, function(elem) {
    return moreThan(elem, 0);
});
console.log(`Result of every: ${su}`);