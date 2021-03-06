// require package for letter
var Letter = require('./Letter.js');

function Word(wrd) {
  var that = this;
  this.word = wrd;   //store string wrd
  this.letters = [];   //array of letter objects
  this.wordFound = false;

  this.getLets = function() {
    for(var i = 0; i<that.word.length; i++){
      var newLetter = new Letter(that.word[i]);
      this.letters.push(newLetter);
  }
};

  //find current word
  this.didWeFindTheWord = function() {
    if(this.letters.every(function(lttr){
      return lttr.appear === true;
    })){
      this.wordFound = true;
      return true;
  }
};
this.checkIfLetterFound = function(guessedLetter) {
    var whatToReturn = 0;
    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
        whatToReturn++;
    }
  })
    return whatToReturn;
};
//   this.wordRender = function() {
//     var display = '';
//     that.letters.forEach(function(lttr){
//       var currentLetter = lttr.letterRender();
//       display+= currentLetter;
//     });
//
//     return display;
//   };
// }

module.exports = Word;
