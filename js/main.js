import rgbKeyboard from '../js/modules/rgbkeyboard.js';
import generateWordList from '../js/modules/generateWordList.js';

let wordsList = generateWordList();
let started = false;
let doneCounter = 0;
const popup = document.querySelector('.result__popup ');
const btn = document.querySelector('.popup__result-btn');
const input = document.querySelector('.inputText');


function startGame() {
    
    if (!started) {
        let time = document.querySelector('.timer__window');
        started = true;
        let updateTimer = setInterval(() => {
            time.textContent -= 1;
        }, 1000);

        let timer = setTimeout(() => {
            clearInterval(updateTimer);
            started = false;
            time.textContent = '60';
            showResult();
            input.blur();
        }, 60000);
    }
    getWord();
}
function renderList(list) {
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
    let colorKeyboard = document.querySelector('.keyboard');
    input.value = '';
    
    word.classList.add(result);
    word.classList.remove('wordOfList');

}
function moveTrack() {
  
    const track = document.querySelector('.word__track');
    track.style.transform += "translateY(-42px)";
    
}
function showResult() {
    document.querySelector('.result__place').textContent = doneCounter;
    popup.style.display = 'block';
    btn.focus();
}

btn.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        location.reload();
    }
    
});
input.addEventListener('input', startGame);
rgbKeyboard();
renderList(wordsList);




