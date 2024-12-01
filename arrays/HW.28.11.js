//tapsyrma1
let numbers = [10, 37, 21, 12, 40, 80, 75, 15 , 24 , 3 , 19];
let filterNumber = numbers.filter(num => num >= 50);

let kobeity = filterNumber.map(num => num * 2);

console.log(kobeity); 

//tapsyrma2
let number = [26, 46, 54, 56, 78, 3];
let sum = 0;

number.push(9 ,45);

numbers.forEach(num => {
  sum += num;
});

console.log(sum); 

//tapsyrma3
let san = [10, 55, 25, 62, 40, 87, 5, 104 , 3];

let kobeity3 = san.map(num => num * 3);

let filterSan = kobeity3.filter(num => num <= 100);

console.log(filterSan);
