let startElements = document.querySelectorAll('.start');
let mainElements = document.querySelectorAll('.main');
let loadElements = document.querySelectorAll('.load');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// document.getElementById("fb-share").addEventListener('mouseover', FbShareIn);
// document.getElementById("fb-share").addEventListener('mouseout', FbShareOut);
// function FbShareIn(){
//     document.getElementById("fb-share").src = "/img/fb-h.png";
// }
// function FbShareOut(){
//     document.getElementById("fb-share").src = "/img/facebook.png";
// }

// document.getElementById("tw-share").addEventListener('mouseover', TwShareIn);
// document.getElementById("tw-share").addEventListener('mouseout', TwShareOut);
// function TwShareIn(){
//     document.getElementById("tw-share").src = "/img/tw-h.png";
// }
// function TwShareOut(){
//     document.getElementById("tw-share").src = "/img/twitter.png";
// }

// document.getElementById("vk-share").addEventListener('mouseover', VkShareIn);
// document.getElementById("vk-share").addEventListener('mouseout', VkShareOut);
// function VkShareIn(){
//     document.getElementById("vk-share").src = "/img/vk-h.png";
// }
// function VkShareOut(){
//     document.getElementById("vk-share").src = "/img/vk.png";
// }

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
    document.getElementById('ans3').innerHTML = "Come on, you're a robot! Check out my face in your databases and you'll see that I'm already 14."
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
    
    document.querySelector('.loading-label').innerHTML = 'Lights go dim and a voice tells you that you have been accepted to the super-awesome School of the Future!';
    document.querySelector('.loading-text').innerHTML = "We've found our who you can be at our school. Would you like to know your result?";
    document.querySelector('.loading-btn_text').innerHTML = 'Show me!';
    document.querySelector('.share-text').innerHTML = 'Share with your friends';
    document.querySelector('.ending-form-top_text').innerHTML = 'Predict that...';
    

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
    await sleep(10000);
    document.getElementById('ending-fact_img').style.opacity = '1';
    document.getElementById('ending-fact_img').style.right = '-23vw';
    document.getElementById('ending-fact_img').style.top = '3vw';
    document.getElementById('ending-fact_img').style.transform = 'rotate(0deg)';
}


async function ChangeLangEn(){
    for (const startElement of startElements){
        startElement.style.opacity = '0';
    }
    await sleep(500);
    document.getElementById('start-label').innerHTML = "JOURNEY TO THE SCHOOL OF&nbspTHE&nbspFUTURE"
    document.getElementById('start-text').innerHTML = "This is an invitation to visit the greatest School of the Future. Here you can find out what professions from the IT sphere would suit you. It is not easy to get accepted to our school! First, let's check your abilities"
    document.querySelector('.start-btn_text').innerHTML = "Find out who I am in the IT world"
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
    document.getElementById('start-label').innerHTML = "ПУТЕШЕСТВИЕ в&nbspDIGITAL-ШКОЛУ"
    document.getElementById('start-text').innerHTML = "Это приглашение в&nbspсамую крутую школу будущего на день открытых дверей. Здесь ты сможешь узнать, какие профессии из мира IT тебе подходят. в&nbspнашу школу попасть непросто. Сначала мы проверим твои силы."
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
    'Твоё воображение безгранично! Если бы судьба мира была в&nbspтвоих руках, он был бы наполнен роботами-волшебниками и&nbspлетающими рыбами',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запрягу своего&nbspдракона!',
    '/img/i1.png',
    "Ну что, готов(а) учиться в&nbspнашей школе?",
    "В будущем ты станешь одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)


let result2 = new ResultContent(
    'Ты — повелитель живых картин',
    '<br>Ты легко создашь крутейший видеоблог или&nbspфильм — настоящие профессионалы уже хотят с&nbspтобой сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включу',
    '/img/i2.png',
    "Ну что, готов(а) учиться в&nbspнашей школе?",
    "В будущем ты станешь одним из этих мастеров: мультипликатор, режиссёр или клипмейкер"
)

let result3 = new ResultContent(
    'Ты — хранитель таинственных языков',
    'Благодаря железной логике ты сможешь подчинить любого робота. Стоит тебе выучить хотя бы&nbspодин их язык — и&nbspони завоюют для тебя мир',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! Давно пора научиться общаться&nbspс&nbspхолодильником',
    '/img/i3.png',
    "Ну что, готов(а) учиться в&nbspнашей школе?",
    "В будущем ты станешь создателем игр или разработчиком программного обеспечения"
)

let result4 = new ResultContent(
    'Ты — повелитель веб-страниц',
    'Довольствоваться малым – не про тебя! Твои амбиции поможет реализовать великий интернет. Там&nbspты&nbspсоздашь всё, что задумаешь',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! Надо только найти подходящие&nbspботинки...&nbspв&nbspинтернете',
    '/img/i4.png',
    "Ну что, готов(а) учиться в&nbspнашей школе?",
    "В будущем ты станешь веб-разработчиком и&nbspсоздашь много хороших сайтов"
)

let result5 = new ResultContent(
    'Ты — мастер тёмных секретов',
    'Твоей внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от твоих зорких глаз',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Посмотрим, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, готов(а) учиться в&nbspнашей школе?",
    "В будущем ты станешь одним из этих мастеров: криптоаналитик, хакер или системный администратор"
)

let result1p = new ResultContent(
    'Ваш ребёнок — творец виртуальных миров',
    'Его воображение безгранично! Если бы судьба мира была в&nbspего руках, он был бы наполнен роботами-волшебниками и&nbspлетающими рыбами',
    '/img/r1.png',
    '/img/bg1.png',
    'Да! Только сначала запряжет своего&nbspдракона',
    '/img/i1.png',
    "Ну что, он готов учиться в&nbspнашей школе?",
    "В будущем он станет одним из этих мастеров: 3D-моделлер, художник компьютерной графики или геймдизайнер"
)


let result2p = new ResultContent(
    'Ваш ребёнок — повелитель живых картин',
    'Он легко создаст крутейший видеоблог или&nbspфильм — настоящие&nbspпрофессионалы уже хотят сотрудничать!',
    '/img/r2.png',
    '/img/bg2.png',
    'Да! Подождите, только камеру включит',
    '/img/i2.png',
    "Ну что, он готов учиться в&nbspнашей школе?",
    "В будущем он станет одним из этих мастеров: мультипликатор, режиссёр или клипмейкер"
)

let result3p = new ResultContent(
    'Ваш&nbspребёнок&nbsp—&nbspхранитель таинственных&nbspязыков',
    'Благодаря железной логике он сможет подчинить себе любого робота. Ему достаточно выучить хотя бы один их язык — и&nbspон завоюет мир',
    '/img/r3.png',
    '/img/bg3.png',
    'Да! Давно пора научиться общаться с&nbspхолодильником',
    '/img/i3.png',
    "Ну что, он готов учиться в&nbspнашей школе?",
    "В будущем он станет создателем игр или разработчиком программного обеспечения "
)

let result4p = new ResultContent(
    'Ваш ребёнок — повелитель веб-страниц&nbsp&nbsp',
    'Довольствоваться малым –не про него! Его амбиции поможет реализовать великий интернет. Там&nbspон&nbspсоздаст всё, что задумает',
    '/img/r4.png',
    '/img/bg4.png',
    'Да! Надо только найти подходящие&nbspботинки...&nbspв&nbspинтернете',
    '/img/i4.png',
    "Ну что, он готов учиться в&nbspнашей школе?",
    "В будущем он станет веб-разработчиком и&nbspсоздаст много хороших сайтов"
)

let result5p = new ResultContent(
    'Ваш ребёнок — мастер тёмных секретов',
    'Его внимательности позавидует любой сыщик! Ни одна тайна во всей вселенной не скроется от его зорких глаз',
    '/img/r5.png',
    '/img/bg5.png',
    'Да! Он посмотрит, есть ли у вас какие-нибудь секреты...',
    '/img/i5.png',
    "Ну что, он готов учиться в&nbspнашей школе?",
    "В будущем он станет одним из этих мастеров: криптоаналитик, хакер или системный администратор"
)

// ENGLISH RESULTS
let result1En = new ResultContent(
    'You are the Creator of Virtual Worlds!',
    'Your imagination knows no limits! If the world was in your hands, it would be filled with robot magicians and flying fish',
    '/img/r1.png',
    '/img/bg1.png',
    'Sure, just let me saddle up my dragon!',
    '/img/i1en.png',
    "So, are you ready to join our school?",
    "In the future you're going to be one of these specialists: 3D-modeller, graphic designer or game designer"
)


let result2En = new ResultContent(
    'You are the Master of Living Pictures',
    'You can easily create an awesome video blog or film&nbsp– professionals are already looking forward to&nbspcollaborating with you!',
    '/img/r2.png',
    '/img/bg2.png',
    'Yes, just let me turn on my camera',
    '/img/i2en.png',
    "So, are you ready to join our school?",
    "In the future you're going to be one of these specialists: animation artist, director or music video director"
)

let result3En = new ResultContent(
    'You are the Keeper of Mysterious Languages.',
    `Thanks to your logic you're able to bring any robot under control. And in case you learn at least one language of theirs – they'll conquer the world for you`,
    '/img/r3.png',
    '/img/bg3.png',
    `Yes! It's time to learn how to talk with&nbspthe&nbspfridge`,
    '/img/i3en.png',
    "So, are you ready to join our school?",
    "In the future you're going to be a software or game developer"
)


let result4En = new ResultContent(
    'You are the Master of Web Pages',
    'Settling for less is not your style! The Internet will help you to achieve your ambitions. There you can bring all your ideas to life',
    '/img/r4.png',
    '/img/bg4.png',
    'Yes! I just need to find the right shoes... on&nbspthe Internet',
    '/img/i4en.png',
    "So, are you ready to join our school?",
    "In the future you're going to be a web-developer and you'll create a lot of great websites"
)

let result5En = new ResultContent(
    'You are the Master of Dark Secrets',
    'Any detective would be jealous of your attentiveness! No mystery in this Universe can get past&nbspyour eyes',
    '/img/r5.png',
    '/img/bg5.png',
    "Yes! Let's see if you've got any secrets...",
    '/img/i5en.png',
    "So, are you ready to join our school?",
    "In the future you're going to be one of these specialists: cryptoanalyst, hacker or system administrator"
)


let result1pEn = new ResultContent(
    'Your child is the Creator of Virtual Worlds!',
    'His imagination knows no limits! If the world was in his hands, it would be filled with robot magicians and flying fish',
    '/img/r1.png',
    '/img/bg1.png',
    'Sure, just let him saddle up his dragon!',
    '/img/i1en.png',
    "So,  is he ready to join our school?",
    "In the future he's going to be one of these specialists: 3D-modeller, graphic designer or game designer"
)

let result2pEn = new ResultContent(
    'Your child is the Master of Living Pictures',
    'He can easily create an awesome video blog or film&nbsp– professionals are already looking forward to&nbspcollaborating with him',
    '/img/r2.png',
    '/img/bg2.png',
    'Yes, just let him turn on his camera',
    '/img/i2en.png',
    "So,  is he ready to join our school?",
    "In the future he's going to be one of these specialists: animation artist, director or music video director."
)

let result3pEn = new ResultContent(
    'Your child is the Keeper of Mysterious Languages',
    "Thanks to his logic he is able to bring any robot under control. And in case he learn at least one language of theirs – they'll conquer the world for him",
    '/img/r3.png',
    '/img/bg3.png',
    "Yes! It's time for him to learn how to talk with&nbspthe&nbspfridge",
    '/img/i3en.png',
    "So,  is he ready to join our school?",
    "In the future he's going to be a software or game developer"
)

let result4pEn = new ResultContent(
    'Your child is the Master of Web Pages',
    'Settling for less is not his style! The Internet will help him to achieve his ambitions. There he can bring all his ideas to life',
    '/img/r4.png',
    '/img/bg4.png',
    'Yes! I just need to find the right shoes for&nbsphim... on&nbspthe Internet',
    '/img/i4en.png',
    "So,  is he ready to join our school?",
    "In the future he's going to be a web-developer and he'll create a lot of great websites"
)

let result5pEn = new ResultContent(
    'Your child is the Master of Dark Secrets',
    'Any detective would be jealous of his attentiveness! No mystery in this Universe can get past his eyes',
    '/img/r5.png',
    '/img/bg5.png',
    "Yes! Let him see if you've got any secrets...",
    '/img/i5en.png',
    "So,  is he ready to join our school?",
    "In the future he's going to be one of these specialists: cryptoanalyst, hacker or system administrator"
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
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили как. Что будешь делать?",
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберёмся", "screen12.B();",
    "screen13.changeContent();"
)

let screen13 = new MainContent(
    "Ты поднимаешься и&nbspпопадаешь в&nbspбольшой просторный зал, но здесь никого и&nbspтолько маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.jpg",
    "Поищу в&nbspинтернете, что это может быть", "screen12.B();",
    "Чёрная коробка? Украшу её фломастерами и&nbspблёстками, конечно же", "screen12.A();",
    "Сфоткаю и&nbspотправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну её ногой и&nbspпосмотрю, что будет", "screen12.B();",
    "screen14.changeContent();"
)

let screen14 = new MainContent(
    "Внезапно из коробки доносится голос: «Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в&nbspнашу школу?»", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвесёлое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в&nbspшколе вряд ли будет опасным, так&nbspчто давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen14.calculateDirection1();"
)

let screen15a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как&nbspпоступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и&nbspразошлю всем друзьям — <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в&nbspодной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в&nbspкино с искателями сокровищ!", "screen12.RB();",
    "screen16a.changeContent();"
)

let screen16a = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное", "screen12.RA();",
    "Что-то становится слишком похоже на&nbspфильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие? Посмотрим", "screen12.RA();",
    "Ещё и&nbspудивительные существа? Это точно<br> нужно выложить на ютуб!", "screen12.RB();",
    "screen17a.changeContent();"
)

let screen17a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и&nbspвсё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в&nbspколлектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen18a.changeContent();"
)

let screen18a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen18a.calculateDirection1a();"
)

let screen15b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как&nbspпоступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, её можно взломать", "screen12.RA();",
    "Всё можно найти в&nbspинтернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen16b.changeContent();"
)

let screen16b = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и&nbspпосмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RC();",
    "Взломаю камеры и&nbspпосмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen17b.changeContent();"
)

let screen17b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдёт", "screen12.RB();",
    "Конечно же, начну налаживать контакт. Эй, ребят, в&nbspкакие игры играете?", "screen12.RC();",
    "Так, главное — не вызывая подозрений выведать, кто они и&nbspчто тут делают", "screen12.RA();",
    "Если они прилетели на Землю, то может и&nbspя смогу полететь на их планету!", "screen12.RC();",
    "screen18b.changeContent();"
)

let screen18b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen18b.calculateDirection1b();"
)

// 10 - 14 ЛЕТ

let screen22 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили как. Что будешь делать?", 
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберёмся", "screen12.B();",
    "screen23.changeContent();"
)

let screen23 = new MainContent(
    "Ты поднимаешься и&nbspпопадаешь в&nbspбольшой просторный зал, но здесь никого и&nbspтолько маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.jpg",
    "Поищу в&nbspинтернете, что это может быть", "screen12.B();",
    "Чёрная коробка? Украшу её фломастерами и&nbspблёстками, конечно же", "screen12.A();",
    "Сфоткаю и&nbspотправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну её ногой и&nbspпосмотрю, что будет", "screen12.B();",
    "screen24.changeContent();"
)

let screen24 = new MainContent(
    "Внезапно из коробки доносится голос: «Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в&nbspнашу школу?»", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвесёлое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в&nbspшколе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen24.calculateDirection2();" //!
)

let screen25a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как&nbspпоступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и&nbspразошлю всем друзьям — <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в&nbspодной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в&nbspкино с искателями сокровищ!", "screen12.RB();",
    "screen26a.changeContent();"
)

let screen26a = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное. Нет, лучше из научной фантастики", "screen12.RA();",
    "Что-то становится слишком похоже на фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие или голографические? Посмотрим", "screen12.RA();",
    "Ещё и&nbspудивительные существа? Да я взорву ютуб!", "screen12.RB();",
    "screen27a.changeContent();"
)

let screen27a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и&nbspвсё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в&nbspколлектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen28a.changeContent();"
)

let screen28a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28a.calculateDirection1a();"
)

let screen25b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как&nbspпоступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, её можно взломать", "screen12.RA();",
    "Всё можно найти в&nbspинтернете! Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen26b.changeContent();"
)

let screen26b = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и&nbspпосмотрю, это точно не будет опасно", "screen12.RB();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RC();",
    "Взломаю камеры и&nbspпосмотрю, что там такое", "screen12.RA();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RB();",
    "screen27b.changeContent();"
)

let screen27b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдёт", "screen12.RB();",
    "Конечно же, начну налаживать отношения. Эй, ребят, а вы есть ВКонтакте?", "screen12.RC();",
    "Так, главное — не вызывая подозрений выведать, кто они и&nbspчто тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RC();",
    "screen28b.calculateDirection27b();"
)

let screen28bZ = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen28b.calculateDirection2b();"
)

let screen28b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "screen12.RA();",
    "Да! Поскорей бы выложить фотки с другой планеты...", "screen12.RC();",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "screen12.RB();",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "screen12.RB();",
    "screen28b.calculateDirection2b();"
)

// 14 - 17 ЛЕТ

let screen32 = new MainContent(
    "Тебе сказали, что нужно подняться на 118 этаж, но не объяснили как. Что будешь делать?", 
    "/img/2q.jpg",
    "Найду лестницу, отличный повод размяться!", "screen12.B();",
    "Вызову личного дракона, конечно", "screen12.A();",
    "В школе будущего точно должен быть телепорт.<br> О, вот же он!", "screen12.A();",
    "Ну, для начала подключусь к wi-fi, а там разберёмся", "screen12.B();",
    "screen33.changeContent();"
)

let screen33 = new MainContent(
    "Ты поднимаешься и&nbspпопадаешь в&nbspбольшой просторный зал, но здесь никого и&nbspтолько маленькая чёрная коробка посреди зала. Что с ней делать?", 
    "/img/3q.jpg",
    "Поищу в&nbspинтернете, что это может быть", "screen12.B();",
    "Чёрная коробка? Украшу её фломастерами и&nbspблёстками, конечно же", "screen12.A();",
    "Сфоткаю и&nbspотправлю друзьям, чтоб помогли", "screen12.A();",
    "Пну её ногой и&nbspпосмотрю, что будет", "screen12.B();",
    "screen34.changeContent();"
)

let screen34 = new MainContent(
    "Внезапно из коробки доносится голос: «Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в&nbspнашу школу?»", 
    "/img/4q.jpg",
    "Я могу выбирать? Тогда давайте самое простое и&nbspвесёлое!", "screen12.B();",
    "Любое, только подождите, камеру включу,<br> чтоб влог записать", "screen12.A();",
    "Ну испытание в&nbspшколе вряд ли будет опасным, так что давайте любое", "screen12.B();",
    "Давайте всё, что угодно! Кроме математики...", "screen12.A();",
    "screen34.calculateDirection3();" //!
)

let screen35a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как&nbspпоступишь?", 
    "/img/5q.jpg",
    "Ну… попробую найти логику. Вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Сниму на камеру и&nbspразошлю всем друзьям — <br>пусть помогают", "screen12.RB();",
    "Кажется, что-то похожее было в&nbspодной из миллиона игр, в&nbspкоторые я играл…", "screen12.RA();",
    "Ого, шифры! Прям как в&nbspкино с искателями сокровищ!", "screen12.RB();",
    "screen36a.changeContent();"
)

let screen36a = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Надеюсь, это что-то сказочное. Нет, лучше из научной фантастики", "screen12.RA();",
    "Что-то становится слишком похоже на фильм ужасов...", "screen12.RB();",
    "Интересно, они настоящие или голографические? Посмотрим", "screen12.RA();",
    "Еще и&nbspудивительные существа? Да я взорву ютуб!", "screen12.RB();",
    "screen37a.changeContent();"
)

let screen37a = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Скорее фоткать! Иначе мне точно никто не поверит", "screen12.RB();",
    "Начну расспрашивать их про планету, с которой<br> они прилетели", "screen12.RA();",
    "Мирные? Я помню все фильмы про инопланетян<br> и&nbspвсё-таки буду поосторожнее", "screen12.RB();",
    "Ого, сколько у них глаз? Надо бы влиться в&nbspколлектив и&nbspпоближе их рассмотреть...", "screen12.RA();",
    "screen38a.changeContent();"
)

let screen38a = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38a.calculateDirection3a();"
)

let screen35b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как&nbspпоступишь?", 
    "/img/5q.jpg",
    "Да запросто расшифрую!", "screen12.RA();",
    "Ну… попробую найти логику. Вот этот значок похож на смешную рожицу", "screen12.RA();",
    "Попрошу помощи у друзей, не зря же изобрели соцсети", "screen12.RB();",
    "Всё можно найти в&nbspинтернете! Ну или хотя бы что-то похожее...", "screen12.RB();",
    "screen36b.changeContent();"
)

let screen36b = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что&nbspдумаешь?", 
    "/img/6q.jpg",
    "Да просто пойду и&nbspпосмотрю, это точно не будет опасно", "screen12.RA();",
    "Надо подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RB();",
    "Найду трансляцию с камер и&nbspпосмотрю, что там такое", "screen12.RB();",
    "В дальних коридорах обычно держат что-то страшное. Надо найти что-нибудь для защиты", "screen12.RA();",
    "screen37b.changeContent();"
)

let screen37b = new MainContent(
    "В дальнем коридоре тебя встречают… инопланетяне! Кажется, они вполне мирные, как будешь себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздороваюсь, а там как пойдёт", "screen12.RA();",
    "Конечно же, начну налаживать контакт. Эй, ребят, а вы есть в&nbspинстаграме?", "screen12.RB();",
    "Так, главное — не вызывая подозрений выведать, кто они и&nbspчто тут делают", "screen12.RA();",
    "Поищу на сайте, можно ли тоже стать студентом по межпланетному обмену!", "screen12.RB();",
    "screen38b.changeContent();"
)

let screen38b = new MainContent(
    "После недолгого общения новые знакомые приглашают тебя в&nbspгости на свою планету. Что&nbspответишь?", 
    "/img/8q.jpg",
    "Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ", "",
    "Да! Поскорей бы выложить фотки с другой планеты...", "",
    "Слишком подозрительное предложение. Мы же едва знакомы!", "",
    "Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей", "",
    "screen38b.calculateDirection3b();"
)

// РОДИТЕЛИ

let screen42 = new MainContent(
    "Что ж, тогда давайте посмотрим, как хорошо Вы знаете своего ребёнка. Ему сказали, что нужно подняться на 118 этаж. Что он будет делать?", 
    "/img/2q.jpg",
    "Найдёт лестницу, это отличный повод размяться!", "screen12.B();",
    "Вызовет личного дракона, конечно", "screen12.A();",
    "Решит, что школе будущего точно должен быть телепорт, и&nbspнайдёт его", "screen12.A();",
    "Ну, для начала подключится к wi-fi, а там разберётся", "screen12.B();",
    "screen43.changeContent(); document.querySelector('.loading-label').innerHTML = 'Свет гаснет и&nbspголос сообщает, что ваш ребёнок был бы успешно принят в&nbspсуперкрутую школу будущего!'; document.querySelector('.loading-text').innerHTML = 'Мы выяснили, кем он мог бы стать в&nbspнашей школе! Хотите узнать результаты?';"
)

let screen43 = new MainContent(
    "Ваш ребёнок поднимается и&nbspпопадает в&nbspбольшой зал, но здесь никого и&nbspтолько маленькая чёрная коробка посреди зала. Что он будет с ней делать?", 
    "/img/3q.jpg",
    "Поищет в&nbspинтернете, что это может быть", "screen12.B();",
    "Чёрная коробка? Украсит её фломастерами и&nbspблёстками, конечно же", "screen12.A();",
    "Сфоткает и&nbspотправит друзьям, чтоб помогли", "screen12.A();",
    "Пнёт её ногой и&nbspпосмотрит, что будет", "screen12.B();",
    "screen44.changeContent();"
)

let screen44 = new MainContent(
    "Внезапно из коробки доносится голос: «Ну что, юный ученик, какое испытание ты готов выполнить, чтобы попасть в&nbspнашу школу?» Что ответит Ваш ребёнок?", 
    "/img/4q.jpg",
    '«Я могу выбирать? Тогда давайте самое простое и&nbspвеселое!»', "screen12.B();",
    '«Любое, только подождите, камеру включу, чтоб влог записать»', "screen12.A();",
    '«Ну испытание в&nbspшколе вряд ли будет опасным, так что давайте любое»', "screen12.B();",
    '«Давайте всё, что угодно! Кроме математики...»', "screen12.A();",
    "screen44.calculateDirection4();" //!
)

let screen45a = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступит Ваш ребёнок?", 
    "/img/5q.jpg",
    "Ну… попробует найти логику. Например, что вот этот значок похож на&nbspсмешную рожицу", "screen12.RA();",
    "Снимет на камеру и&nbspразошлет всем друзьям — <br>пусть помогают", "screen12.RB();",
    "Что-то похожее наверняка было в&nbspодной из миллиона игр, в&nbspкоторые он играл…", "screen12.RA();",
    "Будет в&nbspвосторге, это же шифры! Прям как в&nbspкино с искателями сокровищ", "screen12.RB();",
    "screen46a.changeContent();"
)

let screen46a = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что решит Ваш ребёнок?", 
    "/img/6q.jpg",
    "Понадеется, что это что-то сказочное. Нет, лучше из научной фантастики", "screen12.RA();",
    "Решит, что это становится слишком похоже на&nbspкакой-то фильм ужасов...", "screen12.RB();",
    "Захочет поскорее узнать, они настоящие или голографические", "screen12.RA();",
    'Наверняка подумает: «Еще и&nbspудивительные существа? Да&nbspя&nbspвзорву&nbspютуб!»', "screen12.RB();",
    "screen47a.changeContent();"
)

let screen47a = new MainContent(
    "В дальнем коридоре Вашего ребёнка встречают… инопланетяне! Кажется, они вполне мирные, как&nbspон&nbspбудет себя вести?", 
    "/img/7q.jpg",
    "Сразу станет фоткать! Иначе ему же никто не поверит", "screen12.RB();",
    "Начнёт расспрашивать их про планету, с&nbspкоторой они&nbspприлетели", "screen12.RA();",
    "Мирные? Он смотрел все фильмы про инопланетян и&nbspвсё&#8209;таки будет поосторожнее", "screen12.RB();",
    "Они же не похожи на людей! Он постарается влиться в&nbspколлектив и&nbspпоближе их рассмотреть", "screen12.RA();",
    "screen48a.changeContent();"
)

let screen48a = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребёнка в&nbspгости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.jpg",
    '«Сначала найду всю-всю информацию о них и&nbspих планете, а&nbspпотом уже дам ответ»', "",
    '«Да! Поскорей бы выложить фотки с другой планеты...»', "",
    '«Слишком подозрительное предложение. Мы же едва знакомы!»', "",
    '«Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей»', "",
    "screen48a.calculateDirection4a();"
)

let screen45b = new MainContent(
    "Посреди зала загорается большой экран с картой и&nbspтекстом, но все надписи зашифрованы. Как поступит Ваш ребёнок?", 
    "/img/5q.jpg",
    "Да запросто расшифрует", "screen12.RA();",
    "Ну… попробует найти логику. Например, что вот этот значок похож на смешную рожицу", "screen12.RB();",
    "Это же всего лишь программа, её можно взломать", "screen12.RA();",
    "Всё сможет найти в&nbspинтернете. Ну или хотя бы что-то похожее...", "screen12.RC();",
    "screen46b.changeContent();"
)

let screen46b = new MainContent(
    "Расшифрованное послание получилось таким: «Отправляйся в&nbspдальний коридор и&nbspпознакомься с удивительными существами». Что решит Ваш ребёнок?", 
    "/img/6q.jpg",
    "Да просто пойдёт и&nbspпосмотрит, это точно не будет опасно", "screen12.RB();",
    "Решит подробнее изучить сайт этой школы. Там, наверное, и&nbspпро этих существ написано", "screen12.RC();",
    "Взломает камеры и&nbspпосмотрит, что там такое", "screen12.RA();",
    "Сначала найдёт что-нибудь для защиты", "screen12.RB();",
    "screen47b.changeContent();"
)

let screen47b = new MainContent(
    "В дальнем коридоре Вашего ребёнка встречают… инопланетяне! Кажется, они вполне мирные, как он будет себя вести?", 
    "/img/7q.jpg",
    "Ну, для начала поздоровается, а там как пойдёт", "screen12.RB();",
    "Конечно же, начнёт налаживать отношения и&nbspузнает, есть ли они вконтакте", "screen12.RC();",
    "Главное для него будет не вызывая подозрений<br>выведать, кто они и&nbspчто тут делают", "screen12.RA();",
    "Поищет на сайте, можно ли тоже стать студентом по межпланетному обмену", "screen12.RC();",
    "screen48b.calculateDirection47b();"
)

let screen48bZ = new MainContent(
    "После недолгого общения новые знакомые приглашают ребёнка в&nbspгости на свою планету. Что он ответит?", 
    "/img/8q.jpg",
    "«Сначала найду всю-всю информацию о них и&nbspих планете, а потом уже дам ответ»", "",
    "«Да! Поскорей бы выложить фотки с другой планеты...»", "",
    "«Слишком подозрительное предложение. Мы же едва знакомы!»", "",
    "«Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей»", "",
    "screen28b.calculateDirection4b();"
)

let screen48b = new MainContent(
    "После недолгого общения новые знакомые приглашают Вашего ребёнка в&nbspгости на свою планету. Что&nbspон&nbspответит?", 
    "/img/8q.jpg",
    '«Сначала найду всю-всю информацию о них и&nbspих планете, а потом уже дам ответ»', "screen12.RA();",
    '«Да! Поскорей бы выложить фотки с другой планеты...»', "screen12.RC();",
    '«Слишком подозрительное предложение. Мы же едва знакомы!»', "screen12.RB();",
    '«Хорошо, но сначала мне нужно собрать все свои вещи и&nbspобязательно захватить пару друзей»', "screen12.RB();",
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
    "You get upstairs and find yourself in a large room, but there's nobody there except for a small black box right in the middle of the room. What are you going to do with it?", 
    "/img/3q.jpg",
    "I'll search the Internet to find out what it is.", "screen12.B();",
    "A black box? Of course I'll decorate it with markers and glitter", "screen12.A();",
    "I'll take a pic and send it to my friends so&nbspthey could help.", "screen12.A();",
    "I'll kick it and see what happens!", "screen12.B();",
    "screen14En.changeContent();"
)

let screen14En = new MainContent(
    "Suddenly you hear a voice from the box: «So, young student, what test are you ready to take to get into our school?»", 
    "/img/4q.jpg",
    "Oh, so&nbspI can choose? I'd like the one that's most fun and easy!", "screen12.B();",
    "Any, just give me a moment so&nbspI could turn on my&nbspcamera to record my vlog", "screen12.A();",
    "A test at school probably isn't going to be tough, so&nbspI'm OK with any", "screen12.B();",
    " Any will do! Except for maths...", "screen12.A();",
    "screen14En.calculateDirection1En();"
)

let screen15aEn = new MainContent(
    "A big screen lights up in the middle of the room with some text on it, but all the text is encrypted. What are you going to do?", 
    "/img/5q.jpg",
    "Well... I'll try to find some patterns. This sign here looks like a funny face", "screen12.RA();",
    "I'll take a pic and send it to my friends for help", "screen12.RB();",
    "I think I've seen something similar in one of the&nbspcomputer games I've played...", "screen12.RA();",
    "Wow, an ecnryption! Just like in the treasure hunt movies!", "screen12.RB();",
    "screen16aEn.changeContent();"
)

let screen16aEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What do you think?", 
    "/img/6q.jpg",
    "I hope it's something from a fairy tale", "screen12.RA();",
    "It's starting to feel like some kind of a horror movie...", "screen12.RB();",
    "I wonder if they're real. Let's see!", "screen12.RA();",
    "Wow, fantastic creatures, really? This needs to go on YouTube! ", "screen12.RB();",
    "screen17aEn.changeContent();"
)

let screen17aEn = new MainContent(
    "In the farthest corridore you meet... aliens! They seem quite peaceful, so&nbsphow are you going to behave?", 
    "/img/7q.jpg",
    "I must take a picture immeadiately or nobody is&nbspgoing to believe me!", "screen12.RB();",
    "I'll ask them questions about the planet where they came from", "screen12.RA();",
    "Peaceful, huh? I remember all the films about aliens, so&nbspI'll be careful", "screen12.RB();",
    "Wow, how many eyes do they have? I should joing their company and have a closer look", "screen12.RA();",
    "screen18aEn.changeContent();"
)

let screen18aEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "",
    "Sounds suspicious. We've only just met!", "",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "",
    "screen18aEn.calculateDirection1aEn();"
)

let screen15bEn = new MainContent(
    "A big screen lights up in the middle of the room with some text on it, but all the text is encrypted. What are you going to do?", 
    "/img/5q.jpg",
    "I'll just decipher it!", "screen12.RA();",
    "Well... I'll try to find some patterns. This sign here looks like a funny face", "screen12.RB();",
    "It's just a program, it can be hacked", "screen12.RA();",
    "You can find everything on the Internet! Well,&nbspat&nbspleast something similar...", "screen12.RC();",
    "screen16bEn.changeContent();"
)

let screen16bEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What do you think?", 
    "/img/6q.jpg",
    "I'll just go and see, it isn't probably going to be dangerous", "screen12.RB();",
    "I need to check the website of this school. They must have something about these creatures there", "screen12.RC();",
    "I'll hack the survelliance cameras and see what they have there", "screen12.RA();",
    "Usually the scary stuff is kept in far corridors. I'd&nbspbetter find something for protection", "screen12.RB();",
    "screen17bEn.changeContent();"
)

let screen17bEn = new MainContent(
    "In the farthest corridore you meet... aliens! They seem quite peaceful, so&nbsphow are you going to behave?", 
    "/img/7q.jpg",
    "Well, first I'll say 'Hi' and just see what happens", "screen12.RB();",
    "I'll try to establish contact, obviously. Hey, guys, what games do you like to play?", "screen12.RC();",
    "I should try to find out who they are and what their business is, without getting them suspicious", "screen12.RA();",
    "If they came to Earth then maybe I can go to their planet!", "screen12.RC();",
    "screen18bEn.changeContent();"
)

let screen18bEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "screen12.RA();",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "screen12.RC();",
    "Sounds suspicious. We've only just met!", "screen12.RB();",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "screen12.RB();",
    "screen18bEn.calculateDirection1bEn();"
)

// 10 - 14 ЛЕТ

let screen22En = new MainContent(
    "You were told that you need to go to floor 118, but you don't know how. What are you going to do?", 
    "/img/2q.jpg",
    "I'll find the stairs – such a great chance for some exercise!", "screen12.B();",
    "I'll call my personal dragon, obviously.", "screen12.A();",
    "The School of the Future must have a teleport. Oh, right, there it is!", "screen12.A();",
    "Well, I'll connect to Wi-Fi first, and then we'll see...", "screen12.B();",
    "screen23En.changeContent();"
)

let screen23En = new MainContent(
    "You get upstairs and find yourself in a large room, but there's nobody there except for a small black box right in the middle of the room. What are you going to do with it?", 
    "/img/3q.jpg",
    "I'll search the Internet to find out what it is.", "screen12.B();",
    "A black box? Of course I'll decorate it with markers and glitter", "screen12.A();",
    "I'll take a pic and send it to my friends so&nbspthey could help.", "screen12.A();",
    "I'll kick it and see what happens!", "screen12.B();",
    "screen24En.changeContent();"
)

let screen24En = new MainContent(
    "Suddenly you hear a voice from the box: «So, young student, what test are you ready to take to get into our school?»", 
    "/img/4q.jpg",
    "Oh, so&nbspI can choose? I'd like the one that's most fun and easy!", "screen12.B();",
    "Any, just give me a moment so&nbspI could turn on my&nbspcamera to record my vlog", "screen12.A();",
    "A test at school probably isn't going to be tough, so&nbspI'm OK with any", "screen12.B();",
    " Any will do! Except for maths...", "screen12.A();",
    "screen24En.calculateDirection2En();" //!
)

let screen25aEn = new MainContent(
    "A big screen lights up in the middle of the room with some text on it, but all the text is encrypted. What are you going to do?", 
    "/img/5q.jpg",
    "Well... I'll try to find some patterns. This sign here looks like a funny face.", "screen12.RA();",
    "I'll take a photo and send it to all my friends so&nbspthat they can help.", "screen12.RB();",
    "I think I've seen something similar in one of the&nbspcomputer games I've played...", "screen12.RA();",
    "Wow, an ecnryption! Just like in the treasure hunt movies!", "screen12.RB();",
    "screen26aEn.changeContent();"
)

let screen26aEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What do you think?", 
    "/img/6q.jpg",
    "I hope it's something from a fairy tale. Or, even better, from sci-fi", "screen12.RA();",
    "It's starting to feel like some kind of a horror movie...", "screen12.RB();",
    "I wonder if they're real. Let's see!", "screen12.RA();",
    "Wow, fantastic creatures, really? This needs to go on YouTube! ", "screen12.RB();",
    "screen27aEn.changeContent();"
)

let screen27aEn = new MainContent(
    "In the farthest corridore you meet... aliens! They seem quite peaceful, so&nbsphow are you going to behave?", 
    "/img/7q.jpg",
    "I must take a picture immeadiately or nobody is&nbspgoing to believe me!", "screen12.RB();",
    "I'll ask them questions about the planet where they came from", "screen12.RA();",
    "Peaceful, huh? I remember all the films about aliens, so&nbspI'll be careful", "screen12.RB();",
    "Wow, how many eyes do they have? I should joing their company and have a closer look", "screen12.RA();",
    "screen28aEn.changeContent();"
)

let screen28aEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "",
    "Sounds suspicious. We've only just met!", "",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "",
    "screen28aEn.calculateDirection1aEn();"
)

let screen25bEn = new MainContent(
    "A big screen lights up in the middle of the room with some text on it, but all the text is encrypted. What are you going to do?", 
    "/img/5q.jpg",
    "I'll just decipher it!", "screen12.RA();",
    "Well... I'll try to find some patterns. This sign here looks like a funny face", "screen12.RB();",
    "It's just a program, it can be hacked", "screen12.RA();",
    "You can find everything on the Internet! Well,&nbspat&nbspleast something similar...", "screen12.RC();",
    "screen26bEn.changeContent();"
)

let screen26bEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What do you think?", 
    "/img/6q.jpg",
    "I'll just go and see, it isn't probably going to be dangerous", "screen12.RB();",
    "I need to check the website of this school. They must have something about these creatures there", "screen12.RC();",
    "I'll hack the survelliance cameras and see what they have there", "screen12.RA();",
    "Usually the scary stuff is kept in far corridors. I'd&nbspbetter find something for protection", "screen12.RB();",
    "screen27bEn.changeContent();"
)

let screen27bEn = new MainContent(
    "In the farthest corridore you meet... aliens! They seem quite peaceful, so&nbsphow are you going to behave?", 
    "/img/7q.jpg",
    "Well, first I'll say 'Hi' and just see what happens", "screen12.RB();",
    "I'll try to establish contact, obviously. Hey, guys, are you on Facebook?", "screen12.RC();",
    "I should try to find out who they are and what their business is, without getting them suspicious", "screen12.RA();",
    "I'll check if I can be an inter-plantery exchange student on the website!", "screen12.RC();",
    "screen28bEn.calculateDirection27bEn();"
)

let screen28bZEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "",
    "Sounds suspicious. We've only just met!", "",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "",
    "screen28bEn.calculateDirection2bEn();"
)

let screen28bEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "screen12.RA();",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "screen12.RC();",
    "Sounds suspicious. We've only just met!", "screen12.RB();",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "screen12.RB();",
    "screen28bEn.calculateDirection2bEn();"
)

// 14 - 17 ЛЕТ

let screen32En = new MainContent(
    "You were told that you need to go to floor 118, but you don't know how. What are you going to do?", 
    "/img/2q.jpg",
    "I'll find the stairs – such a great chance for some exercise!", "screen12.B();",
    "I'll call my personal dragon, obviously.", "screen12.A();",
    "The School of the Future must have a teleport. Oh, right, there it is!", "screen12.A();",
    "Well, I'll connect to Wi-Fi first, and then we'll see...", "screen12.B();",
    "screen33En.changeContent();"
)

let screen33En = new MainContent(
    "You get upstairs and find yourself in a large room, but there's nobody there except for a small black box right in the middle of the room. What are you going to do with it?", 
    "/img/3q.jpg",
    "I'll search the Internet to find out what it is.", "screen12.B();",
    "A black box? Of course I'll decorate it with markers and glitter", "screen12.A();",
    "I'll take a pic and send it to my friends so&nbspthey could help.", "screen12.A();",
    "I'll kick it and see what happens!", "screen12.B();",
    "screen34En.changeContent();"
)

let screen34En = new MainContent(
    "Suddenly you hear a voice from the box: «So, young student, what test are you ready to take to get into our school?»", 
    "/img/4q.jpg",
    "Oh, so&nbspI can choose? I'd like the one that's most fun and easy!", "screen12.B();",
    "Any, just give me a moment so&nbspI could turn on my&nbspcamera to record my vlog", "screen12.A();",
    "A test at school probably isn't going to be tough, so&nbspI'm OK with any", "screen12.B();",
    " Any will do! Except for maths...", "screen12.A();",
    "screen34En.calculateDirection3En();" //!
)

let screen35aEn = new MainContent(
    "A big screen lights up in the middle of the room with some text on it, but all the text is encrypted. What are you going to do?", 
    "/img/5q.jpg",
    "Well... I'll try to find some patterns. This sign here looks like a funny face.", "screen12.RA();",
    "I'll take a photo and send it to all my friends so&nbspthat they can help.", "screen12.RB();",
    "I think I've seen something similar in one of the&nbspcomputer games I've played...", "screen12.RA();",
    "Wow, an ecnryption! Just like in the treasure hunt movies!", "screen12.RB();",
    "screen36aEn.changeContent();"
)

let screen36aEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What do you think?", 
    "/img/6q.jpg",
    "I hope it's something from a fairy tale. Or, even better, from sci-fi.", "screen12.RA();",
    "It's starting to feel like some kind of a horror movie...", "screen12.RB();",
    "I wonder if they're real. Let's see!", "screen12.RA();",
    "Wow, fantastic creatures, really? This needs to go on YouTube! ", "screen12.RB();",
    "screen37aEn.changeContent();"
)

let screen37aEn = new MainContent(
    "In the farthest corridore you meet... aliens! They seem quite peaceful, so&nbsphow are you going to behave?", 
    "/img/7q.jpg",
    "I must take a picture immeadiately or nobody is&nbspgoing to believe me!", "screen12.RB();",
    "I'll ask them questions about the planet where they came from", "screen12.RA();",
    "Peaceful, huh? I remember all the films about aliens, so&nbspI'll be careful", "screen12.RB();",
    "Wow, how many eyes do they have? I should joing their company and have a closer look", "screen12.RA();",
    "screen38aEn.changeContent();"
)

let screen38aEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "",
    "Sounds suspicious. We've only just met!", "",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "",
    "screen38aEn.calculateDirection3aEn();"
)

let screen35bEn = new MainContent(
    "A big screen lights up in the middle of the room with some text on it, but all the text is encrypted. What are you going to do?", 
    "/img/5q.jpg",
    "I'll just decipher it!", "screen12.RA();",
    "Well... I'll try to find some patterns. This sign here looks like a funny face", "screen12.RA();",
    "It's just a program, it can be hacked", "screen12.RB();",
    "You can find everything on the Internet! Well,&nbspat&nbspleast something similar...", "screen12.RB();",
    "screen36bEn.changeContent();"
)

let screen36bEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What do you think?", 
    "/img/6q.jpg",
    "I'll just go and see, it isn't probably going to be dangerous", "screen12.RA();",
    "I need to check the website of this school. They must have something about these creatures there", "screen12.RB();",
    "I'll hack the survelliance cameras and see what they have there", "screen12.RB();",
    "Usually the scary stuff is kept in far corridors. I'd&nbspbetter find something for protection", "screen12.RA();",
    "screen37bEn.changeContent();"
)

let screen37bEn = new MainContent(
    "In the farthest corridore you meet... aliens! They seem quite peaceful, so&nbsphow are you going to behave?", 
    "/img/7q.jpg",
    "Well, first I'll say 'Hi' and just see what happens", "screen12.RA();",
    "I'll try to establish contact, obviously. Hey, guys, are you on Facebook?", "screen12.RB();",
    "I should try to find out who they are and what their business is, without getting them suspicious", "screen12.RA();",
    "I'll check if I can be an inter-plantery exchange student on the website!", "screen12.RB();",
    "screen38bEn.changeContent();"
)

let screen38bEn = new MainContent(
    "After you've talked a little, your new friends invite you to visit their planet. What are you going to answer?", 
    "/img/8q.jpg",
    "I'll try get all possible information about their planet before giving an answer", "",
    "Oh yes! I really want to post the photos from the&nbspother planet!", "",
    "Sounds suspicious. We've only just met!", "",
    "OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first", "",
    "screen38bEn.calculateDirection3bEn();"
)

// РОДИТЕЛИ

let screen42En = new MainContent(
    "Well, let's see, how well you know your child. They were told that they needed to go to floor 118, but wasn't explained how to do that. What will your child do?", 
    "/img/2q.jpg",
    "Find the stairs – such a great chance for some exercise!", "screen12.B();",
    "Call a personal dragon, obviously", "screen12.A();",
    "The School of the Future must have a teleport, so&nbsphe will find it", "screen12.A();",
    "Connect to Wi-Fi first, and work from there", "screen12.B();",
    "screen43En.changeContent(); document.querySelector('.loading-label').innerHTML = 'Lights go dim and a voice says that your child would pass the test and be admitted to the school of the future!'; document.querySelector('.loading-text').innerHTML = 'We found out who he could become in our school of the future! Would you like to know your result?';"
)

let screen43En = new MainContent(
    "Your child gets upstairs and finds himself in a large room, but there's nobody there except for a small black box right in the middle of the room. What will your child do?", 
    "/img/3q.jpg",
    "He'll search the Internet to find out what it is", "screen12.B();",
    "A black box? Get it decorated it with markers and glitter, of course", "screen12.A();",
    "He'll take a photo and send it to his friends so&nbspthey could help", "screen12.A();",
    "He'll kick it and see what happens!", "screen12.B();",
    "screen44En.changeContent();"
)

let screen44En = new MainContent(
    "Suddenly there's a voice from the box: «So, young student, what test are you ready to take to get into our school?» What will your child answer?", 
    "/img/4q.jpg",
    `«Oh, so&nbspI can choose? I'd like the one that's most fun and easy!»`, "screen12.B();",
    `«Any, just give me a moment so&nbspI could turn on my camera to record my vlog»`, "screen12.A();",
    `«A test at school probably isn't going to be tough, so&nbspI'm OK with any»`, "screen12.B();",
    '«Any will do! Except for maths...»', "screen12.A();",
    "screen44En.calculateDirection4En();" //!
)

let screen45aEn = new MainContent(
    "A big screen lights up in the middle of the room with a map and some text on it, but all the text is encrypted. What will your child do?", 
    "/img/5q.jpg",
    "Well... He'll try to find some patterns. This sign here looks like a funny face, for example", "screen12.RA();",
    "He'll take a photo and send it to all his friends so&nbspthat they can help", "screen12.RB();",
    "Something similar must have been in one of the million computer games he's played...", "screen12.RA();",
    "He'll be delighted, he loves ciphers! Just like in the treasure hunt movies!", "screen12.RB();",
    "screen46aEn.changeContent();"
)

let screen46aEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What will your child decide?", 
    "/img/6q.jpg",
    "He'll hope it's something from a fairy tale. Or, even better, from sci-fi", "screen12.RA();",
    "He'll think that it's starting to feel like some kind of a horror movie...", "screen12.RB();",
    "He'll want to know if they're real or gologrpahic", "screen12.RA();",
    `He'll definetely think: "Wow, fantastic creatures, really? This needs to go on YouTube!"`, "screen12.RB();",
    "screen47aEn.changeContent();"
)

let screen47aEn = new MainContent(
    "In the farthest corridore your child meets... aliens! They seem quite peaceful, so&nbsphow is he going to behave?", 
    "/img/7q.jpg",
    "He'll take a picture immeadiately to have proof for everybody", "screen12.RB();",
    "He'll ask them questions about the planet where they came from", "screen12.RA();",
    "Peaceful, huh? He's watched all the films about aliens, so&nbsphe'll be careful", "screen12.RB();",
    "They don't look like people at all! He'll try to join their comapny and have a closer look", "screen12.RA();",
    "screen48aEn.changeContent();"
)

let screen48aEn = new MainContent(
    "After a little talk, his new friends invited him to visit their planet. What is he going to answer?", 
    "/img/8q.jpg",
    `«I'll try get all possible information about their planet before giving an answer»`, "",
    '«Oh yes! I really want to post the photos from the&nbspother planet!»', "",
    `«Sounds suspicious. We've only just met!»`, "",
    '«OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first»', "",
    "screen48aEn.calculateDirection4aEn();"
)

let screen45bEn = new MainContent(
    "A big screen lights up in the middle of the room with a map and some text on it, but all the text is encrypted. What will your child do?", 
    "/img/5q.jpg",
    "He'll just decipher it.", "screen12.RA();",
    "Well... He'll try to find some patterns. This sign here looks like a funny face, for example", "screen12.RB();",
    "It's just a program, it can be hacked", "screen12.RA();",
    "You can find everything on the Internet! Well,&nbspat&nbspleast something similar...", "screen12.RC();",
    "screen46bEn.changeContent();"
)

let screen46bEn = new MainContent(
    "The deciphered message is this: «Go to the farthest corridor and meet some amazing creatures». What will your child decide?", 
    "/img/6q.jpg",
    "He'll just go and see, it isn't probably going to be dangerous", "screen12.RB();",
    "He'll decide to read the website of this school more carefully. They must have something about these creatures there", "screen12.RC();",
    "He'll hack the survelliance cameras and see what they have there", "screen12.RA();",
    "Usually the scary stuff is kept in far corridors. He'll find something for protection", "screen12.RB();",
    "screen47bEn.changeContent();"
)

let screen47bEn = new MainContent(
    "In the farthest corridore your child meets... aliens! They seem quite peaceful, so&nbsphow is he going to behave?", 
    "/img/7q.jpg",
    "Well, first he'll say «Hi» and then just see what happens", "screen12.RB();",
    "He'll try to establish contact, obviously, and ask them if they are on Facebook", "screen12.RC();",
    "He'll try to find out who they are and what their business is without getting them suspicious", "screen12.RA();",
    "He'll check if he can be an inter-plantery exchange student on the website!", "screen12.RC();",
    "screen48bEn.calculateDirection47bEn();"
)

let screen48bZEn = new MainContent(
    "After a little talk, his new friends invited him to visit their planet. What is he going to answer?", 
    "/img/8q.jpg",
    `«I'll try get all possible information about their planet before giving an answer»`, "",
    `«Oh yes! I really want to post the photos from the&nbspother planet!»`, "",
    `«Sounds suspicious. We've only just met!»`, "",
    `«OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first»`, "",
    "screen28bEn.calculateDirection4bEn();"
)

let screen48bEn = new MainContent(
    "After a little talk, his new friends invited him to visit their planet. What is he going to answer?", 
    "/img/8q.jpg",
    `«I'll try get all possible information about their planet before giving an answer»`, "screen12.RA();",
    `«Oh yes! I really want to post the photos from the&nbspother planet!»`, "screen12.RC();",
    `«Sounds suspicious. We've only just met!»`, "screen12.RB();",
    `«OK, but I need to pack a suitcase and grab a&nbspcouple of my friends first»`, "screen12.RB();",
    "screen48bEn.calculateDirection4bEn();"
)