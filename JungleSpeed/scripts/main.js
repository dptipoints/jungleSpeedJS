let nbPlayersButtons = document.querySelectorAll(".playercount li")
let overlay = document.querySelector(".overlayBeginning")
let overlay2 = document.querySelector(".overlay2")
let nbPlayers, deck = [], deckPlayed = [[], [], [], []], keyBinds = []

// 18*4 (72) cartes normales + 12 cartes spéciales
let colors = ["yellow", "green", "blue", "red"]
let shapes = ["circleCross","circleCrossCut","circleCrossIn","circleCrossOut","circlesSquare","emptyCircle","fullCircle","octogonsCircle","octogonsSquare","squaresCircle","star","starBig","starSpike","starSquare","string","stringClose","stringLong","stringShort"]
let special = ["specialColor", "specialTogether", "specialGrab"]

let lastPlayerPlayed = "undefined"
let playDelay = true

nbPlayersButtons.forEach((e, index) => {
  e.addEventListener('click',() => {
    overlay.classList.add("displayHide")
    nbPlayers = index+2
    deckGen()
    deckShuffle(deck)
    deck = deckDistribution(deck, nbPlayers)
    // visualDeckCreation()
    keyBindsSetup()
  })
})



// TODO: REFACTOR QUAND LES JOUEURS JOUENT ET UTILISER LES KEYBINDS DE LA LISTE KEYBINDS

// PLAY PLAYER 1

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyQ" && playDelay == true){
        if(nbPlayers == 2){
          if (lastPlayerPlayed == "player2" || lastPlayerPlayed == "undefined") {
            play(0)
            lastPlayerPlayed = "player1"
          }
        }
        if (nbPlayers == 3) {
          if (lastPlayerPlayed == "player3" || lastPlayerPlayed == "undefined") {
            play(0)
            lastPlayerPlayed = "player1"
          }
        }
        if (nbPlayers == 4) {
          if (lastPlayerPlayed == "player4" || lastPlayerPlayed == "undefined") {
            play(0)
            lastPlayerPlayed = "player1"
          }
        }
      }
    })

// PLAY PLAYER 2

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyW" && playDelay == true){
        if (lastPlayerPlayed == "player1") {
          play(1)
          lastPlayerPlayed = "player2"
        }
      }
    })

// PLAY PLAYER 3

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyE" && playDelay == true){
        if (nbPlayers == 3) {
          if (lastPlayerPlayed == "player2") {
            play(2)
            lastPlayerPlayed = "player3"
          }
        }
        if (nbPlayers == 4) {
          if (lastPlayerPlayed == "player2") {
            play(2)
            lastPlayerPlayed = "player3"
          }
        }
      }
    })

// PLAY PLAYER 4

window.addEventListener('keydown', (e) => {
      if(e.code == "KeyR" && playDelay == true){
        if (nbPlayers == 4) {
          if (lastPlayerPlayed == "player3") {
            play(3)
            lastPlayerPlayed = "player4"
          }
        }
      }
    })
