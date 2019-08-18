let startElements = document.querySelectorAll('.start');
let mainElements = document.querySelectorAll('.main');
let loadElements = document.querySelectorAll('.load');


function StartQuest() {
    for (const startElement of startElements){
        startElement.style.display = 'none';
    }
    for (const mainElement of mainElements){
        mainElement.style.display = '';
    }
    document.querySelector('.btns').setAttribute('onmousedown', "return false");
    document.querySelector('.btns').setAttribute('onselectstart', "return false");
}

function LoadScreen() {
    for (const mainElement of mainElements){
        mainElement.style.display = 'none';
    }

    for (const mainElement of loadElements){
        mainElement.style.display = '';
    }
}

function FinishQuest() {
    document.getElementById('main-form').style.display = 'none';
    document.getElementById('ending-form').style.display = '';
}

class ResultContent {
    constructor(role, text, img, bg, btnText, dImg, rText, fRole){
        this.role = role;
        this.text = text;
        this.img = img;
        this.bg = bg;
        this.btnText = btnText;
        this.dImg = dImg;
        this.rText = rText;
        this.fRole = fRole;
    }

    showResult(){
        document.getElementById('ending-form-result_role').innerHTML = this.role;
        document.getElementById('ending-form-result_description').innerHTML = this.text;
        document.getElementById('ending-form-result_image').src = this.img;
        document.getElementById('ending-form-result').style.backgroundImage = 'url("'+this.bg+'")';
        document.getElementById('ending-btn_text').innerHTML = this.btnText;
        document.getElementById('ready-text').innerHTML = this.rText;
        document.getElementById('future-role').innerHTML = this.fRole;
        document.getElementById('ending-fact_img').src = this.dImg;
        FinishQuest();
    }
}



let result1 = new ResultContent(
    'Ты — творец виртуальных миров',
    'Твоё воображение безгранично! Если бы судьба мира была в твоих руках, он был бы наполнен роботами-волшебниками и летающими рыбами.',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запрягу своего&nbspдракона',
    '/img/i1.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result2 = new ResultContent(
    'Ты — повелитель живых картин',
    'Ты легко создашь крутейший видеоблог или фильм — настоящие&nbspпрофессионалы уже хотят с тобой сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включу',
    '/img/i2.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result3 = new ResultContent(
    'Ты — хранитель таинственных языков',
    'Благодаря железной логике ты сможешь подчинить себе любого робота. Стоит тебе выучить хотя бы один их язык — и они завоюют для тебя мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом я общаться не научился, научусь хотя бы с роботом-котом',
    '/img/i3.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result4 = new ResultContent(
    'Ты — повелитель веб-страниц',
    'Довольствоваться малым – совсем не про тебя! Реализовать твои амбиции лучше всего поможет великий интернет. Там ты реализуешь всё, что задумаешь.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/i4.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result5 = new ResultContent(
    'Ты — мастер тёмных секретов',
    'Твоей внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от твоих зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Посмотрим, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result1p = new ResultContent(
    'Ваш ребенок — творец виртуальных миров',
    'Его воображение безгранично! Если бы судьба мира была в его руках, он был бы наполнен роботами-волшебниками и летающими рыбами.',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запряжет своего&nbspдракона',
    '/img/i1.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)


let result2p = new ResultContent(
    'Ваш ребенок — повелитель живых картин',
    'Он легко создаст крутейший видеоблог или фильм — настоящие&nbspпрофессионалы уже хотят с ним сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включит',
    '/img/i2.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result3p = new ResultContent(
    'Ваш ребенок — хранитель таинственных языков',
    'Благодаря железной логике он сможет подчинить себе любого робота. Стоит ему выучить хотя бы один их язык — и они завоюют для него мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом он общаться не научился, научится хотя бы с роботом-котом',
    '/img/i3.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result4p = new ResultContent(
    'Ваш ребенок — повелитель веб-страниц',
    'Довольствоваться малым – совсем не про него! Реализовать его амбиции лучше всего поможет великий интернет. Там он реализует всё, что задумает.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/i4.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)

let result5p = new ResultContent(
    'Ваш ребенок — мастер тёмных секретов',
    'Его внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от его зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Он посмотрит, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)



class MainContent {
    constructor(questionText, img, ans1, ans1c, ans2, ans2c, ans3, ans3c, ans4, ans4c, nextStep){
        this.questionText = questionText;
        this.img = img;
        this.ans1 = [ans1, ans1c];
        this.ans2 = [ans2, ans2c];
        this.ans3 = [ans3, ans3c];
        this.ans4 = [ans4, ans4c];
        this.nextStep = nextStep;
    }

    changeContent(){
        document.getElementById('question').innerHTML = this.questionText;
        document.getElementById('img').src = this.img;
        document.getElementById('ans1').innerHTML = this.ans1[0];
        document.getElementById('ans2').innerHTML = this.ans2[0];
        document.getElementById('ans3').innerHTML = this.ans3[0];
        document.getElementById('ans4').innerHTML = this.ans4[0];        
        document.getElementById('btn1').setAttribute('onclick', this.ans1[1] + ' ' + this.nextStep);
        document.getElementById('btn2').setAttribute('onclick', this.ans2[1] + ' ' + this.nextStep);
        document.getElementById('btn3').setAttribute('onclick', this.ans3[1] + ' ' + this.nextStep);
        document.getElementById('btn4').setAttribute('onclick', this.ans4[1] + ' ' + this.nextStep);
    }

    calculateDirection1(){
        if (MainContent.countA > MainContent.countB) {
            screen15a.changeContent();
        }
        else{
            screen15b.changeContent();
        }
    }

    calculateDirection2(){
        if (MainContent.countA > MainContent.countB) {
            screen25a.changeContent();
        }
        else{
            screen25b.changeContent();
        }
    }

    calculateDirection3(){
        if (MainContent.countA > MainContent.countB) {
            screen35a.changeContent();
        }
        else{
            screen35b.changeContent();
        }
    }

    calculateDirection4(){
        if (MainContent.countA > MainContent.countB) {
            screen45a.changeContent();
        }
        else{
            screen45b.changeContent();
        }
    }

    calculateDirection1a(){
        if (MainContent.countRA > MainContent.countRB) {
            document.getElementById('load-btn').setAttribute('onclick', 'result1.showResult();')
        }
        else{
            document.getElementById('load-btn').setAttribute('onclick', 'result2.showResult();')
        }
        LoadScreen();
    }

    calculateDirection1b(){
        document.getElementById('load-btn').setAttribute('onclick', 'result3.showResult();')  
        LoadScreen();
    }

    calculateDirection27b(){
        if (MainContent.countRA === MainContent.countRB && MainContent.countRA == MainContent.countRC){
            screen28b.changeContent();
        }
        else{
            screen28bZ.changeContent();
        }
    }

    calculateDirection47b(){
        if (MainContent.countRA === MainContent.countRB && MainContent.countRA == MainContent.countRC){
            screen48b.changeContent();
        }
        else{
            screen48bZ.changeContent();
        }
    }

    calculateDirection2b(){
        if ((MainContent.countRA > MainContent.countRB) && (MainContent.countRA > MainContent.countRC)) {
            document.getElementById('load-btn').setAttribute('onclick', 'result5.showResult();')
        }
        else{
            if ((MainContent.countRB > MainContent.countRA) && (MainContent.countRB > MainContent.countRC)) {
                document.getElementById('load-btn').setAttribute('onclick', 'result3.showResult();')
            }
            else{
                if ((MainContent.countRC > MainContent.countRA) && (MainContent.countRC > MainContent.countRB)) {
                    document.getElementById('load-btn').setAttribute('onclick', 'result4.showResult();')
                }
            }
        }  
        LoadScreen();
    }

    calculateDirection3a(){
        document.getElementById('load-btn').setAttribute('onclick', 'result2.showResult();')  
        LoadScreen();
    }

    calculateDirection3b(){
        if (MainContent.countRA > MainContent.countRB) {
            document.getElementById('load-btn').setAttribute('onclick', 'result3.showResult();')
        }
        else{
            document.getElementById('load-btn').setAttribute('onclick', 'result4.showResult();')
        }
        LoadScreen();
    }

    calculateDirection4a(){
        if (MainContent.countRA > MainContent.countRB) {
            document.getElementById('load-btn').setAttribute('onclick', 'result1p.showResult();')
        }
        else{
            document.getElementById('load-btn').setAttribute('onclick', 'result2p.showResult();')
        }
        LoadScreen();
    }

    calculateDirection4b(){
        if ((MainContent.countRA > MainContent.countRB) && (MainContent.countRA > MainContent.countRC)) {
            document.getElementById('load-btn').setAttribute('onclick', 'result5p.showResult();')
        }
        else{
            if ((MainContent.countRB > MainContent.countRA) && (MainContent.countRB > MainContent.countRC)) {
                document.getElementById('load-btn').setAttribute('onclick', 'result3p.showResult();')
            }
            else{
                if ((MainContent.countRC > MainContent.countRA) && (MainContent.countRC > MainContent.countRB)) {
                    document.getElementById('load-btn').setAttribute('onclick', 'result4p.showResult();')
                }
            }
        }  
        LoadScreen();
    }

    A(){
        MainContent.countA += 1;
        console.log("A - " + MainContent.countA);
    }

    B(){
        MainContent.countB += 1;
        console.log("B - " + MainContent.countB);
    }

    RA(){
        MainContent.countRA += 1;
        console.log("RA - " + MainContent.countRA);
    }

    RB(){
        MainContent.countRB += 1;
        console.log("RB - " + MainContent.countRB);
    }

    RC(){
        MainContent.countRC += 1;
        console.log("RC - " + MainContent.countRC);
    }
}

MainContent.countA = 0;
MainContent.countB = 0;

MainContent.countRA = 0;
MainContent.countRB = 0;
MainContent.countRC = 0;

// ДО 10 ЛЕТ

let screen12 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.png",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen13.changeContent();"
)

let screen13 = new MainContent(
    "Ты поднимаешься и попадаешь в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.png",
    "Поищу в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украшу ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткаю и отправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну ее ногой и посмотрю, что будет", "screen12.B();",
    "screen14.changeContent();"
)

let screen14 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.png",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen14.calculateDirection1();"
)

let screen15a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.png",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen16a.changeContent();"
)

let screen16a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.png",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen17a.changeContent();"
)

let screen17a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.png",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen18a.changeContent();"
)

let screen18a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen18a.calculateDirection1a();"
)

let screen15b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.png",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen16b.changeContent();"
)

let screen16b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.png",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RC();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen17b.changeContent();"
)

let screen17b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.png",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RC();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen18b.changeContent();"
)

let screen18b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen18b.calculateDirection1b();"
)

// 10 - 14 ЛЕТ

let screen22 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.png",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen23.changeContent();"
)

let screen23 = new MainContent(
    "Ты поднимаешься и попадаешь в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.png",
    "Поищу в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украшу ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткаю и отправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну ее ногой и посмотрю, что будет", "screen12.B();",
    "screen24.changeContent();"
)

let screen24 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.png",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen24.calculateDirection2();" //!
)

let screen25a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.png",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen26a.changeContent();"
)

let screen26a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.png",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen27a.changeContent();"
)

let screen27a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.png",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen28a.changeContent();"
)

let screen28a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28a.calculateDirection1a();"
)

let screen25b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.png",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen26b.changeContent();"
)

let screen26b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.png",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RC();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen27b.changeContent();"
)

let screen27b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.png",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RC();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen28b.calculateDirection27b();"
)

let screen28bZ = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28b.calculateDirection2b();"
)

let screen28b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen28b.calculateDirection2b();"
)

// 14 - 17 ЛЕТ

let screen32 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.png",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen33.changeContent();"
)

let screen33 = new MainContent(
    "Ты поднимаешься и попадаешь в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.png",
    "Поищу в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украшу ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткаю и отправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну ее ногой и посмотрю, что будет", "screen12.B();",
    "screen34.changeContent();"
)

let screen34 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.png",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen34.calculateDirection3();" //!
)

let screen35a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.png",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen36a.changeContent();"
)

let screen36a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.png",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen37a.changeContent();"
)

let screen37a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.png",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen38a.changeContent();"
)

let screen38a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38a.calculateDirection3a();"
)

let screen35b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.png",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RA();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RB();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RB();",
    "screen36b.changeContent();"
)

let screen36b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.png",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RA();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RB();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RB();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RA();",
    "screen37b.changeContent();"
)

let screen37b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.png",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RA();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RB();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RB();",
    "screen38b.changeContent();"
)

let screen38b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38b.calculateDirection3b();"
)

// РОДИТЕЛИ

let screen42 = new MainContent(
    "Что ж, тогда давайте посмотрим, как хорошо Вы знаете своего ребенка. Ему сказали, что нужно подняться на 118 этаж. Что он будет делать? ", 
    "/img/2q.png",
    "Найдет лестницу, это отличный повод размяться!", "screen12.B();",
    "Вызовет личного дракона, конечно", "screen12.A();",
    "Решит, что школе будущего точно должен быть телепорт, и&nbspнайдет его", "screen12.A();",
    "Ну, для начала подключится к wi-fi, а там разберется", "screen12.B();",
    "screen43.changeContent();"
)

let screen43 = new MainContent(
    "Ваш ребенок поднимается и попадает в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что он будет делать?", 
    "/img/3q.png",
    "Поищет в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украсит ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткает и отправит друзьям, чтоб помогли", "screen12.A();",
    "Пнет ее ногой и посмотрит, что будет", "screen12.B();",
    "screen44.changeContent();"
)

let screen44 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?” Что ответит Ваш ребенок?", 
    "/img/4q.png",
    '"Я могу выбирать? Тогда давайте самое простое и веселое!"', "screen12.B();",
    '"Любое, только подождите, камеру включу, чтоб влог записать"', "screen12.A();",
    '"Ну испытание в школе вряд ли будет опасным, так что давайте любое"', "screen12.B();",
    '"Давайте всё, что угодно! Кроме математики..."', "screen12.A();",
    "screen44.calculateDirection4();" //!
)

let screen45a = new MainContent(
    "Посреди зала загорается большой экран с картой и текстом, но все надписи зашифрованы. Как поступит Ваш ребенок?", 
    "/img/5q.png",
    "Ну… попробует найти логику. Например, что вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Снимет на камеру и разошлет всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Что-то похожее наверняка было в одной из миллиона игр, в&nbspкоторые он играл…", "screen12.RA();",
    "Будет в восторге, это же шифры! Прям как в кино с искателями сокровищ", "screen12.RB();",
    "screen46a.changeContent();"
)

let screen46a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что решит ребенок?", 
    "/img/6q.png",
    "Понадеется, что это что-то сказочное. Нет, лучше из научной фантастики", "screen12.RA();",
    "Решит, что это становится слишком похоже на&nbspкакой-то фильм ужасов...", "screen12.RB();",
    "Захочет поскорее узнать, они настоящие или голографические", "screen12.RA();",
    'Наверняка подумает: "Еще и удивительные существа? Да&nbspя&nbspвзорву&nbspютуб!"', "screen12.RB();",
    "screen47a.changeContent();"
)

let screen47a = new MainContent(
    "В дальнем коридоре Вашего ребенка встречают… инопланетяне! Кажется, они вполне мирные, как&nbspон&nbspбудет себя вести?", 
    "/img/7q.png",
    "Сразу станет фоткать! Иначе ему же никто не поверит", "screen12.RB();",
    "Начнет расспрашивать их про планету, с&nbspкоторой они&nbspприлетели", "screen12.RA();",
    "Мирные? Он смотрел все фильмы про инопланетян<br>и&nbspвсё-таки будет поосторожнее", "screen12.RB();",
    "Они же совсем не похожи на людей! Так что постарается влиться в коллектив и поближе их рассмотреть", "screen12.RA();",
    "screen48a.changeContent();"
)

let screen48a = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребенка в гости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.png",
    '"Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ"', "",
    '"Да! Поскорей бы выложить фотки с другой планеты..."', "",
    '"Слишком подозрительное предложение. Мы же едва знакомы!"', "",
    '"Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей"', "",
    "screen48a.calculateDirection4a();"
)

let screen45b = new MainContent(
    "Посреди зала загорается большой экран с картой и текстом, но все надписи зашифрованы. Как поступит Ваш ребенок?", 
    "/img/5q.png",
    "Да запросто расшифрует", "screen12.RA();",
    "Ну… попробует найти логику. Например, что вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё сможет найти в интернете. Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen46b.changeContent();"
)

let screen46b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что решит ребенок?", 
    "/img/6q.png",
    "Да просто пойдет и посмотрит, это точно не будет опасно", "screen12.RB();",
    "Решит подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RC();",
    "Взломает камеры и посмотрит, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Сначала найдет что-нибудь для защиты", "screen12.RB();",
    "screen47b.changeContent();"
)

let screen47b = new MainContent(
    "В дальнем коридоре Вашего ребенка встречают… инопланетяне! Кажется, они вполне мирные, как он будет себя вести?", 
    "/img/7q.png",
    "Ну, для начала поздоровается, а там как пойдет", "screen12.RB();",
    "Конечно же, начнет налаживать отношения и узнает, есть ли они вконтакте", "screen12.RC();",
    "Главное для него будет не вызывая подозрений<br>выведать, кто они и что тут делают", "screen12.RA();",
    "Поищет на сайте, можно ли тоже стать студентом по межпланетному обмену", "screen12.RC();",
    "screen48b.calculateDirection47b();"
)

let screen48bZ = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.png",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28b.calculateDirection4b();"
)

let screen48b = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребенка в гости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.png",
    '"Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ"', "screen12.RA();",
    '"Да! Поскорей бы выложить фотки с другой планеты..."', "screen12.RC();",
    '"Слишком подозрительное предложение. Мы же едва знакомы!"', "screen12.RB();",
    '"Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей"', "screen12.RB();",
    "screen48b.calculateDirection4b();"
)


//console.log(screen1.ans1);
//screen1.changeContent();



