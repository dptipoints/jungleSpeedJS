function deckGen() {
  for (color of colors) {
    for (shape of shapes) {
      let internalArray = []
      internalArray.push(shape, color)
      internalArray.push("Cards/"+shape+"/"+shape+color+".png")
      // internalArray.push(file) peut etre je sais pas
      deck.push(internalArray)
    }
  }
  for (var i = 0; i < 4; i++) {
    for (var x = 0; x < 3; x++) {
      deck.push(special[x])
    }
  }
  return deck
}

function deckShuffle(deck) { // c'est du gros vol (Fisher-Yates shuffle)
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap elements
  }
  return deck;
}
function deckDistribution(deck, nb_players){ // on obtient une liste de longueur nb_players contenant le deck divisé entre ces joueurs (précedemment mélangé)
  let allPlayerDecks = [], cardsLeft, count
  for (var i = 0; i < nb_players; i++) {
    let playerDeck = []
    let cardsLeft = deck.length - (parseInt(deck.length/nb_players))*nb_players
    // eg : pour un deck de 80 cartes avec 3 joueurs
    // 80 - (26*3) = 2
    for (var x = i*parseInt((deck.length/nb_players)); x < ((i+1)*parseInt((deck.length/nb_players))); x++) {
      playerDeck.push(deck[x])
    }
    allPlayerDecks.push(playerDeck)
  }
  count = 0
  // gestion des cartes restantes
  for (var i = deck.length; i > deck.length-cardsLeft; i--) {
    allPlayerDecks[count].push(deck[i-1])
    count++
  }
  return allPlayerDecks
}

function play(i){
  playDelay = false
  deckPlayed[i].push(deck[i][deck[i].length-1])
  deck[i].pop()
  // AFFICHER LA DERNIERE CARTE DE PLAYER1PLAYED
  setTimeout(function(){
    playDelay = true
  },2000)
  // $(".playerCards:nth-child(i+1)").backroundImage = deck[i][deck[i].length-1][2]
  // on recupère le nom du fichier de la carte à appliquer
  // marche pas pour l'instant
}

function visualDeckCreation() {
  let parentDiv = document.querySelector(".playerCards")
  for (var i = 0; i < nbPlayers; i++) {
    let playerCardsDiv = document.createElement("div")
    playerCardsDiv.classList.add("cards")
    parentDiv.appendChild(playerCardsDiv)
  }
}

function keyBindsSetup() {
  let count = 1
  if (overlay.classList.contains("displayHide") && !overlay2.classList.contains("displayHide")) {
    window.addEventListener("keydown", e => {
      if (count<=nbPlayers && !keyBinds.includes(e.key)) {
        keyBinds.push(e.key), count++
        $(".overlay2text").text("ENTREZ LA TOUCHE POUR LE JOUEUR "+count)
      }
      if (count > nbPlayers) {
        overlay2.classList.add("displayHide")
      }
    })
  }
}
