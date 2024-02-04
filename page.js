function getRandomPosition() {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  var buttonWidth = document.getElementById('btn2').offsetWidth;
  var buttonHeight = document.getElementById('btn2').offsetHeight;

  var maxX = windowWidth - buttonWidth;
  var maxY = windowHeight - buttonHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  return { x: randomX, y: randomY };
}

// Fonction pour déplacer le bouton à une position aléatoire
function moveButton() {
  var button = document.getElementById('btn2');
  var newPosition = getRandomPosition();

  button.style.left = newPosition.x + 'px';
  button.style.top = newPosition.y + 'px';
}

// Ajouter un écouteur d'événement au survol du bouton
document.getElementById('btn2').addEventListener('mouseover', moveButton);
