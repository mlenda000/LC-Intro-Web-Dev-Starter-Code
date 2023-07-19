const { time } = require("console");
const input = require('readline-sync');

// Define your Book class here:
class Book{
    constructor(title,author,copyrightDate,ISBN,numOfPages,timesCheckedOut,bookDiscarded){
      this.title = title;
      this.author = author;
      this.copyrightDate = copyrightDate;
      this.ISBN = ISBN;
      this.numOfPages = numOfPages;
      this.timesCheckedOut = timesCheckedOut;
      this.bookDiscarded = bookDiscarded;
    }
    checkedOut = function(){
      this.timesCheckedOut ++;
    }
  };
  
  // Define your Manual and Novel classes here:
  class Manual extends Book{
    constructor(title,author,copyrightDate,ISBN,numOfPages,timesCheckedOut,bookDiscarded){
      super(title,author,copyrightDate,ISBN,numOfPages,timesCheckedOut,bookDiscarded);
      

      }
      dispose = function(currentYear){
        if (currentYear - this.copyrightDate > 5){
          this.bookDiscarded = 'Yes';
        }else{
          return this.copyrightDate;
        }
    }
  };
  class Novel extends Book{
    constructor(title,author,copyrightDate,ISBN,numOfPages,timesCheckedOut,bookDiscarded){
      super(title,author,copyrightDate,ISBN,numOfPages,timesCheckedOut,bookDiscarded);
      
      
    }
    dispose = function(){
      if (this.timesCheckedOut > 100){
        this.bookDiscarded = 'Yes';
      }else{
        return this.timesCheckedOut;
      }
    }
  };
  
  
  // Declare the objects for exercises 2 and 3 here:
  let newNovel = new Novel('Pride and Prejudice','Jane Austen',1813,	
  '1111111111111',432,32,'No');
  
  let newManual = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,'0000000000000',1147,1,'No')
  // Code exercises 4 & 5 here:
console.log(newManual);
  newManual.dispose(2023);
console.log(newManual);

console.log(newNovel);

let usrCheckedOut = input.question('How many times has this book been checked out?\t')

for (i = 0; i < Number(usrCheckedOut); i++){
  newNovel.checkedOut();
};
console.log(newNovel); 