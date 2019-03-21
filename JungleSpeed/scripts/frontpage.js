let nbPlayersButtons = document.querySelectorAll(".playercount li")
let overlay = document.querySelector(".overlayBeginning")
let nbPlayers

// 18*4 (72) cartes normales + 12 cartes spéciales
let initialDeck = [], distributedDeck = new Array(4)
let colors = ["yellow", "green", "blue", "red"]
let shapes = [] // TODO: a nommer
for (var i = 0; i < 18; i++) { // temporaire, le temps de nommer les formes
  shapes.push("shape"+(i+1))
}

nbPlayersButtons.forEach((e, index) => {
  e.addEventListener('click',() => {
    overlay.classList.add("displayHide")
    nbPlayers = index+2
    deckGen()
    deckShuffle(initialDeck)
    distributedDeck = deckDistribution(initialDeck, nbPlayers)
    // FONCTION DISTRIBUTE DE EYTHAN
  })
})
