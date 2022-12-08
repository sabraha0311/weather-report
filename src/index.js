'use strict';

function incrementButton() {
  const element = document.getElementById('counter');
  let value = element.innerHTML;

  value++;

  temperatureColor(value);
  landscapeIcons(value);

  document.getElementById('counter').innerHTML = value;
}

function decreaseButton() {
  const element = document.getElementById('counter');
  let value = element.innerHTML;

  value--;

  temperatureColor(value);
  landscapeIcons(value);

  document.getElementById('counter').innerHTML = value;
}

function temperatureColor(temp) {
  let element = document.getElementById('counter');
  if (temp >= 80) {
    element.className = 'red';
  } else if (temp >= 70 && temp <= 79) {
    element.className = 'orange';
  } else if (temp >= 60 && temp <= 69) {
    element.className = 'yellow';
  } else if (temp >= 50 && temp <= 59) {
    element.className = 'green';
  } else if (temp <= 49) {
    element.className = 'teal';
  }
}

function landscapeIcons(temp) {
  let emoji = document.getElementById('emojis');
  if (temp >= 80) {
    emoji.innerText = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temp >= 70 && temp <= 79) {
    emoji.innerText = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temp >= 60 && temp <= 69) {
    emoji.innerText = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temp <= 59) {
    emoji.innerText = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
}

// const input = document.querySelector('city-input');
// const log = document.getElementById('City-Name-Top');

// input.addEventListener('city-input', cityNameInput);

// function cityNameInput(e) {
//   log.textContent = e.target.value;
// }
