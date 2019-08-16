const startElements = document.querySelectorAll('.start');
const mainElements = document.querySelectorAll('.main');
const loadElements = document.querySelectorAll('.load');


function StartQuest() {
    for (const startElement of startElements){
        startElement.style.display = 'none';
    }
    for (const mainElement of mainElements){
        mainElement.style.display = '';
    }
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
    constructor(role, text, img, bg, btnText, dImg){
        this.role = role;
        this.text = text;
        this.img = img;
        this.bg = bg;
        this.btnText = btnText;
        this.dImg = dImg;
    }

    showResult(){
        document.getElementById('ending-form-result_role').innerHTML = this.role;
        document.getElementById('ending-form-result_description').innerHTML = this.text;
        document.getElementById('ending-form-result_image').src = this.img;
        document.getElementById('ending-form-result').style.backgroundImage = 'url("'+this.bg+'")';
        document.getElementById('ending-btn_text').innerHTML = this.btnText;
        FinishQuest();
    }
}

let result1 = new ResultContent(
    'Ты - творец виртуальных миров',
    'Твоё воображение безгранично! Если бы судьба мира была в твоих руках, он был бы наполнен роботами-волшебниками и летающими рыбами.',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запрягу своего дракона',
    '/img/1e.png'
)

let result2 = new ResultContent(
    'Ты - повелитель живых картин',
    'Ты легко создашь крутейший видеоблог или фильм — настоящие&nbspпрофессионалы уже хотят с тобой сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включу',
    '/img/2e.png'
)

let result3 = new ResultContent(
    'Ты — хранитель таинственных языков',
    'Благодаря железной логике ты сможешь подчинить себе любого робота. Стоит тебе выучить хотя бы один их язык — и они завоюют для тебя мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом я общаться не научился, научусь хотя бы с роботом-котом',
    '/img/3e.png'
)

let result4 = new ResultContent(
    'Ты - повелитель веб-страниц',
    'Довольствоваться малым – совсем не про тебя! Реализовать твои амбиции лучше всего поможет великий интернет. Там ты реализуешь всё, что задумаешь.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/4e.png'
)

let result5 = new ResultContent(
    'Ты — мастер тёмных секретов',
    'Твоей внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от твоих зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Посмотрим, есть ли у вас какие-нибудь секреты...',
    '/img/1e.png'
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
        MainContent.countRA += 1;
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
    "Ну, для начала подключусь к вай-фаю, а там разберемся", "screen12.B();",
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
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RС();",
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

//console.log(screen1.ans1);
//screen1.changeContent();




// let screen18a = new MainContent(
//     "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что ответишь?", 
//     "/img/8q.png",
//     "Сначала найду всю-всю информацию о них и их планете, а потом уже дам ответ", "screen12.RB();",
//     "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RA();",
//     "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
//     "Хорошо, но сначала мне нужно собрать все свои вещи и обязательно захватить пару друзей", "screen12.RA();",
//     "screen18a.changeContent();"
// )