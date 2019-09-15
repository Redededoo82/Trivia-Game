// Initial Values
var counter = 45;

var currentQuestion = 0;

var score = 0;

var timer;

var quizQuestions = [

    {

        question: 'How many Planet Earths are there?',
        choices: ['1,2,3,4'],
        correctAnswer: '1'
    },

    {  
        question: 'What is a Cat?',
        choices: ['a dog,a country,a feline, a stick of gum'],
        correctAnswer: 'a feline'
    },

    {

        question: 'What sound does a doggy make?',
        choices: ['gickoreee gee!,fa-wamp!,Woof!, hello!'],
        correctAnswer: 'Woof!'

    },

];
//Funktion that starts the timer to count down from 45
function countDown(){

    counter--;

    $('#time').html('Time' + counter);

}
// console.log(quizQuestions)

//Display the question and the choices in the Browser
function loadQuestion(){
    counter = 45;
    timer = setInterval(countDown, 1000);

    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;

    $('#time').html('Time:' + counter);
    $('#game').html('<h5>' + question + '</h5>'); 


}



    loadQuestion();
