



$('#beginbutton').on('click', function () {
    game.start();
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/bravesir.wav");
    audioElement.play();
    $('#rabbit').hide();
})

$(document).on('click','#end',function(){

    game.done();

})

var questions = [{

    question: 'What is your name?',
    answers: ['Bill', 'Montgomery', 'Arthur, King of the Britians', 'Toby'],
    correctAnswer: 'Arthur, King of the Britians'

}, {

    question: 'What is your quest?',
    answers: ['To seek the ark of the covenant', 'To make peace throughout the land', 'To seek the holy grail', 'None of these'],
    correctAnswer: ''

}, {

    question: 'What is your favorite color?',
    answers: ['black', 'clear', 'pink', 'blue...no yellow!'],
    correctAnswer: 'blue...no yellow!'

}, {

    question: 'In the "bring out your dead scene" an old woman can be seen beating what against the side of her house?',
    answers: ['her son', 'a cat', 'a rug', 'a coconut'],
    correctAnswer: 'a cat'

}, {

    question: 'The knights who say "NI" are also keepers of which other secret word?',
    answers: ['Noo', 'Nigh', 'Nee-Wom', 'Icky'],
    correctAnswer: 'Nee-Wom'

}, {

    question: 'The knights of "NI" also wanted Arthur to cut down the mightiest tree in the forrest with what?',
    answers: ['a cat', 'a knife', 'the holy grail', 'a herring'],
    correctAnswer: 'a herring'

}, {

    question: 'What is the air speed velocity of an un-laiden swallow?',
    answers: ['9.8 meters/sec/sec', 'African or European swallow?', '40mph', 'I do not know that'],
    correctAnswer: 'African or European swallow?'

}, {

    question: 'What was the name of the fire-shooting wizard?',
    answers: ['Bill', 'Tim', 'Arthur', 'Raistlin', 'Toby'],
    correctAnswer: 'Tim'



}]

var game = {

    correct: 0,
    incorrect: 0,
    counter: 25,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter == 0) {
            console.log('Times up!');
            clearInterval(timer)





            $('#subwrapper h2').remove();
            $('#subwrapper').html("<h2>Results:</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+game.correct+" </h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+game.incorrect+" </h3>");
            $('#subwrapper').append("<h3>Unanswered:"+(questions.length-(game.incorrect+game.correct))+"</h3>");
            game.done();



        }


    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">25</span> Seconds</h2>');
        $('#beginbutton').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '<h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }

        }
        $('#subwrapper').append("<button id='end'>Submit Answers</button>");
    },
    done: function () {



        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

       

        }

}



















