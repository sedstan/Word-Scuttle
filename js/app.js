window.onload = function() {

var letters = {
  // "blank": {letter: "", points: "", count: 2},
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
var bag          = createBag();
var dictionary   = window.dictionary;

$(function(){
  $('.start').on("click", play);
  $('.check.btn').on("click", checkSpelling);
  $('.player').on("click", ".tile", chooseTile);
  $('.guess').on("click", ".tile", unChooseTile);
  $('.reset').on("click", reset);
});

function reset(){
  points = 0
  $(".scoreboard span").html("0");
  $(".messageboard").empty();
  $(".tile-holder").empty();
  $('.reset').addClass("hide");
}

function play(){
  $('.reset').removeClass("hide");
  $('.check').removeClass("hide");
  $('.messageboard span').html("");

  playersHand = []
  playersGuess = []
  $('.tile-holder').html('')
  dealLetters();
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
    bag.splice(randomIndex, 1);
    playersHand.push(letterObj);
    $('.player').append('<div class="tile animated pulse">'+ letterObj.letter + '<div class="points">'+ letterObj.points + '</div></div>');
  }
}

function chooseTile(){
  for (var i = 0; i < playersHand.length; i++) {
    if(playersHand[i].letter === $(this).html()[0]){
      $(this).remove()
      $('.guess').append($(this))
      $(this).addClass("zoomIn")
      playersGuess.push(playersHand[i])
      playersHand.splice(i, 1)
      break;
    } 
  };
}

function unChooseTile(){
  for (var i = 0; i < playersHand.length; i++) {
    if (playersGuess[i].letter === $(this).html()[0]){
      $(this).remove()
      $('.player').append($(this))
      playersHand.push(playersGuess[i])
      playersGuess.splice(i, 1)
      break;
    } 
  };
}

function checkSpelling(){
  var string = "";
  var point  = 0
  playersGuess.forEach(function(element, index, array){
    string += element.letter;
    point  += element.points
  })

  
  dictionary.check(string, function(result){
    if (!string) return false;
    var results = result ? "correctly" : "incorrectly";
    if(results==="correctly"){
      points+=point
      $('.scoreboard span').html(points);
      $('.messageboard span').html("Well done you got it right! You got "+points+" points!"); 
    }else{
      $('.messageboard span').html("You Lose!");
    }  
  });

  $(".tile-holder").empty();
  $('.reset').addClass("hide");
  $('.check').addClass("hide");
}
}