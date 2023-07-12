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
let i = 1;
superChimpOne["astronautID"] = i++;
salamander["astronautID"] = i++;
superChimpTwo["astronautID"] = i++;
superDog["astronautID"] = i++;
superTardigrade["astronautID"] = i++;

superChimpOne["move"] = Math.round(Math.random()*10);
salamander["move"] = Math.round(Math.random()*10);
superChimpTwo["move"] = Math.round(Math.random()*10);
superDog["move"] = Math.round(Math.random()*10);
superTardigrade["move"] = Math.round(Math.random()*10);

// Create an array to hold the animal objects.
let arr = [superChimpOne,salamander,superChimpTwo,superDog,superTardigrade];

// Print out the relevant information about each animal.
console.log(arr);
// Start an animal race!
