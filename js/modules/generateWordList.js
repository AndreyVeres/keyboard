
import { words } from '../../engwords.js'
const generateWordList = () => {
    function makeRandomArr(a, b) {
        return Math.random() - 0.5;
    }

    return words.sort(makeRandomArr).splice(0,150)
};
export default generateWordList;
