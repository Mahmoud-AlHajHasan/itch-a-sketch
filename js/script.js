
let body = document.querySelector(`body`)
body.style.cssText = `display : flex;
                      aspect-ratio: 1 / 1 ;
                      height: 480px;
                      flex-direction : column;
                      border : solid 3px sienna;
                      border-radius : 10px;`

createBtn = document.querySelector(`#createBtn`)
createBtn.addEventListener(`click`, createGrid)

function createGrid() {
  removeOlder()
  inputCoordinates()
  createYyAxis()
  createXxAxis()
}

function removeOlder() {
  let lines = document.querySelectorAll(`.removableLine`)
  lines.forEach(
    line => body.removeChild(line)
  )
}

function createYyAxis() {
  for (i = 0; i < y; i++) {
    let line = document.createElement(`div`)
    line.classList.add(`removableLine`)
    body.appendChild(line)
    line.style.cssText = `display : flex;
                          flex:1;`
  }
}

function createXxAxis() {
  let lines = document.querySelectorAll(`div`)
  lines.forEach((line) => {
    for (i = 0; i < x; i++) {
      lineInnerDiv = document.createElement(`div`);
      lineInnerDiv.classList.add(`removableInnerDiv`);
      lineInnerDiv.style.cssText = `flex :1;`;
      line.appendChild(lineInnerDiv);
      lineInnerDiv.addEventListener(`mouseenter`, changeBackground, {once:true});


    }
  })
}

function inputCoordinates() {
  y = +prompt(`Height of Canvas :`)
  x = +prompt(`Width of Canvas :`)
  if (y > 100) {
    y = 100
  } else if (y < 1) {
    y = 4
  }

  if (x > 100) {
    x = 100
  } else if (x < 1) {
    x = 4
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let randomR = 200
let randomG = 200
let randomB = 200

function changeBackground(e) {
  rgb = `rgb(${randomR},${randomG},${randomB})`
  this.style.cssText = `background-color : ${rgb};
                        flex :1`
  this.addEventListener(`mouseenter`, darken);
}

function darken(e) {
  let rr =   rgbToArray(e.target.style.backgroundColor)[0] - 10
  let bb =   rgbToArray(e.target.style.backgroundColor)[1] - 10
  let gg =   rgbToArray(e.target.style.backgroundColor)[2] - 10

  rgb = `rgb(${rr},${gg},${bb})`
  this.style.cssText = `background-color : ${rgb};
                        flex :1`
}

function rgbToArray(rgb){
rgbArray = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');

return rgbArray
}