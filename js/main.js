const startElements = document.querySelectorAll('.start');
const mainElements = document.querySelectorAll('.main');
function StartQuest() {
    for (const startElement of startElements){
        startElement.style.display = 'none';
    }
    for (const mainElement of mainElements){
        mainElement.style.display = '';
    }
}

function FinishQuest() {
    document.getElementById('main-form').style.display = 'none';
    document.getElementById('ending-form').style.display = '';
}
//FinishQuest();

class MainContent {
    constructor(questionText, img, ans1, ans1c, ans2, ans2c, ans3, ans3c, ans4, ans4c, nextStep, state){
        this.questionText = questionText;
        this.img = img;
        this.ans1 = [ans1, ans1c];
        this.ans2 = [ans2, ans2c];
        this.ans3 = [ans3, ans3c];
        this.ans4 = [ans4, ans4c];
        this.nextStep = nextStep;
        this.state = state;
    }

    changeContent(){
        document.getElementById('question').innerHTML = this.questionText;
        document.getElementById('img').src = this.img;
        document.getElementById('ans1').innerHTML = this.ans1[0];
        document.getElementById('ans2').innerHTML = this.ans2[0];
        document.getElementById('ans3').innerHTML = this.ans3[0];
        document.getElementById('ans4').innerHTML = this.ans4[0];        
        document.getElementById('btn1').setAttribute('onclick', this.nextStep + ' ' + this.ans1[1]);
        document.getElementById('btn2').setAttribute('onclick', this.nextStep + ' ' + this.ans2[1]);
        document.getElementById('btn3').setAttribute('onclick', this.nextStep + ' ' + this.ans3[1]);
        document.getElementById('btn4').setAttribute('onclick', this.nextStep + ' ' + this.ans4[1]);
    }

    A(){
        MainContent.countA += 1;
        console.log("A - " + MainContent.countA);
    }

    B(){
        MainContent.countB += 1;
        console.log("B - " + MainContent.countB);
    }

    calculateDirection(){
        if (MainContent.countA >= MainContent.countB) {
            screen1.changeContent();
        }
        else{
            screen2.changeContent();
        }
    }

}

MainContent.countA = 0;
MainContent.countB = 0;



let screen1 = new MainContent(
    "Тест", 
    "https://images.wallpaperscraft.ru/image/ptitsa_siluet_vektor_134154_1920x1080.jpg",
    "Ответ 1", "screen1.A()",
    "Ответ 2", "screen1.B()",
    "Ответ 3", "screen1.B()",
    "Ответ 4", "screen1.A()",
    "screen2.changeContent();",
    "main"
)

let screen2 = new MainContent(
    "Тест2", 
    "https://images8.alphacoders.com/876/876413.jpg",
    "Ответ 21", "screen1.A()",
    "Ответ 22", "screen1.B()",
    "Ответ 23", "screen1.B()",
    "Ответ 24", "screen1.A()",
    "screen2.calculateDirection();",
    "main"
)



console.log(screen1.ans1);
//screen1.changeContent();