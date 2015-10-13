# Word-Scuttle

## WDI-LDN-16 - Project 1

### Scrable on your own!

In this word game your objective is to make the highest scoring word possible in your hand until you can't!

 



// *****************************************************
// OBJECTIVE
// ******************************************************
// 
// The game is scrabble. The player is given seven letters to make a word. The player has one mintue to make as many words as possible. 

// ********************************************************
// LOGIC
// ********************************************************
// Random  7 LETTERS given from an array of 26. (This is at the top). These are 7 squares for the individual tile.
// The TIMER once the player "clicks" the first letter.
// player "clicks and drags letter" to the DISPLAY WINDOW.
// The display window will be in the center. It will have 7 spaces. 
// Below that is a PLAY BUTTON and a SKIP BUTTON. The skip button will SUBTRACT 10 POINTS from your total score if you press it.
// There will be a display to keep your total score after one minute.
// After time expires, the player is alerted to their score and will be asked to play again by.
// ***************************************************************
// DESIGN - PSEUDO
// ******************************************************************
// Page on load: fade in title screen t.o the game board.
// BOARD LAYOUT:
//      TOP: WILL SHOW THE FORMED WORD.
//              1. This will be a div class of top.
//                  Each square should be an empty array [0]; 
//             2.    
//
//       MIDDLE: WILL HAVE THE PLAYER'S RANDOMIZED TILES. TIMER AND SCORE WILL BE BELOW THAT.
//       
//              1.Div class of middle.
// 
//       BOTTOM: WILL HAVE THE TWO BUTTONS.
                  // Play button will have sound when click.
                  // Skip button will have a sound when clicked.


window.onload =function({
  // player clicks start.

// onload display random array of letters. tiles = some function of an empty array. listen for click event. When click event happens the timer starts. First we need to get the empty array to display in the class of alphabet-squares
  // each letter corresponds to a value.
