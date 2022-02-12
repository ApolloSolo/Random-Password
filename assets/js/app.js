//Grab buttons and input box
const btnFun = document.querySelector("#btn-fun");
const btnRandom = document.querySelector("#btn-random");
const displayPass = document.querySelector("#pass-display");
const strictForm = document.querySelector("#strict-form");
const passOutput = document.querySelector("#strict-output");

//Data seeds as arrays
const verbs = [
  "Running",
  "Falling",
  "Processing",
  "Covering",
  "Oxidizing",
  "Forming",
  "Reacting",
  "Boiling",
  "Cycling",
  "Catalyzing",
  "Circulating",
  "Condensing",
  "Gravitating",
  "Hypothesizing",
  "Inducting",
  "Isolating",
  "Limiting",
  "Photosynthesizing",
  "Precipitating",
  "Refactoring",
  "Spinning",
  "Rotating",
  "Transforming",
  "Terraforming",
  "Anticipate",
  "Assuring",
  "Believe",
  "Biting",
  "Calculating",
  "Chopping",
  "Dancing",
  "Discovering",
  "Demanding",
];

const nouns = [
  "Tiger",
  "Monky",
  "Human",
  "Proton",
  "Electron",
  "Sun",
  "Acid",
  "Argon",
  "Atoms",
  "Antimatter",
  "Capacitor",
  "Carbon",
  "Dynamo",
  "Fungus",
  "Galaxy",
  "Meteor",
  "Momentum",
  "Predator",
  "Pressure",
  "Quark",
  "Sulfur",
  "Titanium",
  "Turbine",
  "Xylem",
  "Springs",
  "Mountain",
  "River",
  "Tree",
  "Planet",
  "Rock",
];

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "z",
  "y",
  "z",
];

const symboles = ["!", "@", "#", "$", "%", "&", "`", "^", "=", "+", "-", "_"];

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Returns random number based upon number passed in
const randomNum = (limit) => {
  const num = Math.floor(Math.random() * limit);
  return num;
};

//Pass in array, pick random index (one word), and returns new array of mixed up letters for that string.
const randomizeArrayOfArrays = (oldArray) => {
  const newArray = [];
  const randArrayIndex = oldArray[randomNum(oldArray.length)];
  for (let i = 0; i < randArrayIndex.length; i++) {
    newArray.push(randArrayIndex[randomNum(randArrayIndex.length)]);
  }
  return newArray;
};

//Pass in array, picks random index in that array for array.length amount of times, and returns new array
const randomizeArray = (oldArray, times = 0, strict = false) => {
  if (times === 0 && strict === false) {
    const newArray = [];
    for (let i = 0; i < oldArray.length; i++) {
      newArray.push(oldArray[randomNum(oldArray.length)]);
    }
    return newArray;
  } else {
    const newArray = [];
    for (let i = 0; i < times; i++) {
      newArray.push(oldArray[randomNum(oldArray.length)]);
    }
    return newArray;
  }
};

//Function that takes array arguents and concats them to generate password.
//Could refactor to implement loop and do away with randNum constants
const createFunPassword = (verb, noun, num) => {
  const randVerb = randomNum(verb.length);
  const randomNoun = randomNum(noun.length);
  const randNum1 = randomNum(num.length);
  const randNum2 = randomNum(num.length);
  const randNum3 = randomNum(num.length);
  const randNum4 = randomNum(num.length);
  const password = `${verb[randVerb]}${noun[randomNoun]}${num[randNum1]}${num[randNum2]}${num[randNum3]}${num[randNum4]}`;

  return password;
};

//Create a string as a password.
//Create a random password using a randome index of the verbs array.
//Could refactor more - seperate for loops
const createRandomPassword = (verb, numOfNums, symbole) => {
  const randomLetters = randomizeArrayOfArrays(verb);
  const randomNums = [];
  const randSymbole = symbole[randomNum(symbole.length)];
  for (let i = 0; i < numOfNums; i++) {
    let num = randomNum(numOfNums);
    randomNums.push(num);
  }

  //Start of array to string process
  const combo = randomLetters.concat(randomNums);
  const randCombo = randomizeArray(combo);
  randCombo.push(randSymbole);
  let passwordString = "";
  //Turn randCombo to string
  for (let i = 0; i < randCombo.length; i++) {
    letter = randCombo[i];
    passwordString += letter;
  }
  return passwordString;
};

//Criteria Password generator
//Could refactor to simplify
const makeStrictPass = () => {
  const totalChars = parseInt(
    document.querySelector("#total-characters").value
  );
  const capLetters = parseInt(document.querySelector("#capital-letters").value);
  const specialChars = parseInt(
    document.querySelector("#special-characters").value
  );
  const numChars = parseInt(document.querySelector("#number-characters").value);
  const totalLetters = totalChars - (numChars + specialChars);

  if (totalChars < specialChars + numChars) {
    alert(
      "The number of special characters and numbers need to be less than or equal to the total number of characters"
    );
    passOutput.value = "";
  } else if (capLetters > totalChars - (numChars + specialChars)) {
    alert(
      "Your requested amount of cpital letters exceeds the total amount of letter characters"
    );
    passOutput.value = "";
  } else {
    const letterArray = randomizeArray(alphabet, totalLetters, true);
    const numsArray = randomizeArray(nums, numChars, true);
    const specialArray = randomizeArray(symboles, specialChars, true);

    const concatArray = letterArray.concat(numsArray).concat(specialArray);

    let newString = "";

    for (let i = 0; i < concatArray.length; i++) {
      newString += concatArray[i];
      count = 0;
      if (newString.length === capLetters) {
        newString = newString.toUpperCase();
      }
    }

    passOutput.value = newString;
  }
};

//Event listeners

//fun password generation
btnFun.addEventListener("click", () => {
  const myPassword = createFunPassword(verbs, nouns, nums);
  displayPass.value = "";
  displayPass.value = myPassword;
});

//Weird password generation
btnRandom.addEventListener("click", () => {
  const myPassword = createRandomPassword(verbs, 4, symboles);
  displayPass.value = "";
  displayPass.value = myPassword;
});

//Strict criteria generation
strictForm.addEventListener("submit", (e) => {
  e.preventDefault();
  makeStrictPass();
});