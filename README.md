***Клавиатурный тренажер***
***
За идею брался https://10fastfingers.com/typing-test/english <br>
Интерфейс не адаптивный и очень примитивный , оснавная цель была повторить похожий функционал.<br>

***
На данный момент единственное косметическое составляющее это клавиатура.При нажатии на клавиши , подсвечиваются разными цветами.
***
Только английский вариант
***

<ul>
<li>Есть файл английских слов из которого берется их определенное количество <b>generateWordList.js</b></li>
<li>Функция <b>renderList</b> создает span'ы из полученого массива и рисует их на странице ,после чего инпут сразу берется в фокус  </li>
<li>После на <'input'> вешается событие которое запускает <b>startGame</b>.Запускается таймер времени в 60 секунд, флаг что игра запущена ставится в значение <b>true</b> </li>
<li>Далее запускается <b>getWord</b> которая получает первый span и передает его далее для сравнения </li>
<li>Функция <b>checkWord</b> сравнивает слово с вводимым в инпут текстом и в зависимости от результата добавляет определнный класс для спана.Если результат положительный так же увеличивается <b>counter</b><br>
Функция <b>moveTrack</b> двигает блок со всеми словами к верху , для того что бы в области видимости было только 2 строчки слов <br>
Функция <b>setResoult</b> помимо добавления стилей с результатом, удалает класс по которому функция <b>getWord</b> получает слова , из-за чего в следующий её вызов она получает следующее слово</li>

***

1.добавить попап по завершению таймера с результатами <br>
2.Сохранять лучшие результаты <br>
*3.Смена языка на русский <br>




