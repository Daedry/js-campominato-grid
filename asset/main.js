/* 
L'utente indica un livello di difficoltà 
in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro
*/

//Creo una funzione per la creazione della struttura delle celle
function generateGrid(selector, cellsNumber, newElement, className) {
  const cellsElement = document.querySelector(selector);

  for (let i = 1; i <= cellsNumber; i++) {
    const cell = document.createElement(newElement);
    cell.classList.add(className);
    cellsElement.append(cell);
  }
}

// console.log(generateGrid('.cells', 100, 'div', 'cell' ));
generateGrid(".cells", 100, "div", "cell");

//Creo una funzione per generare numeri casuali
function randomGroupNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(generateRandomNum(1,100));

//Creo una funzione per legare i numeri randomici e raggrupparli
function generateRandomNumbers(min, max) {
  cellsNum = [];

  while (cellsNum.length < max) {
    const randomNumber = randomGroupNumbers(min, max);
    if (!cellsNum.includes(randomNumber)) {
      cellsNum.push(randomNumber);
    }
  }
  return cellsNum;
}

// console.log(generateRandomNumbers(1, 100));
generateRandomNumbers(1, 100);

//Creo una funzione per mettere i numeri dentro alle celle
function fillCells(selector, min, max) {
  const cells = document.querySelectorAll(selector);
  for (let i = 0; i <= cells.length; i++) {
    const cell = cells[i];
    const gridNum = generateRandomNumbers(min, max);
    cell.innerHTML = `<div>${gridNum[i]}</div>`;
  }
}

fillCells(".cell", 1, 100);


//Creo una funzione per vedere se il numero è pari o dispari
function isEven(number){
    if(number % 2 === 0){
        return true;
    } else {
        return false;
    }
}
