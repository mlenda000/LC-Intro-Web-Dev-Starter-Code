// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    console.log("Let's play some scrabble!");
    let word = input.question('Please enter a word\t');
    points = oldScrabbleScorer(word)

  return points
};

let simpleScore = function(word){
    let totalScore = 0;
    let temp = word.toUpperCase().trim()
    for(i =0;i<temp.length;i++){
        console.log(`${temp[i]}: 1`);
        totalScore++;
    }
    console.log(`Your total score is: ${totalScore}`)    
};

let vowelBonusScore = function(word){
    totalScore = 0;
    let temp = word.toUpperCase().trim()
    for(let i=0;i<temp.length;i++){
        if(temp[i] === 'A' || temp[i] === 'E' || temp[i] === 'I' || temp[i] === 'O' || temp[i] === 'U'){
            console.log(`${temp[i]}: 3`);
            totalScore =+ 3;
        }else{
            console.log(`${temp[i]}: 1`);
            totalScore++;
        }
    }
};

let scrabbleScore;

const scoringAlgorithms = [{'Name':'Simple Score','Description':'Each letter is worth 1 point.','Score Function':simpleScore(word)}, {'Name': 'Bonus Vowels','Description':'Vowels are 3 pts, consonants are 1 pt.','Score Function':vowelBonusScore(word)},{'Name':'Scrabble','Description':'The traditional scoring algorithm.','Score Function': oldScrabbleScorer(word)}]

function scorerPrompt(word) {
    console.log('')
    runProgram()
}

let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  }

function transform(oldPointStructure) {
  
    return newPointStructure;
};

let newPointStructure;

function runProgram() {
   console.log(initialPrompt());

}

vowelBonusScore('mark')

// Don't write any code below this line //
// Changes two this section will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

