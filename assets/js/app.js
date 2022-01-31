const btn = document.querySelector('#btn')
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

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const randomNum = (limit) => {
    const num = Math.floor(Math.random()*limit);
    return num;
}

const createPassword = (verb, noun, num) => {
    const randVerb = randomNum(verbs.length-1)
    const randomNoun = randomNum(nouns.length-1)
    const randNum1 = randomNum(nums.length-1)
    const randNum2 = randomNum(nums.length-1)
    const randNum3 = randomNum(nums.length-1)
    const password = `${verb[randVerb]}${noun[randomNoun]}${num[randNum1]}${num[randNum2]}${num[randNum3]}`

    return password;
}


btn.addEventListener('click', (e) => {
    const myPassword = createPassword(verbs, nouns, nums);
    displayPass.value = myPassword;
})