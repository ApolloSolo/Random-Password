//Grab buttons and input box
const btnFun = document.querySelector('#btn-fun')
const btnRandom = document.querySelector('#btn-random')
const displayPass = document.querySelector('#pass-display')

//Data seeds as arrays
const verbs =  [
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
    "Demanding"
]

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
    "Rock"
]

const symboles = ["!", "@", "#", "$", "%", "&"]

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Returns random number based upon number passed in
const randomNum = (limit) => {
    const num = Math.floor(Math.random()*limit);
    return num;
}

//Pass in array, picks random index (one word), and returns new array of mixed up letters for that string.
const randomizeArrayOfArrays = (oldArray) => {
    const newArray = [];
    const randArrayIndex = oldArray[randomNum(oldArray.length)];
    for(let i = 0; i < randArrayIndex.length; i++){
        newArray.push(randArrayIndex[randomNum(randArrayIndex.length)]);
    }
    return newArray;
}

//Pass in array, picks random index in that array for array.length amount of times, and returns new array 
const randomizeArray = (oldArray) => {
    const newArray = [];
    for(let i = 0; i < oldArray.length; i++){
        newArray.push(oldArray[randomNum(oldArray.length)]);
    }
    return newArray;
}

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
}

//Create a string as a password. 
//Create a random password using a randome index of the verbs array.
//Could refactor more - seperate for loops
const createRandomPassword = (verb, numOfNums, symbole) => {
    const randomLetters = randomizeArrayOfArrays(verb);
    const randomNums = [];
    const randSymbole = symbole[randomNum(symbole.length)]
    for(let i = 0; i < numOfNums; i++){
        let num = randomNum(numOfNums);
        randomNums.push(num);
    }
    
    //start of array to string process
    const combo = randomLetters.concat(randomNums);
    const randCombo = randomizeArray(combo);
    randCombo.push(randSymbole);
    let passwordString = "";
    //turn rand combo to string
    for(let i = 0; i < randCombo.length; i++){
        letter = randCombo[i];
        passwordString += letter;
    }
    return passwordString;
}


//Event listeners

btnFun.addEventListener('click', (e) => {
    const myPassword = createFunPassword(verbs, nouns, nums);
    displayPass.value = "";
    displayPass.value = myPassword;
})

btnRandom.addEventListener('click', (e) => {
    const myPassword = createRandomPassword(verbs, 4, symboles);
    displayPass.value = "";
    displayPass.value = myPassword;
})