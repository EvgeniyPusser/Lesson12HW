
function forEach (array, fun) {
     for(let i = 0; i < array.length; i++) {
        fun(array[i], i);
     }
}

function moreThan(num, a) {
 return num > a;
}



function some(array, fun) {
    let gotIt = false; 
    forEach(array, function(elem, index) {
        if (fun(elem, index)) {
            gotIt = true;
        }
    });
    return gotIt;
}


function every(array, fun) {
    let allIsOk = true; // Assume all elements match
    forEach(array, function(elem, index) {
        if (!fun(elem, index)) {
            allIsOk = false;
        }
    });
  return allIsOk;
}


array = [2, 3, 4];
function elmGreaterIndex(elem, index) {
    return elem > index
}



let array1 = [1, 0, 0, -9];
let array2 = [-7, 0, -1000];


let si = some(array1, function(elem) {
    return moreThan(elem, 1);
});
console.log(`Result of some: ${si}`);

let su = every(array1, function(elem) {
    return moreThan(elem, 0);
});


console.log(`Result of every: ${su}`);
console.log(`Result of elements Greater than index for every: ${every(array1, function (elem, index) { return elmGreaterIndex(elem, index); })}`);
console.log(`Result of elements Greater than index for some: ${some(array2, function(elem, index){return elmGreaterIndex(elem, index);})}`);