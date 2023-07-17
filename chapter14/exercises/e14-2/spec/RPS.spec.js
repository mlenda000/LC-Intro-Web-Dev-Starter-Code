const isWhoWon = require('../RPS.js');

describe("isWhoWon", function(){

   it("should return Players tied.", function(){
      expect(isWhoWon.whoWon('rock','rock')).toEqual("TIE!");
   });

   it("should return Player one wins", function(){
      expect(isWhoWon.whoWon('paper', 'scissors')).toEqual("Player 2 wins!");
   });

   it("should return Player two wins", function(){
      expect(isWhoWon.whoWon('rock','paper')).toEqual("Player 2 wins!");
   });
   
   it("should return Player two wins", function(){
      expect(isWhoWon.whoWon('scissors','rock')).toEqual("Player 2 wins!");
   });
   
   it("should return Player one wins", function(){
      expect(isWhoWon.whoWon('rock','scissors')).toEqual("Player 1 wins!");
   });

   it("should return Player one wins", function(){
      expect(isWhoWon.whoWon('paper','rock')).toEqual("Player 1 wins!");
   });

   it("should return Player one wins", function(){
      expect(isWhoWon.whoWon('scissors','paper')).toEqual("Player 1 wins!");
   });
  
   it("should return checks to see if an improper word is entered", function(){
      expect(isWhoWon.whoWon('dog','scissors')).toEqual("You did not choose a valid choice");
   });

});