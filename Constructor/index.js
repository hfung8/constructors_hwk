var Word = require("./Word");
var Words = require("./words");
var inquirer = require("inquirer");
var Letter = require("./Letter");
function Game(){
var self = this; 
this.guesses = 10;
var randomIndex = Math.floor(Math.random() * 5);
var randomWord = Words[randomIndex];
this.currentWord = new Word(randomWord);
console.log(this.currentWord);
this.choiceWord = this.currentWord.concatLetters().join("");
var letters = this.currentWord.newLetterArray.map(function(item){
return item.guessedCharacter;
}).join("");

this.play = function(){
  if (this.guesses > 1){
    console.log(this.guesses);
    this.runInquirer();
  } else
  (console.log("Sorry got to quit!"));
}

this.runInquirer = function(){
  return inquirer.prompt({
  message: "?Guess a letter? \n" + self.currentWord.concatLetters().join(""),
  name: "guess",
  validate: function(input){
    var done = this.async();
    if (!letters.includes(input)){
      done("You didn't choose a letter correctly.");
  } else 
  done(null,true);
}
}).then(function(response){
  var guessedCorrectly = self.currentWord.checkGuesses(response.guess);
  if (guessedCorrectly){
    console.log("You guessed Correctly");
    console.log(self.currentWord.concatLetters().join(""));
    self.runInquirer();
  } else
  self.guesses--;
  console.log("Guess again!");
})
}
}

var game = new Game();
game.play();