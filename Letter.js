
var Letter = function(lttr) {
  this.letter = lttr; // store the actual letter
  this.appear = false; // boolean if the letter can be shown

  this.letterRender = function() {
    if(this.letter == ' '){
       this.appear = true;
      return '  ';
    }if(this.appear === false){
      return ' _ ';
    } else{
      return this.letter;
    }
  };
};

// export to Word.js
module.exports = Letter;
