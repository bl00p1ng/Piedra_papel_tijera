var optionUser = document.getElementById('optionUser');
var optionJs = document.getElementById('optionJs');
var result = document.getElementById('result');

function game() {
  // var user = prompt('Elige una opción \n 1 --> Piedra \n 2 --> Papel \n 3 --> Tigera');

  if (Piedra.checked == true) {
    optionUser.innerHTML = '<p>Elegiste Piedra</p>';
  } else if (Papel.checked == true) {
    optionUser.innerHTML = '<p>Elegiste Papel</p>';
  } else if (Tijera.checked == true) {
    optionUser.innerHTML = '<p>Elegiste Tigera</p>';
  } else {
    optionUser.innerHTML = '<p>Elegiste una opción incorrecta</p>';
  }


  var minOption = 1;
  var maxOption = 3;

  var js = Math.round(Math.random() * (maxOption - minOption + 1)) + minOption;

    if (js == 1) {
      optionJs.innerHTML = '<p>JavaScript eligio Piedra</p>';
    } else if (js == 2) {
        optionJs.innerHTML = '<p>JavaScript eligio Papel</p>';
    } else if (js == 3) {
        optionJs.innerHTML = '<p>JavaScript eligio Tigera</p>';
    }

    if (Piedra.checked == true && js == 1) {
      result.innerHTML = '<p>Empate</p>';
    } else if (Piedra.checked == true && js == 2) {
        result.innerHTML = '<p>Perdiste</p>';
    } else if (Piedra.checked == true && js == 3) {
        result.innerHTML = '<p>Ganaste</p>';
    } else if (Papel.checked == true && js == 1) {
        result.innerHTML = '<p>Ganaste</p>';
    } else if (Papel.checked == true && js == 2) {
        result.innerHTML = '<p>Empate</p>';
    } else if (Papel.checked == true && js == 3) {
        result.innerHTML = '<p>Perdiste</p>';
    } else if (Tijera.checked == true && js == 1) {
        result.innerHTML = '<p>Perdiste</p>';
    } else if (Tijera.checked == true && js == 1) {
        result.innerHTML = '<p>Perdiste</p>';
    } else if (Tijera.checked == true && js == 2) {
        result.innerHTML = '<p>Ganaste</p>';
    } else if (Tijera.checked == true && js == 3) {
        result.innerHTML = '<p>Empate</p>';
    }
  }

function restart() {
  optionUser.innerHTML ="";
  optionJs.innerHTML ="";
  result.innerHTML ="";
}
