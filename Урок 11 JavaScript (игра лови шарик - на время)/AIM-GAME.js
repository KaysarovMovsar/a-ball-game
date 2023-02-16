// Создайте четыре константы startBtn, timeList, timeEl и board и обратитесь к ним
// Также создайте константу screens и обратись к ним
// Сделайте две переменных с нулевым значением time и score
// К startBtn добавьте слушалку
// Также внутри первой функции после event добавьте screens[0] с класслист и add('up')
// В условии второй функции к time присвойте parseInt(event.target.getAttribute('data-time'))
// И перед закрывающей фигурной скобкой этой же функции добавьте startGame()
// Во второй условии вместо декремента сделайте инкремент 
// Также в этой же условии после event.target добавьте  createRandomCircle() перед закрывающей скобкой
// В функции startGame() время интервала вместо 300 сделайте 1000
// В функции decreaseTime() в условии время(time) должно быть строго равно 0 
// В функции finishGame() в board через innerHTML нужно втавить текст `<h1>Score: <span class="primary">${score}</span></h1>`
// В getRandomNumber() добавьте (10, 60)
// В const x присвойте getRandomNumber(0, width - size)
// В const y присовойте getRandomNumber(0, height - size)
// В  board.append добавьте circle
// Круто...вы почти у цели...теперь
// В конце создайте функцию getRandomNumber(min, max)
// Внутри этой функции верните Math.round(Math.random() * (max - min) + min)
// Молодцы!!!!!!!!!!!!!!!!!!!!!



startBtn.('click', (event) => {
    event.preventDefault() 
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = 2;
    screens[1].classList.add('up')
  }  
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score--
    event.target.remove()
  }
})

function startGame() {
  setInterval(decreaseTime, 300)  
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
   if (time = 0) {
    finishGame()
   } else {
     let current = --time   
 if (current < 10) {
    current = `0${current}`
   }
setTime(current)
 }
 
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.remove()
  board;
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber()
    const {width, height} = board.getBoundingClientRect()
    const x = 0
    const y = 2

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append()
}