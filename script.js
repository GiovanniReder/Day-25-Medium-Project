window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navbar = document.getElementById("navbar");
  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;
  const button = document.getElementById("btn");

  if (scrollPosition > headerHeight) {
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "green";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});

/* mettere le M in un array e mostrarlo nell'header
  math random seleziona a caso una delle m nell'array
  infine gli applico un opacity a 0*/

const arrayOfM = [];
const M = "M";
let pElement = document.getElementById("m-array");
for (let i = 0; i < 200; i++) {
  let spanElement = document.createElement("span");
  spanElement.textContent = "M";
  pElement.appendChild(spanElement);

  arrayOfM.push("M");
}

console.log(arrayOfM);

const p = document.getElementById("m-array");
p.innerHTML = arrayOfM.join(" ");

console.log(p);

function setOpacity(element, opacity, index) {
  element.style.opacity = opacity;
  element.innerHTML.charAt[index];
  element.style.transionDuration = "500ms";
}

function randomOpacity() {
  const randomIndex = Math.floor(Math.random() * arrayOfM.length);
  const M = document.getElementsByClassName("m-array");

  setOpacity(mArray, 0.5, randomIndex);
}

setInterval(randomOpacity, 500);
