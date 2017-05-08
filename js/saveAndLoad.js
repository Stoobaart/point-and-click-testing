$(document).ready(function () { 
  var load = $('#load');

  $('#save').click(function() {
    saveGame()
  })

  $('#load').click(function() {
    loadGame()
  })

  function saveGame() {
    localStorage.items = JSON.stringify(items);
  }

  function loadGame() {
    items = JSON.parse(localStorage.items);
    setTimeout(function() {
      console.log(items)
      updateInventory()
    }, 50)
  }

});