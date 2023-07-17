// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

    it("should return testing for orginization key to match nonprofit", function(){
      expect(launchcode.organization).toEqual('nonprofit')
    });

    it("should return testing for executiveDirector key to match Jeff", function(){
      expect(launchcode.executiveDirector).toEqual('Jeff')
    });
    
    it("should return for percentageCoolEmployees key to return a value of number", function(){
      expect(launchcode.percentageCoolEmployees).toEqual(100)
    });

    it("should return for programsOffered key to check what it contains and the length,", function(){ 
      expect(launchcode.programsOffered).toContain('LC101');
      expect(launchcode.programsOffered).toContain('LaunchCode Women+');
      expect(launchcode.programsOffered).toContain('CodeCamp')
      expect(launchcode['programsOffered'].length).toEqual(3)
    });
     

    it("should return for launchCode divisible by 2 and nothing else", function(){
      expect(launchcode.method(4)).toEqual('Launch!')
    }); 

    it("should return for launchCode divisible by 3 and nothing else", function(){
      expect(launchcode.method(9)).toEqual('Code!')
    });

    it("should return for launchCode divisible by 5 and nothing else", function(){
      expect(launchcode.method(5)).toEqual('Rocks!')
    });

    it("should return for launchCode divisible by 2 and 3 only", function(){
      expect(launchcode.method(6)).toEqual('LaunchCode!')
    });

    it("should return for launchCode divisible by 3 and 5 only", function(){
      expect(launchcode.method(15)).toEqual('Code Rocks!')
    });

    it("should return for launchCode divisible by 2 and 5 only", function(){
      expect(launchcode.method(10)).toEqual('Launch Rocks! (CRASH!!!!)')
    });

    it("should return for launchCode divisible by 2,3 and 5", function(){
      expect(launchcode.method(30)).toEqual('LaunchCode Rocks!')
    });

    it("should return for launchCode not divisible by 2,3 and 5", function(){
      expect(launchcode.method(23)).toEqual('Rutabagas! That doesn\'t work.')
    });
  
});