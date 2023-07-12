// 12.8.2. Orbit Calculations

// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let C = 2*Math.PI*radius
  return Math.round(C)
}

// Code your missionDuration function here:
function missionDuration(numOfOrbitsCompleted,orbitRadius,orbitalSpeed){

  //time = distance / speed
  let time = numOfOrbitsCompleted*(orbitCircumference(orbitRadius) / orbitalSpeed)
  
  return (Math.round(time*100)/100);
}


  

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(a){
  let randomId = [];
  for (let i = 0; i < 3; i++){
    randomId.push(a.splice([Math.round(Math.random()*a.length-1)],1)[0]);
    }
    return randomId;
  }

// Code your oxygenExpended function here:


// Candidate data & crew array.
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
  
  let crew = [candidateA,candidateC,candidateE];
  let orbitRadius = 2000;
  let orbitalSpeed = 28000;

  console.log(`The mission will travel ${orbitCircumference(2000)}km around the planet, and it will take ${missionDuration(5,orbitRadius,orbitalSpeed)} hours to complete.`)
  