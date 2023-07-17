const isCheckFive = require('../checkFive.js');

 describe("isCheckFive", function(){

   it("should return num is less than 5.", function(){
      expect(isCheckFive.checkFive(2)).toEqual("2 is less than 5.");
   });

   it("should return num is greater than 5", function(){
      expect(isCheckFive.checkFive(8)).toEqual("8 is greater than 5.");
   });

   it("should return num is equal to 5", function(){
      expect(isCheckFive.checkFive(5)).toEqual("5 is equal to 5.");
   });


}); 
