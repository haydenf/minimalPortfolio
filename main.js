
function darkMode() {
  const element = document.body;
  element.classList.toggle('darkMode');
  animateCircle();
}
function lightMode() {
  const element = document.body;
  element.classList.toggle('body');
  animateCircle();
}
function animateCircle() {
  anime({
    targets: '.circle',
    rotateZ: 180,
    duration: 500,
    easing: 'easeInOutSine',
    direction: 'alternate',
  });
}

function button() {
  const element = document.body;
  if (element === 'darkMode') {
    lightMode();
  } else {
    darkMode();
  }
}
