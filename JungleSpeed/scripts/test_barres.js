
let barToFill = document.querySelector('.bar_to_fill')
let barText = document.querySelector(".bar_container p")
let fillPercent = 0, barDecreaseVar, didItRun = false


window.addEventListener('keyup', (e) => {
  if (e.keyCode == "32") {
    if (!didItRun) {
      barDecreaseVar = setInterval(() => {
        if (fillPercent>0) {
          fillPercent-=2
        }
        barToFill.style.width = fillPercent + "%"
      }, 50)
      didItRun = true
    }
    if (fillPercent<100) {
      fillPercent += 10
    }
    if (fillPercent >= 100) {
      fillPercent == 100
      clearInterval(barDecreaseVar)
      if (barText.classList.contains("hidden")) {
        barText.classList.remove("hidden")
      }
    }
    barToFill.style.width = fillPercent + "%"
  }
})
