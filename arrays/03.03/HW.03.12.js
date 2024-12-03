// //class Work
// const myClass = {
//     group: "24/5",
//     members: [
//         {name: "Aya", age:"18", subjects: ["history" , "Chematic"]},
//         {name: "Ayganym", age:"14", subjects: ["D/Sh" , "English"]},
//         {name: "Baqbergen", age:"13", subjects: ["D/Sh" , "Informatika"]},
//         {name: "Bekarys", age:"15", subjects: ["matematica" , "English"]},
//         {name: "Alikhan", age:"15", subjects: ["D/Sh" , "English"]},
//         {name: "Asylbek", age:"15", subjects: ["D/Sh" , "Informatika"]},
//         {name: "Nurislam", age:"14", subjects: ["D/Sh" , "enbek"]},
//         {name: "Islam", age:"13", subjects: ["Fizika" , "D/Sh"]},
//         {name: "Kaisar", age:"13", subjects: ["Fizika" , "English"]},
//         {name: "Muhambetali", age:"22", subjects: ["D/Sh" , "English"]},
//     ]
// };

// function allSubjects() {
//     return myClass.members.flatMap((members) => members.subjects)
// };

// console.log(allSubjects());
// console.log(myClass.members.filter((member) => member.age >= 13 && member.age <= 16));
// console.log(myClass.members.filter((member) => member.subject.includes("D/Sh")).length);

//EXERCISE1 
const city = {
 
    name: "Алматы", 
      population: 2000000, 
      districts: [ 
    { name: "Жетысуский район", population: 300000 },
    { name: "Алмалинский район", population: 250000 }, 
    { name: "Алатауский район", population: 230000 }, 
    { name: "Ауэзовский район", population: 450000 }, 
    { name: "Бостандыкский район", population: 640000 },    
    ],
};

console.log(city);

//EXERCISE2
const schools = [
    {name: "№1 мектеп",district: "Алмалы",  students: 500},
    {name: "№2 мектеп",district: "Бостандық",students: 700},
  ];
    schools.push({ name: "№136 мектеп",district: "Карасай",students: 920 });

    schools[0].students = 630

    console.log(schools);
  
//EXERCISE3 
function calc(schools) {
    return schools.reduce((total, schools) => total + schools.students);
  }
  
console.log(calc(schools));

//EXERCISE4
const districts = [
    { name: "Алатауский район", population: 230000 }, 
    { name: "Ауэзовский район", population: 450000 }, 
    { name: "Бостандыкский район", population: 640000 }, 
  ];
function find(districts, name) {
    return districts.find((district) => district.name === name);
}

console.log(find(districts, "Алатауский район"));
console.log(find(districts, "Ауэзовский район"));
console.log(find(districts, "Бостандыкский район"));
