let wordsList = ['long', 'arrow', 'java', 'train', 'other', 'test', 'milk', 'head'];
const inputText = document.querySelector('.inputText');
renderList()
inputText.addEventListener('input', getWord);
function renderList() {
    for (let i = 0; i < wordsList.length; i++) {
        const word = document.createElement('span');
        word.classList.add('wordOfList');
        word.textContent = wordsList[i] + ' ';
        document.querySelector('.wordList').append(word);
    }
    inputText.focus()
}

function getWord() {
    const word = document.querySelector('.wordOfList');
    if (!word) {
        renderList();
    }
    checkWord(word)
}

function checkWord(word) {
    const value = inputText.value;
   
    if (word.textContent === value) {
        inputText.value = '';
        word.classList.add('done');
        word.classList.remove('wordOfList');
    }
    if (word.textContent !== value && value.length > word.textContent.length ||
        (value.includes(' ') && value.length !== word.textContent.length)) {

        inputText.value = '';
        word.classList.add('wrong');
        word.classList.remove('wordOfList')
    }
}





















    // OLD VERSION
    
// let counter = 0;

// function renderNextWord() {
//     if (document.querySelector('.nextWord')) {
//         document.querySelector('.nextWord').remove()
//     }
//     const nextWord = document.createElement('span');
//     nextWord.classList.add('nextWord')
//     nextWord.textContent = wordsList[counter + 1];
//     document.querySelector('.wordList').append(nextWord);
// }

// function renderWord() {
//     renderNextWord()
//     let addSpace = document.createElement('span');
//     addSpace.textContent = ' '
//     for (let char of wordsList[counter]) {
//         let symbol = document.createElement('span');

//         symbol.textContent = char;
//         document.querySelector('.word').append(symbol);
//     }
//     document.querySelector('.word').append(addSpace);
//     counter++;
// }
// renderWord();

// function checkChar(e) {
//     const chars = document.querySelectorAll('.word span');
//     let value = inputText.value;

//     for (let i = 0; i < chars.length; i++) {
//         if (inputText.value.length === chars.length) {
//             inputText.value = '';
//             chars.forEach(char => {
//                 char.remove();
//             });
//             renderWord();
//             return;
//         }
//         chars.forEach(char => char.classList.remove('active'));
//         let activeChar = value.length;

//         chars[activeChar].classList.add('active');

//         if (i > value.length) {
//             chars[i].style.color = 'black';
//         } else {
//             chars[i].style.color = '';
//         }
//         if (chars[i].textContent === value[i]) {
//             addDone(chars[i]);
//         } else {
//             addWrong(chars[i]);
//         }
//     }
// }

// inputText.addEventListener('input', checkChar);

// function addDone(char) {
//     char.classList.remove('normal');
//     char.classList.remove('wrong');
//     char.classList.add('done');
// }

// function addWrong(char) {
//     char.classList.remove('normal');
//     char.classList.remove('done');
//     char.classList.add('wrong');
// }

// function checkPressKey(e) {
//     let pressedKey = '';
//     pressedKey = e.code;
//     keys.forEach(key => {
//         if (pressedKey === key.dataset.key) {
//             key.style.transform = 'scale(1.2)';
//             setTimeout(() => {
//                 key.style.transform = '';
//             }, 100);
//         }
//     });

// }

// window.addEventListener('keyup', checkPressKey);
