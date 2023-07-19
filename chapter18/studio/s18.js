//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name,mass,scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;

    }
    addingScores = function(scores){
        this.scores.push(scores);
    }
    average = function(scores){
        let totalScore = 0;
        for (let i = 0;i < this.scores.length; i++){
            totalScore += this.scores[i];
        }
        let avgScores = totalScore / this.scores.length;
        this.Average = Math.round(avgScores*10)/10;
        return this.Average;
    }

    status = function(){
        this.average(this.scores)
        if (this.Average >= 90){
            console.log(`${this.name} earned an average test score of ${this.Average} and has a status of Accepted`);
        }else if(this.Average >= 80){
            console.log(`${this.name} earned an average test score of ${this.Average} and has a status of Reserve`);           
        }else if(this.Average >= 70){
            console.log(`${this.name} earned an average test score of ${this.Average} and has a status of Probationary`);
        }else{
            console.log(`${this.name} earned an average test score of ${this.Average} and has a status of Rejected`);
        }
    }

};

let bear = new CrewCandidate('Bubba Bear',135,[88,85,90]);
let dog = new CrewCandidate('Merry Maltese',1.5,[93,88,97]);
let gator = new CrewCandidate('Glad Gator',225,[75,78,62]);

console.log(bear);
console.log(dog);
console.log(gator);

gator.status



bear.status()


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
gator.status()

// let i = 0;
// while(gator.average() < 80){
// gator.addingScores(100);
// i++
// console.log(i)
// }
// gator.status()

let i = 0;
while(gator.average() < 90){
gator.addingScores(100);
i++
console.log(i)
}

gator.status()