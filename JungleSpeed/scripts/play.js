let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let player1Deck = new Array()
let player2Deck = new Array()
let player3Deck = new Array()
let player4Deck = new Array()

let player1Played = new Array()
let player2Played = new Array()
let player3Played = new Array()
let player4Played = new Array()

let deckList = new Array()
let deckListPlayed = new Array()

let nbPlayer = parseInt(window.prompt("Combien de joueur ?", "4"))

if (nbPlayer == 2) {
  playerList = ["player1","player2"]
}
if (nbPlayer == 3) {
  playerList = ["player1","player2","player3"]
}
if (nbPlayer == 4) {
  playerList = ["player1","player2","player3","player4"]
}

console.log(playerList)

function deckShuffle(deck) { // c'est du gros vol (Fisher-Yates shuffle)
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap elements
  }
  return deck;
}

function distribute(nbPlayer){

  if (nbPlayer == 2) {
    for (var i = 0; i < deck.length; i+=nbPlayer) {
      player1Deck.push(deck[i])
    }
    for (var i = 1; i < deck.length; i+=nbPlayer) {
      player2Deck.push(deck[i])
    }
  }

  if (nbPlayer == 3) {
    for (var i = 0; i < deck.length; i+=nbPlayer) {
      player1Deck.push(deck[i])
    }
    for (var i = 1; i < deck.length; i+=nbPlayer) {
      player2Deck.push(deck[i])
    }
    for (var i = 2; i < deck.length; i+=nbPlayer) {
      player3Deck.push(deck[i])
    }
  }

  if (nbPlayer == 4) {
    for (var i = 0; i < deck.length; i+=nbPlayer) {
      player1Deck.push(deck[i])
    }
    for (var i = 1; i < deck.length; i+=nbPlayer) {
      player2Deck.push(deck[i])
    }
    for (var i = 2; i < deck.length; i+=nbPlayer) {
      player3Deck.push(deck[i])
    }
    for (var i = 3; i < deck.length; i+=nbPlayer) {
      player4Deck.push(deck[i])
    }
  }
}



// function playPlayer1(){
//   player1Played.push(player1Deck[player1Deck.length-1])
//   player1Deck.pop()
//   // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
//   console.log(player1Played)
//   console.log(player1Deck)
// }
// function playPlayer2(){
//   player2Played.push(player2Deck[player2Deck.length-1])
//   player2Deck.pop()
//   // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
//   console.log(player2Played)
//   console.log(player2Deck)
// }
// function playPlayer3(){
//   player3Played.push(player3Deck[player3Deck.length-1])
//   player3Deck.pop()
//   // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
//   console.log(player3Played)
//   console.log(player3Deck)
// }
// function playPlayer4(){
//   player4Played.push(player4Deck[player4Deck.length-1])
//   player4Deck.pop()
//   // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
//   console.log(player4Played)
//   console.log(player4Deck)
// }
//
//
// function play(){
//   window.addEventListener('keydown', (e) => {
//       if(e.code == "KeyQ" && ){
//         playPlayer1()
//       }
//     })
// }
//
// play()

console.log(deck)
deckShuffle(deck)
console.log(deck)
distribute(nbPlayer)
console.log(player1Deck,player2Deck,player3Deck,player4Deck)

deckList = [player1Deck, player2Deck, player3Deck, player4Deck]
deckListPlayed = [player1Played, player2Played, player3Played, player4Played]
console.log(deckList)
console.log(deckListPlayed)

function play(i){
  deckListPlayed[i].push(deckList[i][deckList[i].length-1])
  deckList[i].pop()
  // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
  console.log(player1Played)
  console.log(player1Deck)
}
play(1)
console.log(deckListPlayed)
console.log(deckList[1][deckListPlayed[1].length-1])
console.log(deckListPlayed[1])

// window.addEventListener('keydown', (e) => {
//       if(e.code == "KeyQ" ){
//         play(1)
//         console.log(player1Played)
//       }
//     }
//   )
// window.addEventListener('keydown', (e) => {
//       if(e.code == "KeyZ" ){
//         play(2)
//         console.log(player2Played)
//       }
//     }
//   )
// window.addEventListener('keydown', (e) => {
//       if(e.code == "KeyE" ){
//         play(3)
//         console.log(player3Played)
//       }
//     }
//   )
// window.addEventListener('keydown', (e) => {
//       if(e.code == "KeyR" ){
//         play(4)
//         console.log(player4Played)
//       }
//     }
//   )
