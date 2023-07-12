// 12.8.1. Select the Crew

// Code your selectRandomEntry function here:
function selectRandomEntry(a){
  let randomId = [];
  for (let i = 0; i < 3; i++){
    randomId.push(a.splice([Math.round(Math.random()*a.length-1)],1)[0]);
    }
    return randomId;
  }


// Code your buildCrewArray function here:
function buildCrewArray(idNum,candidate){
  
  
  console.log(`${candidate.name}, ${candidate.name}, ${candidate.name} are going to space!`);
}




let idNumbers = [291, 414, 503, 599, 796, 890];

console
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let randomIds = [];
randomIds= selectRandomEntry(idNumbers);



console.log(animals, randomIds);

// Code your template literal and console.log statements:

//console.log(` ${} $`)
