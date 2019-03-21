let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let player1 = new Array()
let player2 = new Array()
let player3 = new Array()
let player4 = new Array()

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
distribute(4)
console.log(player1,player2,player3,player4)
