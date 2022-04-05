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

// Selezione livello di difficoltà e generazione griglia in un input select
let selectInput = document.getElementById("selection");

// Griglia di gioco
let cells = document.querySelector(".cells");

// Bottone per iniziare la partita
let playButton = document.getElementById("btn");

// Funzione per generare numeri casuali
function generateRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per inizializzare la griglia di gioco
const initialize = () => {
  if (selectInput.value === "seleziona") {
    cells.innerHTML = ""; // Cancello la griglia di gioco
    alert("Selezionare un livello di difficoltà"); //avviso l'utente
  } else if (selectInput.value === "facile") {
    // Se l'utente ha selezionato il lvl facile
    cells.innerHTML = "";
    // Genero una griglia di gioco con 50 celle
    for (let i = 0; i < 50; i++) {
      // Genero una griglia di gioco con 49 celle
      const randomNumber = generateRandomNumbers(1, 50);
      let cell = document.createElement("div");
      cell.innerHTML = randomNumber;
      // Assegno la classe cell alla cella
      cell.classList.add("cell");

      // Funzione per colorare le caselle al click
      cell.addEventListener("click", ()=> {
        // Assegno un evento click alla cella
        cell.classList.add("selected"); // Seleziono la cella
      });
      // Aggiungo la cella alla griglia di gioco
      cells.append(cell);
    }
  } else if (selectInput.value === "medio") {
    cells.innerHTML = "";
    for (let i = 0; i < 80; i++) {
      const randomNumber = generateRandomNumbers(1, 80);
      let cell = document.createElement("div");
      cell.innerHTML = randomNumber;
      cell.classList.add("cell");
      cell.addEventListener("click", ()=> {
        cell.classList.add("selected");
      });
      cells.append(cell);
    }
  } else if (selectInput.value === "difficile") {
    cells.innerHTML = "";
    for (let i = 0; i < 100; i++) {
      const randomNumber = generateRandomNumbers(1, 100);
      let cell = document.createElement("div");
      cell.innerHTML = randomNumber;
      cell.classList.add('cell');
      cell.addEventListener('click', ()=> {
          cell.classList.add('selected');
      });
      cells.append(cell);

    }
  }
};

// Assegno un evento click al bottone per iniziare la partita
playButton.addEventListener("click", initialize);
