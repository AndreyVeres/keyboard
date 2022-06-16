let wordsList = ['long', 'back', 'long', 'back', 'long', 'back', 'long', 'back'];



const inputText = document.querySelector('.inputText');
const keys = document.querySelectorAll('.line div');

function renderWords() {
    for (let i = 0; i < wordsList.length; i++) {
        let word = wordsList[i]
        let addSpace = document.createElement('span');
        addSpace.textContent = ' ';

        for (let char in word) {
            let symbol = document.createElement('span');
            symbol.textContent += word[char];
            document.querySelector('.word').append(symbol);
        }
        document.querySelector('.word').append(addSpace);
    }
}
renderWords()



function checkChar() {
    const chars = document.querySelectorAll('.word span');
    let value = inputText.value;
   
    for (let i = 0; i < chars.length; i++) {
        chars.forEach(char => {
            char.classList.remove('active')
        })
        let activeChar = value.length;
        chars[activeChar].classList.add('active');
        if(i > value.length) {
            chars[i].classList.remove('wrong');     
            chars[i].classList.add('normal');
        }

        if (chars[i].textContent === value[i]) {
            chars[i].classList.remove('normal');
            chars[i].classList.remove('wrong');
            chars[i].classList.add('done');
        } else {
            chars[i].classList.remove('normal');
            chars[i].classList.remove('done');
            chars[i].classList.add('wrong');
        }
      
    }


}




inputText.addEventListener('input', checkChar);





















// inputText.addEventListener('keyup' , function(e) {
//     if(e.code === 'Space'){
//         text.style.opacity = '0';
//     }
//     if(text.textContent === inputText.value){
//         text.style.color ='green';
//     }else {
//         text.style.color ='red';
//     }
// });


















function checkPressKey(e) {
    let pressedKey = '';
    pressedKey = e.code;
    keys.forEach(key => {
        if (pressedKey === key.dataset.key) {
            key.style.transform = 'scale(1.2)';
            setTimeout(() => {
                key.style.transform = '';
            }, 100);
        }
    });

}

window.addEventListener('keyup', checkPressKey);