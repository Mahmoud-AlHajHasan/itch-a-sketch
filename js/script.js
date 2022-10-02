
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
      lineInnerDiv.addEventListener(`mouseenter`, changeBackground);

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


function changeBackground() {
  let randomR = randomIntFromInterval(1, 100) * 2.55
  let randomG = randomIntFromInterval(1, 100) * 2.55
  let randomB = randomIntFromInterval(1, 100) * 2.55
  rgb = `rgb(${randomR},${randomG},${randomB})`
  this.style.cssText = `background-color : ${rgb};
                        flex :1`
  console.log(`lol${this}`)
}


