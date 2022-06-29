let startingBackground = 'background-color:' + randomColor();

createBoard(42);
createGrid(42);
activateItems();


function createBoard(side){
    const wrapper = document.querySelector('.aspectwrapper');
    let newBoard = document.createElement("div");
    let gridStyle = 'grid-template-columns: repeat(' + side + ', 1fr);grid-template-rows: repeat(' + side + ',1fr);';
    newBoard.classList.add("board");
    newBoard.style = gridStyle;
    wrapper.appendChild(newBoard);
    
}

function createGrid(side){
    const board = document.querySelector('.board');
    const number = side * side;
    for(i=0;i<number;i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    newDiv.style = startingBackground;
    board.appendChild(newDiv);
    }
}

function removeBoard(){
    let board = document.querySelector(".board");
    board.remove();
}

let slider = document.getElementById("boardSize");
let output = document.getElementById("sideDisplay");


slider.oninput = function() {
  output.innerText = this.value;
    removeBoard();
    createBoard(this.value);
    createGrid(this.value);
    activateItems();
}


let clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', event => {
    clearBoard();
});

function clearBoard(){
  sideNum = output.innerText;
  removeBoard();
  createBoard(sideNum);
  createGrid(sideNum);
  activateItems();
}

let randomizeBtn = document.getElementById("randomize");
randomizeBtn.addEventListener('click', event => {
  currentColor = randomColor();
  startingBackground = 'background-color:' + randomColor();
  clearBoard();
});

function clearBoard(){
  sideNum = output.innerText;
  removeBoard();
  createBoard(sideNum);
  createGrid(sideNum);
  activateItems();
}


function drawColor (event) {
  event.target.style.backgroundColor = brushColor();
}

function touchDrawColor (target) {
  target.style.backgroundColor = brushColor();
}

function activateItems(){
    let gridItem;
    gridItem = document.querySelectorAll("div.grid-item");
    gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', drawColor));
    gridItem.forEach(gridItem => gridItem.addEventListener('touchstart', paintTouch));
    gridItem.forEach(gridItem => gridItem.addEventListener('touchmove', paintTouch));
    gridItem.forEach(gridItem => gridItem.addEventListener('touchend', paintTouch));
};

function paintTouch(e) {

  let myLocation = e.changedTouches[0];
  let realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
  if(
    realTarget.classList.contains('grid-item')
  ){touchDrawColor(realTarget)};

}

function randomColor(){
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

let currentColor = randomColor();

function randomize() {
  currentColor = randomColor()

}
function brushColor(){
  let random = document.getElementById("random").checked;
  if (random === true){
    return randomColor();
  } else return currentColor;
}