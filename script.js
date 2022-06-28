let startingBackground = 'background-color:' + randomColor();

createBoard(42);
createGrid(42);
activateItems();


function createBoard(side){
    let newBoard = document.createElement("div");
    let gridStyle = 'grid-template-columns: repeat(' + side + ', 1fr);grid-template-rows: repeat(' + side + ',1fr);';
    newBoard.classList.add("board");
    newBoard.style = gridStyle;
    document.body.appendChild(newBoard);
    
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



function activateItems(){
    let gridItem;
    gridItem = document.querySelectorAll("div.grid-item");
    gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = drawColor();
  }));
};

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
function drawColor(){
  let random = document.getElementById("random").checked;
  if (random === true){
    return randomColor();
  } else return currentColor;
}