let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let player1Deck = [], player2Deck = [], player3Deck = [], player4Deck = []
let player1Played = [], player2Played = [], player3Played = [], player4Played = []
let deckList = []
let deckListPlayed = []

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
  deckList = [player1Deck, player2Deck, player3Deck, player4Deck]
  deckListPlayed = [player1Played, player2Played, player3Played, player4Played]
}

function play(i){
  deckListPlayed[i].push(deckList[i][deckList[i].length-1])
  deckList[i].pop()
  // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
}
