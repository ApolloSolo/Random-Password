const btnFun = document.querySelector('#btn-fun')
const displayPass = document.querySelector('#pass-display')

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

const randomNum = (limit) => {
    const num = Math.floor(Math.random()*limit);
    return num;
}

//Takes in an array, pick random index, and creates new array of mixed up letters
const randomizeArrayOfArrays = (oldArray) => {
    const newArray = []
    const randArrayIndex = oldArray[randomNum(oldArray.length-1)];
    for(let i = 0; i < randArrayIndex.length - 1; i++){
        newArray.push(randArrayIndex[randomNum(randArrayIndex.length-1)])
    }
    return newArray;
}

const randomizeArray = (oldArray) => {
    const newArray = []
    for(let i = 0; i < oldArray.length - 1; i++){
        newArray.push(oldArray[randomNum(oldArray.length-1)])
    }
    return newArray;
}

const createFunPassword = (verb, noun, num) => {
    const randVerb = randomNum(verb.length-1)
    const randomNoun = randomNum(noun.length-1)
    const randNum1 = randomNum(num.length-1)
    const randNum2 = randomNum(num.length-1)
    const randNum3 = randomNum(num.length-1)
    const password = `${verb[randVerb]}${noun[randomNoun]}${num[randNum1]}${num[randNum2]}${num[randNum3]}`

    return password;
}


const createRandomPassword = (verb, numOfNums, symbole) => {
    const randomLetters = randomizeArrayOfArrays(verb);
    const randomNums = [];
    const randSymbole = symbole[randomNum(symbole.length-1)]
    for(let i = 0; i < numOfNums; i++){
        let num = randomNum(numOfNums);
        randomNums.push(num);
    }
    
    const combo = randomLetters.concat(randomNums);
    combo.push(randSymbole)
    const randCombo = randomizeArray(combo);
    return randCombo;
}

let letters = createRandomPassword(verbs, 4, symboles);



btnFun.addEventListener('click', (e) => {
    const myPassword = createFunPassword(verbs, nouns, nums);
    displayPass.value = myPassword;
})