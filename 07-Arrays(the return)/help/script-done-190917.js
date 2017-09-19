const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    weight: 70,
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    weight: 73,
    year: 1643,
    passed: 1727
  },
  {
    first: "Marie",
    last: "Noel",
    weight: 60,
    year: 1849,
    passed: 1902
  },
  {
    first: "Galileo",
    last: "Galilei",
    weight: 80,
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    weight: 71,
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    weight: 70,
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    weight: 72,
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    weight: 60,
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    weight: 55,
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    weight: 76,
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    weight: 67,
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    weight: 40,
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    weight: 70,
    year: 1829,
    passed: 1909
  }
];
const people = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("---------Iteration 1");
const born1500 = inventors.filter(
  inventor => inventor.year > 1499 && inventor.year < 1700
);
console.table(born1500);
const lookingForMarie = inventors.filter(
  inventor => inventor.first === "Marie"
);
console.table(lookingForMarie);
const firstG = inventors.filter(inventor => inventor.last[0] === "G");
console.table(firstG);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log("---------Iteration 2");
const fullName = inventors.map(
  inventor =>
    inventor.first + " " + inventor.last + " was born in " + inventor.year + "."
);
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("---------Iteration 3");
// const bornLast = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return -1
//   } else {
//     return 1
//   }
// })
const bornLast = inventors.sort((a, b) => (a.year > b.year ? -1 : 1));
console.table(bornLast);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log("---------Iteration 4");

const totalWeight = inventors.reduce(function(total, inventor) {
  return total + inventor.weight;
}, 0);
console.log(totalWeight + " is the weight of all the inventors");

const totalYear = inventors.reduce(function(total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log("All the inventors lived together for " + totalYear + " years.");

// 5. Sort the inventors by years lived
console.log("---------Iteration 5");
const older = inventors.sort(function(a, b) {
  if (a.passed - a.year > b.passed - b.year) {
    return -1;
  } else {
    return 1;
  }
});
console.table(older);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("---------Iteration 7");
const alpha = inventors.sort(function(a, b) {
  if (a.last[0] < b.last[0]) {
    return -1;
  } else {
    return 1;
  }
});
console.table(alpha);

console.log("---------Iteration 7.2");
const alphaPeople = people.sort(function(a, b) {
  const [aLast, aFirst] = a.split(", "); //destructuration pour acceder à toutes les valeurs
  const [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(alphaPeople);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log("---------Iteration 8");
const move = data.reduce(function(total, item) {
  if (!total[item]) {
    total[item] = 0;
  }
  total[item]++;
  return total;
}, {});
console.log(move);

const people2 = [
  {
    name: "Wes",
    year: 1988
  },
  {
    name: "Kait",
    year: 1986
  },
  {
    name: "Irv",
    year: 1970
  },
  {
    name: "Lux",
    year: 2015
  }
];
const comments = [
  {
    text: "Love this!",
    id: 523423
  },
  {
    text: "Super good",
    id: 823423
  },
  {
    text: "You are the best",
    id: 2039842
  },
  {
    text: "Ramen is my fav food ever",
    id: 123523
  },
  {
    text: "Nice Nice Nice!",
    id: 542328
  }
];

// 09 _________________________________________________________
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
console.log("---------Iteration 9");
// const date = new Date();
// const yearDate = date.getFullYear();

const oneAdult = people2.some(
  people => new Date().getFullYear() - people.year >= 19
);
console.log(oneAdult);

const allAdults = people2.every(
  people => new Date().getFullYear() - people.year >= 19
);
console.log(allAdults);

console.log("---------Iteration 10");
// 10 _________________________________________________________
// Array.prototype.find()
// find the comment with the ID of 823423
const thisComment = comments.find(comment => comment.id === 823423);
console.log(thisComment);

console.log("---------Iteration 11");
// 11 _________________________________________________________
// Array.prototype.findIndex()
// Find the comment with this ID
const indexComment = comments.findIndex(comment => comment.id === 823423);
console.log(indexComment);

console.log("---------Iteration 12");
// 12 _________________________________________________________
// delete the comment with the ID of 823423
console.table(comments);
comments.splice(1, 1);
console.table(comments);
