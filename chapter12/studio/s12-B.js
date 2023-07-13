//Instead of randomly selecting a crew member for the spacewalk, have your program select the animal with the smallest oxygen consumption.
function selectMinEntry(a){
  let mass = [];
  let totalMass =[];
  let temp = 0;
  for (let i=0;i<a.length;i++){
    mass.push(a[i]['mass'])
  
  }
  let sortedArray = mass.sort(function(a, b){return a-b});
  totalMass =sortedArray.splice(0,3)
    return totalMass;
}

function buildCrewArray(weight,candidate){
  let tempArr = [];
    for(let i = 0; i < candidate.length;i++){
      for (let j=0;j<weight.length;j++){
        if (weight[j] === candidate[i].mass) {
        tempArr.push(candidate[i])[0]
        }
      }
    }
return tempArr
}

// Code your crewMass function here:
function crewMass(candidateMass){
  let totalMass = 0;
    for (let i = 0; i < candidateMass.length; i++){
    totalMass += candidateMass[i].mass
  }
    return Math.round(totalMass*10)/10;
  }
  
  // Code your fuelRequired function here:
  function fuelRequired(candidate){
    let totalFuel = 75000;
    for (let i=0; i < candidate.length; i++){
      if (candidate[i].species=== 'dog' || candidate[i].species === 'cat'){
        totalFuel += 200;
      }else{
        totalFuel += 100;
      }
    }
    return Math.ceil(totalFuel);
  }

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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
  
  let crew = [candidateB,candidateD,candidateF];
  let allCandidates = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF]

  console.log(buildCrewArray(selectMinEntry(allCandidates),allCandidates))