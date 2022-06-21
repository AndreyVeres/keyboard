import rgbKeyboard from '../js/modules/rgbkeyboard.js';
import generateWordList from '../js/modules/generateWordList.js';
rgbKeyboard();
let wordsList = generateWordList();
let started = false;
let doneCounter = 0;

const input = document.querySelector('.inputText');
input.addEventListener('input', startGame);
renderList(wordsList)

function startGame() {
    if (!started) {
        let time = document.querySelector('.timer__window');
        started = true;
        let updateTimer = setInterval(() => {
            time.textContent -= 1;
        }, 1000);

        let timer = setTimeout(() => {
            console.log(`Ваш результат ${doneCounter} слов в минуту`);
            clearInterval(updateTimer);
            started = false;
            time.textContent = '60';
        }, 60000)
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
    input.focus();
}

function getWord() {
    const word = document.querySelector('.wordOfList');
    checkWord(word);
}

function checkWord(word) {
    const value = input.value;
    if (word.textContent === value) {
        setResult(word, 'done');
        doneCounter++;
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
    input.value = '';
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












