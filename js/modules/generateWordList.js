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

    return allText.splice(0 , 100);
};

export default generateWordList;