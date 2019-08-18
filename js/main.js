let startElements = document.querySelectorAll('.start');
let mainElements = document.querySelectorAll('.main');
let loadElements = document.querySelectorAll('.load');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function StartQuest() {
    for (const startElement of startElements){
        startElement.style.opacity = '0';
    }
    await sleep(500);
    for (const startElement of startElements){
        startElement.style.display = 'none';
    }
    for (const mainElement of mainElements){
        mainElement.style.display = '';
    }
    await sleep(10);
    for (const mainElement of mainElements){
        mainElement.style.opacity = '1';
    }

    document.querySelector('.btns').setAttribute('onmousedown', "return false");
    document.querySelector('.btns').setAttribute('onselectstart', "return false");
}

async function StartQuestEn() {
    for (const startElement of startElements){
        startElement.style.opacity = '0';
    }
    await sleep(500);
    document.getElementById('question').innerHTML = 'You enter a huge unusual building. A robot greets you and asks for an ID.';
    document.getElementById('ans1').innerHTML = "Hey, I'm not even 10 yet! What ID are you talking about?";
    document.getElementById('btn1').setAttribute('onclick', 'screen12En.changeContent();');
    document.getElementById('ans2').innerHTML = "I'm older than 10, but I don't have an ID yet. But I can show you my Facebook profile!";
    document.getElementById('btn2').setAttribute('onclick', 'screen22En.changeContent();');
    document.getElementById('ans3').innerHTML = "Come on, you're a robot! Check out my face in your databases and you'll see that I'm already 14 and I'm still at school."
    document.getElementById('btn3').setAttribute('onclick', 'screen32En.changeContent();');
    document.getElementById('ans4').innerHTML = " Hello, is the Open Day for parents taking place here?"
    document.getElementById('btn4').setAttribute('onclick', 'screen42En.changeContent();');
    for (const startElement of startElements){
        startElement.style.display = 'none'
    }
    for (const mainElement of mainElements){
        mainElement.style.display = '';
    }
    await sleep(10);
    for (const mainElement of mainElements){
        mainElement.style.opacity = '1';
    }

    document.querySelector('.btns').setAttribute('onmousedown', "return false");
    document.querySelector('.btns').setAttribute('onselectstart', "return false");
}

async function LoadScreen() {
    for (const mainElement of mainElements){
        mainElement.style.opacity = '0';
    }
    await sleep(500);
    for (const mainElement of mainElements){
        mainElement.style.display = 'none';
    }

    for (const mainElement of loadElements){
        mainElement.style.display = '';
    }
    await sleep(10);
    for (const mainElement of loadElements){
        mainElement.style.opacity = '1';
    }
}


async function FinishQuest() {
    for (const loadElement of loadElements){
        loadElement.style.opacity = '0';
    }
    await sleep(500);
    for (const loadElement of loadElements){
        loadElement.style.display = 'none';
    }
    document.getElementById('main-form').style.height = '54%';
    await sleep(500);
    document.getElementById('main-form').style.display = 'none';
    document.getElementById('ending-form').style.display = '';
    await sleep(300);
    document.querySelector('.bottom-style').innerHTML = "<style>@media (orientation:landscape) {.ending-form-bottom{margin-top:45%;}} @media (orientation:portrait) {.ending-form-bottom{margin-top:70%;}}</style>";
    await sleep(300);
    document.getElementById('ending-form-result').style.opacity = '1';
    await sleep(500);
    document.getElementById('ending-fact_img').style.opacity = '1';
    await sleep(3000);
    document.getElementById('ending-fact_img').style.right = '-23vw';
    document.getElementById('ending-fact_img').style.top = '3vw';
    document.getElementById('ending-fact_img').style.transform = 'rotate(0deg)';
}


async function ChangeLangEn(){
    for (const startElement of startElements){
        startElement.style.opacity = '0';
    }
    await sleep(500);
    document.getElementById('start-label').innerHTML = "Journey to school"
    document.getElementById('start-text').innerHTML = ""
    document.querySelector('.start-btn_text').innerHTML = ""
    document.getElementById('en-lang').style.color = "#AEAEAE"
    document.getElementById('ru-lang').style.color = "#443e3e"
    document.getElementById('en-lang').removeAttribute('onclick');
    document.getElementById('ru-lang').setAttribute('onclick', "ChangeLangRu();");
    document.getElementById('en-lang').style.cursor = "default"
    document.getElementById('ru-lang').style.cursor = "pointer"   
    document.getElementById('start-btn').setAttribute('onclick', "StartQuestEn();");   
    for (const startElement of startElements){
        startElement.style.opacity = '1';
    }
}

async function ChangeLangRu(){
    for (const startElement of startElements){
        startElement.style.opacity = '0';
    }
    await sleep(500);
    document.getElementById('start-label').innerHTML = "ПУТЕШЕСТВИЕ В ШКОЛУ"
    document.getElementById('start-text').innerHTML = "Это приглашение в самую крутую школу будущего на день открытых дверей. Здесь ты сможешь узнать, какие профессии из мира IT тебе подходят. В нашу школу попасть непросто. Сначала мы проверим твои силы."
    document.querySelector('.start-btn_text').innerHTML = "Узнать кто я из мира IT"
    document.getElementById('ru-lang').style.color = "#AEAEAE"
    document.getElementById('en-lang').style.color = "#443e3e"
    document.getElementById('ru-lang').removeAttribute('onclick');
    document.getElementById('en-lang').setAttribute('onclick', "ChangeLangEn();");
    document.getElementById('ru-lang').style.cursor = "default"
    document.getElementById('en-lang').style.cursor = "pointer"
    document.getElementById('start-btn').setAttribute('onclick', "StartQuest();");    
    for (const startElement of startElements){
        startElement.style.opacity = '1';
    }
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
    "В будущем ты станешь одним из этих мастеров: мультипликатор, режиссёр или клипмейкер"
)

let result3 = new ResultContent(
    'Ты — хранитель таинственных языков',
    'Благодаря железной логике ты сможешь подчинить себе любого робота. Стоит тебе выучить хотя бы один их язык — и они завоюют для тебя мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом я общаться не научился, научусь хотя бы с роботом-котом',
    '/img/i3.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь разработчиком программного обеспечения или создателем игр"
)

let result4 = new ResultContent(
    'Ты — повелитель веб-страниц',
    'Довольствоваться малым – совсем не про тебя! Реализовать твои амбиции лучше всего поможет великий интернет. Там ты реализуешь всё, что задумаешь.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/i4.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь веб-разработчиком и создашь много хороших сайтов"
)

let result5 = new ResultContent(
    'Ты — мастер тёмных секретов',
    'Твоей внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от твоих зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Посмотрим, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: криптоаналитик, хакер или системный администратор"
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
    "В будущем он станет одним из этих мастеров: мультипликатор, режиссёр или клипмейкер"
)

let result3p = new ResultContent(
    'Ваш ребенок — хранитель таинственных языков',
    'Благодаря железной логике он сможет подчинить себе любого робота. Стоит ему выучить хотя бы один их язык — и они завоюют для него мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом он общаться не научился, научится хотя бы с роботом-котом',
    '/img/i3.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет разработчиком программного обеспечения или создателем игр"
)

let result4p = new ResultContent(
    'Ваш ребенок — повелитель веб-страниц',
    'Довольствоваться малым – совсем не про него! Реализовать его амбиции лучше всего поможет великий интернет. Там он реализует всё, что задумает.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/i4.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет веб-разработчиком и создаст много хороших сайтов"
)

let result5p = new ResultContent(
    'Ваш ребенок — мастер тёмных секретов',
    'Его внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от его зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Он посмотрит, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: криптоаналитик, хакер или системный администратор"
)

// ENGLISH RESULTS
let result1En = new ResultContent(
    'Ты — творец виртуальных миров',
    'Твоё воображение безгранично! Если бы судьба мира была в твоих руках, он был бы наполнен роботами-волшебниками и летающими рыбами.',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запрягу своего&nbspдракона',
    '/img/i1.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)


let result2En = new ResultContent(
    'Ты — повелитель живых картин',
    'Ты легко создашь крутейший видеоблог или фильм — настоящие&nbspпрофессионалы уже хотят с тобой сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включу',
    '/img/i2.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: мультипликатор, режиссёр или клипмейкер"
)

let result3En = new ResultContent(
    'Ты — хранитель таинственных языков',
    'Благодаря железной логике ты сможешь подчинить себе любого робота. Стоит тебе выучить хотя бы один их язык — и они завоюют для тебя мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом я общаться не научился, научусь хотя бы с роботом-котом',
    '/img/i3.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь разработчиком программного обеспечения или создателем игр"
)

let result4En = new ResultContent(
    'Ты — повелитель веб-страниц',
    'Довольствоваться малым – совсем не про тебя! Реализовать твои амбиции лучше всего поможет великий интернет. Там ты реализуешь всё, что задумаешь.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/i4.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь веб-разработчиком и создашь много хороших сайтов"
)

let result5En = new ResultContent(
    'Ты — мастер тёмных секретов',
    'Твоей внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от твоих зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Посмотрим, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, готов учиться в нашей школе?",
    "В будущем ты станешь одним из этих мастеров: криптоаналитик, хакер или системный администратор"
)


let result1pEn = new ResultContent(
    'Ваш ребенок — творец виртуальных миров',
    'Его воображение безгранично! Если бы судьба мира была в его руках, он был бы наполнен роботами-волшебниками и летающими рыбами.',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запряжет своего&nbspдракона',
    '/img/i1.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)


let result2pEn = new ResultContent(
    'Ваш ребенок — повелитель живых картин',
    'Он легко создаст крутейший видеоблог или фильм — настоящие&nbspпрофессионалы уже хотят с ним сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включит',
    '/img/i2.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: мультипликатор, режиссёр или клипмейкер"
)

let result3pEn = new ResultContent(
    'Ваш ребенок — хранитель таинственных языков',
    'Благодаря железной логике он сможет подчинить себе любого робота. Стоит ему выучить хотя бы один их язык — и они завоюют для него мир.',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! С котом он общаться не научился, научится хотя бы с роботом-котом',
    '/img/i3.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет разработчиком программного обеспечения или создателем игр"
)

let result4pEn = new ResultContent(
    'Ваш ребенок — повелитель веб-страниц',
    'Довольствоваться малым – совсем не про него! Реализовать его амбиции лучше всего поможет великий интернет. Там он реализует всё, что задумает.',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! А вот тут я не придумала&nbspпанчлайн',
    '/img/i4.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет веб-разработчиком и создаст много хороших сайтов"
)

let result5pEn = new ResultContent(
    'Ваш ребенок — мастер тёмных секретов',
    'Его внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от его зорких глаз.',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Он посмотрит, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, он готов учиться в нашей школе?",
    "В будущем он станет одним из этих мастеров: криптоаналитик, хакер или системный администратор"
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

   async changeContent(){
        for (const mainElement of mainElements){
            mainElement.style.opacity = '0';
        }
        await sleep(400);
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
        await sleep(100);
        for (const mainElement of mainElements){
            mainElement.style.opacity = '1';
        }
        
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

    //ENGLISH TREE
    calculateDirection1En(){
        if (MainContent.countA > MainContent.countB) {
            screen15aEn.changeContent();
        }
        else{
            screen15bEn.changeContent();
        }
    }

    calculateDirection2En(){
        if (MainContent.countA > MainContent.countB) {
            screen25aEn.changeContent();
        }
        else{
            screen25bEn.changeContent();
        }
    }

    calculateDirection3En(){
        if (MainContent.countA > MainContent.countB) {
            screen35aEn.changeContent();
        }
        else{
            screen35bEn.changeContent();
        }
    }

    calculateDirection4En(){
        if (MainContent.countA > MainContent.countB) {
            screen45aEn.changeContent();
        }
        else{
            screen45bEn.changeContent();
        }
    }

    calculateDirection1aEn(){
        if (MainContent.countRA > MainContent.countRB) {
            document.getElementById('load-btn').setAttribute('onclick', 'result1En.showResult();')
        }
        else{
            document.getElementById('load-btn').setAttribute('onclick', 'result2En.showResult();')
        }
        LoadScreen();
    }

    calculateDirection1bEn(){
        document.getElementById('load-btn').setAttribute('onclick', 'result3En.showResult();')  
        LoadScreen();
    }

    calculateDirection27bEn(){
        if (MainContent.countRA === MainContent.countRB && MainContent.countRA == MainContent.countRC){
            screen28bEn.changeContent();
        }
        else{
            screen28bZEn.changeContent();
        }
    }

    calculateDirection47bEn(){
        if (MainContent.countRA === MainContent.countRB && MainContent.countRA == MainContent.countRC){
            screen48bEn.changeContent();
        }
        else{
            screen48bZEn.changeContent();
        }
    }

    calculateDirection2bEn(){
        if ((MainContent.countRA > MainContent.countRB) && (MainContent.countRA > MainContent.countRC)) {
            document.getElementById('load-btn').setAttribute('onclick', 'result5En.showResult();')
        }
        else{
            if ((MainContent.countRB > MainContent.countRA) && (MainContent.countRB > MainContent.countRC)) {
                document.getElementById('load-btn').setAttribute('onclick', 'result3En.showResult();')
            }
            else{
                if ((MainContent.countRC > MainContent.countRA) && (MainContent.countRC > MainContent.countRB)) {
                    document.getElementById('load-btn').setAttribute('onclick', 'result4En.showResult();')
                }
            }
        }  
        LoadScreen();
    }

    calculateDirection3aEn(){
        document.getElementById('load-btn').setAttribute('onclick', 'result2En.showResult();')  
        LoadScreen();
    }

    calculateDirection3bEn(){
        if (MainContent.countRA > MainContent.countRB) {
            document.getElementById('load-btn').setAttribute('onclick', 'result3En.showResult();')
        }
        else{
            document.getElementById('load-btn').setAttribute('onclick', 'result4En.showResult();')
        }
        LoadScreen();
    }

    calculateDirection4aEn(){
        if (MainContent.countRA > MainContent.countRB) {
            document.getElementById('load-btn').setAttribute('onclick', 'result1pEn.showResult();')
        }
        else{
            document.getElementById('load-btn').setAttribute('onclick', 'result2pEn.showResult();')
        }
        LoadScreen();
    }

    calculateDirection4bEn(){
        if ((MainContent.countRA > MainContent.countRB) && (MainContent.countRA > MainContent.countRC)) {
            document.getElementById('load-btn').setAttribute('onclick', 'result5pEn.showResult();')
        }
        else{
            if ((MainContent.countRB > MainContent.countRA) && (MainContent.countRB > MainContent.countRC)) {
                document.getElementById('load-btn').setAttribute('onclick', 'result3pEn.showResult();')
            }
            else{
                if ((MainContent.countRC > MainContent.countRA) && (MainContent.countRC > MainContent.countRB)) {
                    document.getElementById('load-btn').setAttribute('onclick', 'result4pEn.showResult();')
                }
            }
        }  
        LoadScreen();
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
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen13.changeContent();"
)

let screen13 = new MainContent(
    "Ты поднимаешься и попадаешь в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.jpg",
    "Поищу в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украшу ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткаю и отправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну ее ногой и посмотрю, что будет", "screen12.B();",
    "screen14.changeContent();"
)

let screen14 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen14.calculateDirection1();"
)

let screen15a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen16a.changeContent();"
)

let screen16a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen17a.changeContent();"
)

let screen17a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen18a.changeContent();"
)

let screen18a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen18a.calculateDirection1a();"
)

let screen15b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen16b.changeContent();"
)

let screen16b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RC();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen17b.changeContent();"
)

let screen17b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RC();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen18b.changeContent();"
)

let screen18b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen18b.calculateDirection1b();"
)

// 10 - 14 ЛЕТ

let screen22 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen23.changeContent();"
)

let screen23 = new MainContent(
    "Ты поднимаешься и попадаешь в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.jpg",
    "Поищу в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украшу ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткаю и отправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну ее ногой и посмотрю, что будет", "screen12.B();",
    "screen24.changeContent();"
)

let screen24 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen24.calculateDirection2();" //!
)

let screen25a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen26a.changeContent();"
)

let screen26a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen27a.changeContent();"
)

let screen27a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen28a.changeContent();"
)

let screen28a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28a.calculateDirection1a();"
)

let screen25b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen26b.changeContent();"
)

let screen26b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RC();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen27b.changeContent();"
)

let screen27b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RC();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen28b.calculateDirection27b();"
)

let screen28bZ = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28b.calculateDirection2b();"
)

let screen28b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen28b.calculateDirection2b();"
)

// 14 - 17 ЛЕТ

let screen32 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen33.changeContent();"
)

let screen33 = new MainContent(
    "Ты поднимаешься и попадаешь в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.jpg",
    "Поищу в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украшу ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткаю и отправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну ее ногой и посмотрю, что будет", "screen12.B();",
    "screen34.changeContent();"
)

let screen34 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen34.calculateDirection3();" //!
)

let screen35a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen36a.changeContent();"
)

let screen36a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen37a.changeContent();"
)

let screen37a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen38a.changeContent();"
)

let screen38a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38a.calculateDirection3a();"
)

let screen35b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RA();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RB();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RB();",
    "screen36b.changeContent();"
)

let screen36b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RA();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RB();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RB();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RA();",
    "screen37b.changeContent();"
)

let screen37b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RA();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RB();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RB();",
    "screen38b.changeContent();"
)

let screen38b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38b.calculateDirection3b();"
)

// РОДИТЕЛИ

let screen42 = new MainContent(
    "Что ж, тогда давайте посмотрим, как хорошо Вы знаете своего ребенка. Ему сказали, что нужно подняться на 118 этаж. Что он будет делать? ", 
    "/img/2q.jpg",
    "Найдет лестницу, это отличный повод размяться!", "screen12.B();",
    "Вызовет личного дракона, конечно", "screen12.A();",
    "Решит, что школе будущего точно должен быть телепорт, и&nbspнайдет его", "screen12.A();",
    "Ну, для начала подключится к wi-fi, а там разберется", "screen12.B();",
    "screen43.changeContent();"
)

let screen43 = new MainContent(
    "Ваш ребенок поднимается и попадает в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что он будет делать?", 
    "/img/3q.jpg",
    "Поищет в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украсит ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткает и отправит друзьям, чтоб помогли", "screen12.A();",
    "Пнет ее ногой и посмотрит, что будет", "screen12.B();",
    "screen44.changeContent();"
)

let screen44 = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?” Что ответит Ваш ребенок?", 
    "/img/4q.jpg",
    '"Я могу выбирать? Тогда давайте самое простое и веселое!"', "screen12.B();",
    '"Любое, только подождите, камеру включу, чтоб влог записать"', "screen12.A();",
    '"Ну испытание в школе вряд ли будет опасным, так что давайте любое"', "screen12.B();",
    '"Давайте всё, что угодно! Кроме математики..."', "screen12.A();",
    "screen44.calculateDirection4();" //!
)

let screen45a = new MainContent(
    "Посреди зала загорается большой экран с картой и текстом, но все надписи зашифрованы. Как поступит Ваш ребенок?", 
    "/img/5q.jpg",
    "Ну… попробует найти логику. Например, что вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Снимет на камеру и разошлет всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Что-то похожее наверняка было в одной из миллиона игр, в&nbspкоторые он играл…", "screen12.RA();",
    "Будет в восторге, это же шифры! Прям как в кино с искателями сокровищ", "screen12.RB();",
    "screen46a.changeContent();"
)

let screen46a = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что решит ребенок?", 
    "/img/6q.jpg",
    "Понадеется, что это что-то сказочное. Нет, лучше из научной фантастики", "screen12.RA();",
    "Решит, что это становится слишком похоже на&nbspкакой-то фильм ужасов...", "screen12.RB();",
    "Захочет поскорее узнать, они настоящие или голографические", "screen12.RA();",
    'Наверняка подумает: "Еще и удивительные существа? Да&nbspя&nbspвзорву&nbspютуб!"', "screen12.RB();",
    "screen47a.changeContent();"
)

let screen47a = new MainContent(
    "В дальнем коридоре Вашего ребенка встречают… инопланетяне! Кажется, они вполне мирные, как&nbspон&nbspбудет себя вести?", 
    "/img/7q.jpg",
    "Сразу станет фоткать! Иначе ему же никто не поверит", "screen12.RB();",
    "Начнет расспрашивать их про планету, с&nbspкоторой они&nbspприлетели", "screen12.RA();",
    "Мирные? Он смотрел все фильмы про инопланетян<br>и&nbspвсё-таки будет поосторожнее", "screen12.RB();",
    "Они же совсем не похожи на людей! Так что постарается влиться в коллектив и поближе их рассмотреть", "screen12.RA();",
    "screen48a.changeContent();"
)

let screen48a = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребенка в гости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.jpg",
    '"Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ"', "",
    '"Да! Поскорей бы выложить фотки с другой планеты..."', "",
    '"Слишком подозрительное предложение. Мы же едва знакомы!"', "",
    '"Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей"', "",
    "screen48a.calculateDirection4a();"
)

let screen45b = new MainContent(
    "Посреди зала загорается большой экран с картой и текстом, но все надписи зашифрованы. Как поступит Ваш ребенок?", 
    "/img/5q.jpg",
    "Да запросто расшифрует", "screen12.RA();",
    "Ну… попробует найти логику. Например, что вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё сможет найти в интернете. Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen46b.changeContent();"
)

let screen46b = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что решит ребенок?", 
    "/img/6q.jpg",
    "Да просто пойдет и посмотрит, это точно не будет опасно", "screen12.RB();",
    "Решит подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RC();",
    "Взломает камеры и посмотрит, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Сначала найдет что-нибудь для защиты", "screen12.RB();",
    "screen47b.changeContent();"
)

let screen47b = new MainContent(
    "В дальнем коридоре Вашего ребенка встречают… инопланетяне! Кажется, они вполне мирные, как он будет себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздоровается, а там как пойдет", "screen12.RB();",
    "Конечно же, начнет налаживать отношения и узнает, есть ли они вконтакте", "screen12.RC();",
    "Главное для него будет не вызывая подозрений<br>выведать, кто они и что тут делают", "screen12.RA();",
    "Поищет на сайте, можно ли тоже стать студентом по межпланетному обмену", "screen12.RC();",
    "screen48b.calculateDirection47b();"
)

let screen48bZ = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28b.calculateDirection4b();"
)

let screen48b = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребенка в гости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.jpg",
    '"Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ"', "screen12.RA();",
    '"Да! Поскорей бы выложить фотки с другой планеты..."', "screen12.RC();",
    '"Слишком подозрительное предложение. Мы же едва знакомы!"', "screen12.RB();",
    '"Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей"', "screen12.RB();",
    "screen48b.calculateDirection4b();"
)

// ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS
// ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS
// ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS---ENGLISH QUESTIONS

let screen12En = new MainContent(
    "You were told that you need to go to floor 118, but you don't know how. What are you going to do?", 
    "/img/2q.jpg",
    "I'll find the stairs – such a great chance for some exercise!", "screen12.B();",
    "I'll call my personal dragon, obviously.", "screen12.A();",
    "The School of the Future must have a teleport. Oh, right, there it is!", "screen12.A();",
    "Well, I'll connect to Wi-Fi first, and then we'll see...", "screen12.B();",
    "screen13En.changeContent();"
)

let screen13En = new MainContent(
    "You get upstairs and find yourself in a large spacious room, but there's nobody there except for a small black box right in the middle of the room. What are you going to do with it?", 
    "/img/3q.jpg",
    "I'll search the Internet to find out what it is.", "screen12.B();",
    "A black box? Of course I'll decorate it with markers and glitter", "screen12.A();",
    "I'll take a pic and send it to my friends so they could help.", "screen12.A();",
    "I'll kick it and see what happens!", "screen12.B();",
    "screen14En.changeContent();"
)

let screen14En = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen14En.calculateDirection1En();"
)

let screen15aEn = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen16aEn.changeContent();"
)

let screen16aEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen17aEn.changeContent();"
)

let screen17aEn = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen18aEn.changeContent();"
)

let screen18aEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen18aEn.calculateDirection1aEn();"
)

let screen15bEn = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen16bEn.changeContent();"
)

let screen16bEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RC();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen17bEn.changeContent();"
)

let screen17bEn = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RC();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen18bEn.changeContent();"
)

let screen18bEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen18bEn.calculateDirection1bEn();"
)

// 10 - 14 ЛЕТ

let screen22En = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen23En.changeContent();"
)

let screen23En = new MainContent(
    "You get upstairs and find yourself in a large spacious room, but there's nobody there except for a small black box right in the middle of the room. What are you going to do with it?", 
    "/img/3q.jpg",
    "I'll search the Internet to find out what it is.", "screen12.B();",
    "A black box? Of course I'll decorate it with markers and glitter", "screen12.A();",
    "I'll take a pic and send it to my friends so they could help.", "screen12.A();",
    "I'll kick it and see what happens!", "screen12.B();",
    "screen24En.changeContent();"
)

let screen24En = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen24En.calculateDirection2En();" //!
)

let screen25aEn = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen26aEn.changeContent();"
)

let screen26aEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen27aEn.changeContent();"
)

let screen27aEn = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen28aEn.changeContent();"
)

let screen28aEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28aEn.calculateDirection1aEn();"
)

let screen25bEn = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen26bEn.changeContent();"
)

let screen26bEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RC();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen27bEn.changeContent();"
)

let screen27bEn = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RC();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen28bEn.calculateDirection27bEn();"
)

let screen28bZEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28bEn.calculateDirection2bEn();"
)

let screen28bEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen28bEn.calculateDirection2bEn();"
)

// 14 - 17 ЛЕТ

let screen32En = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили, как. Что будешь делать?", 
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберемся", "screen12.B();",
    "screen33En.changeContent();"
)

let screen33En = new MainContent(
    "You get upstairs and find yourself in a large spacious room, but there's nobody there except for a small black box right in the middle of the room. What are you going to do with it?", 
    "/img/3q.jpg",
    "I'll search the Internet to find out what it is.", "screen12.B();",
    "A black box? Of course I'll decorate it with markers and glitter", "screen12.A();",
    "I'll take a pic and send it to my friends so they could help.", "screen12.A();",
    "I'll kick it and see what happens!", "screen12.B();",
    "screen34En.changeContent();"
)

let screen34En = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?”", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в школе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen34En.calculateDirection3En();" //!
)

let screen35aEn = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и разошлю всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в одной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в кино с искателями сокровищ!", "screen12.RB();",
    "screen36aEn.changeContent();"
)

let screen36aEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на какой-то<br> фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Еще и удивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen37aEn.changeContent();"
)

let screen37aEn = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и всё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в коллектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen38aEn.changeContent();"
)

let screen38aEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38aEn.calculateDirection3aEn();"
)

let screen35bEn = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RA();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RB();",
    "Всё можно найти в интернете! Ну или хотя бы что-то похожее...", "screen12.RB();",
    "screen36bEn.changeContent();"
)

let screen36bEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и посмотрю, это точно не будет опасно", "screen12.RA();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и про этих существ написано", "screen12.RB();",
    "Взломаю камеры и посмотрю, что там такое", "screen12.RB();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RA();",
    "screen37bEn.changeContent();"
)

let screen37bEn = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдет", "screen12.RA();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть вконтакте?", "screen12.RB();",
    "Так, главное - не вызывая подозрений выведать, кто они и что тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RB();",
    "screen38bEn.changeContent();"
)

let screen38bEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38bEn.calculateDirection3bEn();"
)

// РОДИТЕЛИ

let screen42En = new MainContent(
    "Что ж, тогда давайте посмотрим, как хорошо Вы знаете своего ребенка. Ему сказали, что нужно подняться на 118 этаж. Что он будет делать? ", 
    "/img/2q.jpg",
    "Найдет лестницу, это отличный повод размяться!", "screen12.B();",
    "Вызовет личного дракона, конечно", "screen12.A();",
    "Решит, что школе будущего точно должен быть телепорт, и&nbspнайдет его", "screen12.A();",
    "Ну, для начала подключится к wi-fi, а там разберется", "screen12.B();",
    "screen43En.changeContent();"
)

let screen43En = new MainContent(
    "Ваш ребенок поднимается и попадает в большой просторный зал, но здесь никого и только маленькая чёрная коробка посреди зала. Что он будет делать?", 
    "/img/3q.jpg",
    "Поищет в интернете, что это может быть", "screen12.B();",
    "Черная коробка? Украсит ее фломастерами и блестками, конечно же", "screen12.A();",
    "Сфоткает и отправит друзьям, чтоб помогли", "screen12.A();",
    "Пнет ее ногой и посмотрит, что будет", "screen12.B();",
    "screen44En.changeContent();"
)

let screen44En = new MainContent(
    "Внезапно из коробки доносится голос: “Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в нашу школу?” Что ответит Ваш ребенок?", 
    "/img/4q.jpg",
    '"Я могу выбирать? Тогда давайте самое простое и веселое!"', "screen12.B();",
    '"Любое, только подождите, камеру включу, чтоб влог записать"', "screen12.A();",
    '"Ну испытание в школе вряд ли будет опасным, так что давайте любое"', "screen12.B();",
    '"Давайте всё, что угодно! Кроме математики..."', "screen12.A();",
    "screen44En.calculateDirection4En();" //!
)

let screen45aEn = new MainContent(
    "Посреди зала загорается большой экран с картой и текстом, но все надписи зашифрованы. Как поступит Ваш ребенок?", 
    "/img/5q.jpg",
    "Ну… попробует найти логику. Например, что вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Снимет на камеру и разошлет всем друзьям - <br>пусть помогают", "screen12.RB();",
    "Что-то похожее наверняка было в одной из миллиона игр, в&nbspкоторые он играл…", "screen12.RA();",
    "Будет в восторге, это же шифры! Прям как в кино с искателями сокровищ", "screen12.RB();",
    "screen46aEn.changeContent();"
)

let screen46aEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что решит ребенок?", 
    "/img/6q.jpg",
    "Понадеется, что это что-то сказочное. Нет, лучше из научной фантастики", "screen12.RA();",
    "Решит, что это становится слишком похоже на&nbspкакой-то фильм ужасов...", "screen12.RB();",
    "Захочет поскорее узнать, они настоящие или голографические", "screen12.RA();",
    'Наверняка подумает: "Еще и удивительные существа? Да&nbspя&nbspвзорву&nbspютуб!"', "screen12.RB();",
    "screen47aEn.changeContent();"
)

let screen47aEn = new MainContent(
    "В дальнем коридоре Вашего ребенка встречают… инопланетяне! Кажется, они вполне мирные, как&nbspон&nbspбудет себя вести?", 
    "/img/7q.jpg",
    "Сразу станет фоткать! Иначе ему же никто не поверит", "screen12.RB();",
    "Начнет расспрашивать их про планету, с&nbspкоторой они&nbspприлетели", "screen12.RA();",
    "Мирные? Он смотрел все фильмы про инопланетян<br>и&nbspвсё-таки будет поосторожнее", "screen12.RB();",
    "Они же совсем не похожи на людей! Так что постарается влиться в коллектив и поближе их рассмотреть", "screen12.RA();",
    "screen48aEn.changeContent();"
)

let screen48aEn = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребенка в гости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.jpg",
    '"Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ"', "",
    '"Да! Поскорей бы выложить фотки с другой планеты..."', "",
    '"Слишком подозрительное предложение. Мы же едва знакомы!"', "",
    '"Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей"', "",
    "screen48aEn.calculateDirection4aEn();"
)

let screen45bEn = new MainContent(
    "Посреди зала загорается большой экран с картой и текстом, но все надписи зашифрованы. Как поступит Ваш ребенок?", 
    "/img/5q.jpg",
    "Да запросто расшифрует", "screen12.RA();",
    "Ну… попробует найти логику. Например, что вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, ее можно взломать", "screen12.RA();",
    "Всё сможет найти в интернете. Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen46bEn.changeContent();"
)

let screen46bEn = new MainContent(
    "Расшифрованное послание получилось таким: отправляйся в самый дальний коридор и познакомься с удивительными существами. Что решит ребенок?", 
    "/img/6q.jpg",
    "Да просто пойдет и посмотрит, это точно не будет опасно", "screen12.RB();",
    "Решит подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RC();",
    "Взломает камеры и посмотрит, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Сначала найдет что-нибудь для защиты", "screen12.RB();",
    "screen47bEn.changeContent();"
)

let screen47bEn = new MainContent(
    "В дальнем коридоре Вашего ребенка встречают… инопланетяне! Кажется, они вполне мирные, как он будет себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздоровается, а там как пойдет", "screen12.RB();",
    "Конечно же, начнет налаживать отношения и узнает, есть ли они вконтакте", "screen12.RC();",
    "Главное для него будет не вызывая подозрений<br>выведать, кто они и что тут делают", "screen12.RA();",
    "Поищет на сайте, можно ли тоже стать студентом по межпланетному обмену", "screen12.RC();",
    "screen48bEn.calculateDirection47bEn();"
)

let screen48bZEn = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в гости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28bEn.calculateDirection4bEn();"
)

let screen48bEn = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребенка в гости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.jpg",
    '"Сначала найду всю-всю информацию о них и их планете, а&nbspпотом уже дам ответ"', "screen12.RA();",
    '"Да! Поскорей бы выложить фотки с другой планеты..."', "screen12.RC();",
    '"Слишком подозрительное предложение. Мы же едва знакомы!"', "screen12.RB();",
    '"Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей"', "screen12.RB();",
    "screen48bEn.calculateDirection4bEn();"
)