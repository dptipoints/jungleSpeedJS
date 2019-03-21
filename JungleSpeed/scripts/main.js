let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let player1Deck = new Array()
let player2Deck = new Array()
let player3Deck = new Array()
let player4Deck = new Array()

let nbplayer = parseInt(window.prompt("Combien de joueur ?", "4"))


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
      player1.push(deck[i])
    }
    for (var i = 1; i < deck.length; i+=nbPlayer) {
      player2.push(deck[i])
    }
  }

  if (nbPlayer == 3) {
    for (var i = 0; i < deck.length; i+=nbPlayer) {
      player1.push(deck[i])
    }
    for (var i = 1; i < deck.length; i+=nbPlayer) {
      player2.push(deck[i])
    }
    for (var i = 2; i < deck.length; i+=nbPlayer) {
      player3.push(deck[i])
    }
  }

  if (nbPlayer == 4) {
    for (var i = 0; i < deck.length; i+=nbPlayer) {
      player1.push(deck[i])
    }
    for (var i = 1; i < deck.length; i+=nbPlayer) {
      player2.push(deck[i])
    }
    for (var i = 2; i < deck.length; i+=nbPlayer) {
      player3.push(deck[i])
    }
    for (var i = 3; i < deck.length; i+=nbPlayer) {
      player4.push(deck[i])
    }
  }
}

console.log(deck)
deckShuffle()
console.log(deck)
distribute()
console.log(player1Deck,player2Deck,player3Deck,player4Deck)
