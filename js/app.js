var letters = {
  "blank": {letter: "", points: "", count: 2},
  "a": {letter: "a", points: 1, count: 9},
  "b": {letter: "b", points: 3, count: 2},
  "c": {letter: "c", points: 3, count: 2},
  "d": {letter: "d", points: 2, count: 4},
  "e": {letter: "e", points: 1, count: 12},
  "f": {letter: "f", points: 4, count: 2},
  "g": {letter: "g", points: 2, count: 3},
  "h": {letter: "h", points: 4, count: 2},
  "i": {letter: "i", points: 1, count: 9},
  "j": {letter: "j", points: 8, count: 1},
  "k": {letter: "k", points: 5, count: 1},
  "l": {letter: "l", points: 1, count: 4},
  "m": {letter: "m", points: 3, count: 2},
  "n": {letter: "n", points: 1, count: 6},
  "o": {letter: "o", points: 1, count: 9},
  "p": {letter: "p", points: 3, count: 2},
  "q": {letter: "q", points: 10, count: 1},
  "r": {letter: "r", points: 1, count: 6},
  "s": {letter: "s", points: 1, count: 4},
  "t": {letter: "t", points: 1, count: 6},
  "u": {letter: "u", points: 1, count: 4},
  "v": {letter: "v", points: 4, count: 2},
  "w": {letter: "w", points: 4, count: 2},
  "x": {letter: "x", points: 8, count: 1},
  "y": {letter: "y", points: 4, count: 2},
  "z": {letter: "z", points: 10, count: 1},
}

var playersHand  = [];
var playersGuess = [];
var points = 0

// Correct
// var playersGuess = [
//                      {letter: "c"},
//                      {letter: "a"},
//                      {letter: "t"},
//                    ];
// Incorrect
// var playersGuess = [
//                     {letter: "c"},
//                     {letter: "f"},
//                     {letter: "t"},
//                    ];
var bag          = createBag();
var dictionary   = window.dictionary;

$(function(){
  $('.start').on("click", play);
  $('.check.btn').on("click", checkSpelling);
  $('.player').on("click", ".tile", chooseTile);

});

function play(){
  playersHand = []
  playersGuess = []
  $('.tile-holder').html('')
  dealLetters();
  // $('.check.btn').on("click", wordScore);
}

function createBag(){
  var bag = [];
  for (letter in letters) {
    for (var i = 0; i < letters[letter].count; i++){
      bag.push(letter);
    }
  }
  return bag;
}

function dealLetters() {
  while (playersHand.length !== 7) {
    var randomIndex = Math.floor(Math.random()*bag.length);
    var letter      = bag[randomIndex];
    var letterObj   = letters[letter];

    // remove element from the bag
    bag.splice(randomIndex, 1);

    playersHand.push(letterObj);

    $('.player').append('<div class="tile">'+ letterObj.letter + '<div class="points">'+ letterObj.points + '</div></div>');
  }
}

function chooseTile(){
  for (var i = 0; i < playersHand.length; i++) {
    if(playersHand[i].letter === $(this).html()[0]){
      $(this).remove()
      $('.guess').append($(this))
      playersGuess.push(playersHand[i])
      playersHand.splice(i, 1)
      break;
    } 
  };
}

function checkSpelling(){
  var string = "";

  console.log(playersGuess);

  playersGuess.forEach(function(element, index, array){
    string+= element.letter;
    points+= element.points
  })

  // Use the dictionary checker
  dictionary.check(string, function(result){
    if (!string) return false;
    var results = result ? "correctly" : "incorrectly";
    // console.log(string + " is spelt " + results+" with "+points+" points");
    if(results==="correctly"){
      $('.scoreboard span').html(points);
      if(results ==="incorrectly"){
        $('.scoreboard span').html(!points);
        $('.messageboard span').html("You Lose!");
        }  

    } 

  });

}