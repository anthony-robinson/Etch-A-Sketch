
//selects grid
const grid = document.querySelector('#grid');
const btn = document.querySelector('#reset');
const boardbtn = document.querySelector('#newboard');

var node;
//sets up grid board, creates n**2 div elements and assigns node var, id
//and class for css manipulation.
//set background color of node
function setGrid(n){
  grid.style.gridTemplateRows = `repeat(${n},1fr)`;
  grid.style.gridTemplateColumns = `repeat(${n},1fr)`;
  grid.style.gridAutoRows = '1fr';
  for(var i = 0; i < Math.pow(n,2); i++){
    node = document.createElement('div');
    node.classList.add('item');
    node.classList.add('pixel');
    node.style.background = "#e7e7e7";
    grid.appendChild(node);
  }
}

function setPixelArray(){
  var pixels = document.querySelectorAll('.pixel')
  let pixelsArray = Array.from(pixels);
  return pixelsArray;
}

//makes nodes black on mouse hover;
function sketch(){
  var p = setPixelArray();
  for(var i = 0; i < p.length; i++){
    p[i].addEventListener('mouseover', function(e){
      event.target.style.background = 'black';
    });
  }
}

//resets the grid;
function reset(){
  var p = setPixelArray();
  for(var i = 0; i < p.length; i++){
    p[i].style.background = "#e7e7e7";
  };
}

//clears grid
function clear(){
  var p = setPixelArray();
  for(var i = 0; i < p.length; i++){
    p[i].remove();
  }
}

//ask user for new grid and resizes grid
function newGrid(){
  var grid_size = prompt("Choose a number N between 1 and 100 to create an N X N grid.");
  if(grid_size !== null){
    clear();
    setGrid(grid_size);
    sketch();
  }
}



setGrid(16);
sketch();
btn.addEventListener('click',reset);
boardbtn.addEventListener('click',newGrid);
