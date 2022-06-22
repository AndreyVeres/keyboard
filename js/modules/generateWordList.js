const generateWordList = () => {
    let allText = null;
    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    allText = rawFile.responseText.split('\r\n');
                }
            }
        };
        rawFile.send(null);
    }
    readTextFile('../engwords.txt');
    function makeRandomArr(a, b) {
        return Math.random() - 0.5;
    }
    return allText.sort(makeRandomArr).splice(0,150);
};
export default generateWordList;