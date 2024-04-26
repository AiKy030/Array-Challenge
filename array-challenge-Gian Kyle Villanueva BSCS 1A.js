const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/

console.log('even:');
arr.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

console.log('odd:');
arr.forEach(num => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});
