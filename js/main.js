

const keyboard = document.querySelector('.keyboard');
const inputText = document.querySelector('.inputText');
const text = document.querySelector('.text');
const keys = document.querySelectorAll('.line div');





let pressedKey = '';
let inputValue = inputText.value;

inputText.addEventListener('keyup' , function(e) {
    if(e.code === 'Space'){
        text.style.opacity = '0';
        
    }
    if(text.textContent === inputText.value){
        text.style.color ='green';
    }else {
        text.style.color ='red';
    }
});


















function checkPressKey (e) {
    pressedKey = e.code;
    keys.forEach(key => {
        if(pressedKey === key.dataset.key){
            key.style.transform = 'scale(1.2)';
            setTimeout(()=> {
                key.style.transform = '';
            },100);
        }
    });
    console.log(inputValue);
}

window.addEventListener('keyup' , checkPressKey);