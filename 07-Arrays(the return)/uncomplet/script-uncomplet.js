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

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name

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
  "truck"
];

// 8. Reduce Exercise
// Sum up the instances of each of these

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

// _________________________________________________________
// Array.prototype.every() // is everyone 19 or older?

// _________________________________________________________
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// _________________________________________________________
// Array.prototype.findIndex()
// Find the comment with this ID

// _________________________________________________________
// delete the comment with the ID of 823423
