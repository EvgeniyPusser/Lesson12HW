function some(array, fun) {
  let i = 0;
  while (i < array.length && !fun(array[i], i)) {
    i++;
  }
  return i < array.length ? true : false;
}

function every(array, fun) {
  let i = 0;
  while (i < array.length && fun(array[i], i)) {
    i++;
  }
  return i === array.length ? true : false;
}

function elemMoreIndex(num, i) {
  return num > i;
}

function evenNumber(num) {
  return num % 2 === 0;
}

const array1 = [0, 2, 3, 4];
console.log(
  `Using "some" for elemMoreIndex in ${array1}: ${
    some(array1, elemMoreIndex) == true
  }`
);

const array2 = [0, 1, 2, 3];
console.log(
  `Using "some" for elemMoreIndex in ${array2}: ${
    some(array2, elemMoreIndex) == false
  }`
);

const array3 = [1, 2, 3, 4];
console.log(
  `Using "every" for elemMoreIndex in ${array3}: ${
    every(array3, elemMoreIndex) == true
  }`
);

const array4 = [0, 2, 1, 4];
console.log(
  `Using "every" for elemMoreIndex in ${array4}: ${
    every(array4, elemMoreIndex) == false
  }`
);

const array5 = [0, -2, 3, 4];
console.log(
  `Using "some" for elemMoreIndex in ${array5}: ${
    some(array5, evenNumber) == true
  }`
);

const array6 = [-11, 1, 7, 3];
console.log(
  `Using "some" for elemMoreIndex in ${array6}: ${
    some(array6, evenNumber) == false
  }`
);

const array7 = [66, 2, 300, 4];
console.log(
  `Using "every" for elemMoreIndex in ${array7}: ${
    every(array7, evenNumber) == true
  }`
);

const array8 = [0, 2, 12, 4];
console.log(
  `Using "every" for elemMoreIndex in ${array8}: ${
    every(array8, evenNumber) == true
  }`
);
