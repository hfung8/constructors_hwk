var Letter = require("./Letter");

function Word(string) {
  var array = string.split("");
  this.newLetterArray = array.map(function(item){
    return new Letter(item);
  })
  this.concatLetters = function(){
    return this.newLetterArray.map(function(item){
      return item.checkLetter();
    })
  }
  this.checkGuesses = function(letter){
    return this.newLetterArray.map(function(item){
      return item.checkGuess(letter);
    })
  }
}

var word = new Word("harrison");
console.log(word.concatLetters());

module.exports = Word;