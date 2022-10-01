

const newLetter = 'G'

var elementLetters = document.getElementById('container-letters')


document.addEventListener('keydown',pressKey)

function pressKey(ev) {
  const newLetter = ev.key
  addLetter(newLetter);
}

function addLetter(newLetter){
  let newElement = document.createElement('p')
  newElement.classList.add('letter')
  newElement.innerHTML = newLetter.toUpperCase()

  elementLetters.append(newElement)
}