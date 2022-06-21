const rgbKeyboard = () => {
    let colors = ['line__green', 'line__red', 'line__purple', 'line__blue', 'line__yellow'];
    const keys = document.querySelectorAll('.line div');
    function checkPressKey(e) {
        let pressedKey = '';
        pressedKey = e.code;
        keys.forEach(key => {
            let keyColor = key.parentElement.getAttribute('class');
            let color = colors[colors.indexOf(keyColor.slice(5))];  
            if (pressedKey === key.dataset.key) {
                key.classList.add(color);
                key.style.transform = `scale(1.2)`
                setTimeout(() => {
                    key.classList.remove(color);
                    key.style.transform = ``;
                }, 200);
            }
        });
    } 
    window.addEventListener('keydown', checkPressKey);  
}
export default rgbKeyboard;