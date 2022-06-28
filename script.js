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
    board.appendChild(newDiv);
    }
}

function removeBoard(){
    let board = document.querySelector(".board");
    console.log(board)
    board.remove();
}
createBoard(42)
createGrid(42)

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerText = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerText = this.value;
    removeBoard();
    createBoard(this.value);
    createGrid(this.value);
    activateItems();
}

let gridItem;
activateItems();
function activateItems(){
    gridItem = document.querySelectorAll("div.grid-item");
    gridItem.forEach(gridItem => gridItem.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "orange";;
  }));
};

