const obj = {
    obje: [{a: 1, b: 2, c: 3, d: 4}]
};

function object() {
    return obj.obje[0] && Object.values(obj.obje[0]).reduce((sum, val) => sum + val, 0);
}

console.log(object()); 

/////////////////////////////////////////////////////
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);

/////////////////////////////////////////////////////
const students = [
  {id: 1, name: "A"},
  {id: 2, name: "B"},
  {id: 3, name: "C"},
  {id: 4, name: "D"},
  {id: 5, name: "E"},
];
let jup = students.filter((num) => num.id % 2 === 0);
let taq = students.filter((num) => num.id % 2 !== 0);
console.log(jup);
console.log(taq);


/////////////////////////////////////////////////////
const library = {
name: 'Alatau HUB',
books: [
{ name: 'book A', pages: 300 },
{ name: 'book B', pages: 100 },
{ name: 'book C', pages: 340 },
{ name: 'book D', pages: 1000 },
],
};

function findAveragePages () {
  return (
  library.books.reduce((total, num) => total + num.pages, 0) / 
  library.books.length
);
};
/////////////////////////////////////////////////////
function findLowPages() {
  return library.books.sort((a, b) => a.pages - b.pages);
}
console.log(findAveragePages());
console.log(findLowPages()[2]);
console.log(findLowPages()[3]);