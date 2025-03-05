# Project related to dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ugvtmh?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# solutions

## project 1- color changer

```javascript
const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(b){
  b.addEventListener('click',function(e){
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id

    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id

    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
      
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
      
    }
  })
})

```

## project 2- BMI Generator
```javascript
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  // bcoz value string me milegi and we have to parse it to integer
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')

  if(height=='' || height<0 || isNaN(height)){
    result.innerHTML="Please enter valid height"
  }
  else if(weight=='' || weight<0 || isNaN(weight)){
    result.innerHTML="Please enter valid weight"
  }
  else{
    const bmi=(weight/ ((height*height)/10000)).toFixed(2)
    if(bmi<=18.6){
      results.innerHTML=`Your BMI is ${bmi} and you are Under Weight`

    }
    else if(bmi>18.6 && bmi<=24.9){
      results.innerHTML=`Your BMI is ${bmi} and you are Normal Range`
      
    }
    else{
      results.innerHTML=`Your BMI is ${bmi} and you are Over Weight`

    }
    
  }
})
```

## project3 - digital clock
```javascript
const clock=document.querySelector('#clock')

setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)

```

## projext4 - guessing
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

let submit = document.querySelector('#subt');
let input = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Enter a valid Number`);
  } else if (guess < 0 || guess > 101) {
    alert(`Enter a number between 1-100`);
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`You have guessed the random number ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`you guessed it right ${randomNumber} `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`your guess is too low`);
  } else {
    displayMessage(`your guess is too high`);
  }
}

function displayGuess(guess) {
  input.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    input.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```
### project 5- key press
```javascript
console.log('Project 5');
const insert = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
  </div>`;
}); 


```
### project 6 - Unlimited background changing
```javascript
const randomColor=function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let interval;
const startChangingColor=function(){
  // clean code ke liye if case use kiya he
  if(!interval){
    interval=setInterval(changeBackgroundColor,1000)
  }
  
  function changeBackgroundColor(){
    document.body.style.backgroundColor=randomColor();
  }
}
const stopChangingColor=function(){
  clearInterval(interval)
  interval=null; // good way to write code
  // cleaning up variable , memmory 
}

const start=document.querySelector('#start').addEventListener('click', startChangingColor)

const stop=document.querySelector('#stop').addEventListener('click', stopChangingColor)


```