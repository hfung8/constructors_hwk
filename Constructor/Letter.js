function Letter(string) {
  this.guessedCharacter = string;
  this.guessedCorrectly = false;
  this.getSolution = function(){
    return this.guessedCharacter;
  }
  this.checkLetter = function(){
  if (this.guessedCorrectly === true){
    return this.guessedCharacter;
  }
  return "_";
  };
  this.checkGuess = function(letter){
    if (letter === this.guessedCharacter){
      this.guessedCorrectly = true;
      return true;
    } else
    return false;
  }
}

module.exports = Letter;