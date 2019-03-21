let nbPlayersButtons = document.querySelectorAll(".playercount li")
let overlay = document.querySelector(".overlayBeginning")
let nbPlayers

nbPlayersButtons.forEach((e, index) => {
  e.addEventListener('click',() => {
    overlay.classList.add("displayHide")
    nbPlayers = index+2
    // deckShuffle(deck)
    // deckDistribution(deck, nbPlayers)
  })
})
