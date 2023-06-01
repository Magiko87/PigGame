'use strict';

//====>Seleziona elementi :
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//====>Pongo alle variabili delle selezioni un valore :
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playining = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");

};

//====>Funzione tiro dei dadi :
btnRoll.addEventListener('click', function () {
    if(playining) {
        //1-Generare random tiro dadi
  const dice = Math.trunc(Math.random() * 6) + 1;

  ///---> 2-Display dadi
  diceEL.classList.remove('hidden');
  diceEL.src = `./Image/dice-${dice}.png`;

  //---> 3-Controllare se il dado è 1:se non è,
  if (dice !== 1) {
    //aggiungi il valore dei dadi alla variabile del punteggio corrente(currentScore=currentScore+dice),
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //altrimenti cambia giocatore riportando il current a 0,e attiva il cambio giocatore(toggle).
    switchPlayer();
    
  }

    }
  
});
//====>Funzione tasto hold :
btnHold.addEventListener("click", function () {
    if(playining) { 
        //----> 1-Aggiungi punteggio corrente  al punteggio totale (scores[1]+=currentScore) del giocatore attico(activePlayer).
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
         
        //---> 2-Controlla : se il punteggio del giocatore è >= 100 :
           //fine gioco,
        
          if (scores[activePlayer] >= 100) {
            //fine gioco, 
            playining = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
          }else{
              // altrimenti cambia giocatore e resetta il punteggio corrente dopo aver cambiato giocatore.
              switchPlayer();
             
          }

    }
    
  });

      



     
