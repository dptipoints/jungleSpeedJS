let nbPlayersButtons = document.querySelectorAll(".playercount li")
let overlay = document.querySelector(".overlayBeginning")
let overlay2 = document.querySelector(".overlay2")
let nbPlayers, deck = []

// 18*4 (72) cartes normales + 12 cartes spéciales
let colors = ["yellow", "green", "blue", "red"]
let shapes = [] // TODO: a nommer
for (var i = 0; i < 18; i++) { // temporaire, le temps de nommer les formes
  shapes.push("shape"+(i+1))
}

let lastPlayerPlayed = "undefined"
let playDelay = true

let player1Deck = new Array()
let player2Deck = new Array()
let player3Deck = new Array()
let player4Deck = new Array()

let player1Played = new Array()
let player2Played = new Array()
let player3Played = new Array()
let player4Played = new Array()

let deckList = [player1Deck, player2Deck, player3Deck, player4Deck]
let deckListPlayed = [player1Played, player2Played, player3Played, player4Played]

nbPlayersButtons.forEach((e, index) => {
  e.addEventListener('click',() => {
    overlay.classList.add("displayHide")
    nbPlayers = index+2
    playerListCreation(nbPlayers)
    deckGen()
    deckShuffle(deck)
    deck = deckDistribution(deck, nbPlayers)
    visualDeckCreation()
  })
})

// PLAY PLAYER 1

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyQ" && playDelay == true){
        if(nbPlayers == 2){
          if (lastPlayerPlayed == "player2" || lastPlayerPlayed == "undefined") {
            play(0)
            lastPlayerPlayed = "player1"
            console.log(deckList)
            console.log(deckListPlayed)
          }
        }
        if (nbPlayers == 3) {
          if (lastPlayerPlayed == "player3" || lastPlayerPlayed == "undefined") {
            play(0)
            lastPlayerPlayed = "player1"
            console.log(deckList)
            console.log(deckListPlayed)
          }
        }
        if (nbPlayers == 4) {
          if (lastPlayerPlayed == "player4" || lastPlayerPlayed == "undefined") {
            play(0)
            lastPlayerPlayed = "player1"
            console.log(deckList)
            console.log(deckListPlayed)
          }
        }
      }
    }
  )

// PLAY PLAYER 2

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyW" && playDelay == true){
        if (lastPlayerPlayed == "player1") {
          play(1)
          lastPlayerPlayed = "player2"
          console.log(deckList)
          console.log(deckListPlayed)
        }
      }
    }
  )

// PLAY PLAYER 3

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyE" && playDelay == true){
        if (nbPlayers == 3) {
          if (lastPlayerPlayed == "player2") {
            play(2)
            lastPlayerPlayed = "player3"
            console.log(deckList)
            console.log(deckListPlayed)
          }
        }
        if (nbPlayers == 4) {
          if (lastPlayerPlayed == "player2") {
            play(2)
            lastPlayerPlayed = "player3"
            console.log(deckList)
            console.log(deckListPlayed)
          }
        }
      }
    }
  )

// PLAY PLAYER 4

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyR" && playDelay == true){
        if (nbPlayers == 4) {
          if (lastPlayerPlayed == "player3") {
            play(3)
            lastPlayerPlayed = "player4"
            console.log(deckList)
            console.log(deckListPlayed)
          }
        }
      }
    }
  )
