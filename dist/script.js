(() => {
  'use strict'
  console.log('test')
  function update (cell) {
    console.log(cell)
    fetch(`http://localhost:3000/api/update/${cell}`)
      .then((res) => {
        return res.json()
      })
      .then((gs) => {
        getState(gs.gameState)
      })
  }
  function getState (gameState) {
    let winner = document.getElementById('game-messages')
    let playerOneScore = document.getElementById('player-one-score')
    let PlayerTwoScore = document.getElementById('player-two-score')

    switch(gameState.winner) {
      case 'X':
        winner.className = 'player-X-win'
        break
      case 'O':
        winner.className = 'player-O-win'
        break
      case 'T':
        winner.className = 'draw'
        break
      default:
        winner.className = ''
    }
    let curPlayer = document.getElementById('whos-turn')
    curPlayer.className = gameState.currentPlayer
    let grid = gameState.grid
    grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        document.querySelectorAll(`[data-pos="${y},${x}"]`)[0].innerText = cell
      })
    })
  }
  let cells = document.querySelectorAll('li')
  cells.forEach(cell => {
    let pos = cell.dataset.pos
    console.log(pos)
    cell.addEventListener('click', (e) => { update(e.target.dataset.pos) })
  })
  fetch('http://localhost:3000/api/state')
    .then((res) => {
      return res.json()
    })
    .then((gs) => {
      getState(gs.gameState)
    })
})()
