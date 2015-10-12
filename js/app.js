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

var playersHand = [];
var bag = createBag();

$(function(){
  $('.start').on("click", play);
});

function play(){
  $('.player')
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

    // remove element from the bag
    bag.splice(randomIndex, 1);

    playersHand.push(letterObj);

    $('.player').append('<div class="tile">'+ letterObj.letter + '<div class="points">'+ letterObj.points + '</div></div>');
  }
}