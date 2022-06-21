import rgbKeyboard from '../js/modules/rgbkeyboard.js'
rgbKeyboard()
let wordsList = ['he', 'arrow', 'begin', 'train', 'other', 'they', 'have', 'head', 'picture', 'work', 'round', 'every', 'help', 'under',
    'cause', 'milk', 'when', 'about', 'thing', 'number', 'most', 'people', 'over', 'find', 'stand', 'own', 'should', 'answer', 'school', 'between',
    'story', 'draw', 'far', 'left', 'press', 'close', 'real', 'life', 'carry', 'stop', 'base', 'watch', 'face', 'scream', 'paper', 'car',
    'eye', 'cross', 'milk', 'head'];

const inputText = document.querySelector('.inputText');
renderList(wordsList)
let started = false;
let doneCounter = 0;
inputText.addEventListener('input', startGame);

function startGame() {
    if(!started){
        let time = document.querySelector('.timer__window');
        started = true;
        let updateTimer = setInterval(()=> {
            time.textContent -=1;
        },1000);

        let timer = setTimeout(()=> {
            console.log(`Ваш результат ${doneCounter} слов в минуту`)
            clearInterval(updateTimer);
            started = false;
            time.textContent = '60';
        },3000)
    }
  
    getWord();
}


function renderList(list) {
    list.sort(makeRandomArr);
    for (let i = 0; i < list.length; i++) {
        const word = document.createElement('span');
        word.classList.add('wordOfList');
        word.textContent = list[i] + ' ';
        document.querySelector('.word__track').append(word);
    }
    inputText.focus();
}

function getWord() {
    const word = document.querySelector('.wordOfList');

    checkWord(word);
}

function checkWord(word) {
    const value = inputText.value;
    if (word.textContent === value) {
        setResult(word, 'done');
        doneCounter++;
        // увеличим коунтер
    }
    if (word.textContent !== value && value.length > word.textContent.length ||      //Поправить
        (value.includes(' ') && value.length !== word.textContent.length)) {
        setResult(word, 'wrong');
    }
    let wordDistanceToTop = word.getBoundingClientRect().top;
    let viewWindowToTop = document.querySelector('.wordList').getBoundingClientRect().top + 2;
    if (wordDistanceToTop > viewWindowToTop) {
        moveTrack();
    }
}

function setResult(word, result) {
    inputText.value = '';
    word.classList.add(result);
    word.classList.remove('wordOfList');
}

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
}


function moveTrack() {
    const track = document.querySelector('.word__track');
    track.style.transform += "translateY(-50px)";
}












