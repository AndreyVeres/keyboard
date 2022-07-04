const generateWordList = () => {
    let allText = null;


    function makeRandomArr(a, b) {
        return Math.random() - 0.5;
    }

    try {
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
        return allText.sort(makeRandomArr).splice(0, 150);

    } catch {
        allText = ['advance',
            'lad',
            'eager',
            'joy',
            'former',
            'block',
            'dull',
            'dan',
            'host',
            'ice',
            'mirror',
            'remind',
            'visible',
            'height',
            'difficulty',
            'england',
            'english',
            'fur',
            'powerful',
            'twelve',
            'block',
            'dull',
            'dan',
            'host',
            'ice',
            'mirror',
            'remind',
            'visible',
            'height',
            'difficulty',
            'england',
            'english',
            'fur',
            'powerful',
            'twelve',
            'block',
            'block',
            'dull',
            'dan',
            'host',
            'ice',
            'mirror',
            'remind',
            'visible',
            'height',
            'difficulty',
            'england',
            'english',
            'fur',
            'powerful',
            'twelve',
            'dull',
            'dan',
            'host',
            'ice',
            'mirror',
            'remind',
            'visible',
            'height',
            'difficulty',
            'england',
            'english',
            'fur',
            'powerful',
            'twelve',
            'dad',
            'owl',
            'plenty',
            'slide']
        return allText.sort(makeRandomArr);
    }
};
export default generateWordList;


