let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6
};

let superDog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
};

let superTardigrade= {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
let id = 1;
superChimpOne["astronautID"] = id++;
salamander["astronautID"] = id++;
superChimpTwo["astronautID"] = id++;
superDog["astronautID"] = id++;
superTardigrade["astronautID"] = id++;

superChimpOne["move"] = Math.round(Math.random()*10);
salamander["move"] = Math.round(Math.random()*10);
superChimpTwo["move"] = Math.round(Math.random()*10);
superDog["move"] = Math.round(Math.random()*10);
superTardigrade["move"] = Math.round(Math.random()*10);

// Create an array to hold the animal objects.
let crew = [superChimpOne,salamander,superChimpTwo,superDog,superTardigrade];

// Print out the relevant information about each animal.
function relevantInformation(animal){
    let tempArr = [];
    for (let i = 0; i < animal.length; i++){
    tempArr.push(`${animal[i].name} is a ${animal[i].species}. They are ${animal[i].age} years old and ${animal[i].mass} kilograms. Their ID is ${animal[i].astronautID}.`);
    }
    return tempArr;
}

console.log(relevantInformation(crew));
// Start an animal race!


function race(animals){
    let steps;
    let turns;
    let newArr = []
    for (let i = 0; i < animals.length; i++){
        turns = 0;
        steps = 0;
        while (steps < 20){
            steps += animals[i].move
            turns++
        }
        newArr.push(`${animals[i].name} took ${turns} turns to take 20 steps.`)
    }
    return newArr
}

console.log(race(crew));

//do stuff already