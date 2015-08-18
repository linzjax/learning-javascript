//Goal: Create a quiz to test knowledge of array functions
//Ask question 'Start here' 'End here', what function would you use?
//Multiple choice or fill in the blank?

//first, load the question.
//second, accept and look at an answer.
//third, submit a response.
//fourth, provide a new question.

//Shift quiz dictionary over to a JSON file
//figure out how to account for multiple possible answers: '' instead of "", etc.;



quiz = [{
	question: '<p>thing = ["fish","bird","mammal"].</p><p> Goal: ["fish","bird"]<p>',

	answer: 'thing.pop()',

	correct: 'Thing.pop() is the correct answer because it removes the last element in the array'
},{
	question: '<p>var thing = ["fish","bird","mammal"].</p><p> Goal: ["fish","bird","mammal","reptile"]',

	answer: 'thing.push("reptile")',

	correct: 'thing.push("reptile") is correct because it adds a new item to the end of the array. Like pushing someone to get in line.'
},{
	question: '<p>var thing = ["fish","bird","mammal"].</p><p> Goal: ["bird","mammal"]',

	answer: 'thing.shift()',

	correct: 'thing.shift() is correct because it removes to first item in the array, like someone shifting forward in line.'
},{
	question: '<p>var thing = ["fish","bird","mammal","reptile"]. <br> new_thing = thing.shift()</p><p> Goal: . What will new thing return?',

	answer: '3',

	correct: 'new_thing will return 3 because .shift() returns the length of the new array'
},{
	question: '<p>var thing = ["fish","bird","mammal","reptile"].</p><p> Goal: thing = ["fish","bird","mammal","reptile"]<br> new_thing = ["bird","mammal"]',

	answer: 'new_thing=thing.slice(1,3)',

	correct: 'new_thing = thing.slice(1,3) is correct because it takes a portion of the array and asigns it to a new array, while leaving the old array intact.'
},{
	question: '<p>var thing = ["fish","bird","mammal","reptile"].</p><p> Goal: ["bird", "fish", "mammal", "reptile"]',

	answer: 'thing.sort()',

	correct: 'thing.sort() is correct because it puts the array in alphabetic order'
},{
	question: '<p>var thing = [23, 51, 3, 62, 14]</p><p>Goal: [3, 14, 23, 51, 62]',

	answer: 'thing.sort(function(a,b){returna-b})',

	correct: 'thing.sort(function(a,b){return a-b}) is correct because it compares each number in the list to see if it returns a positive or negative number, and sorts them accordingly'
},{
	question: '<p>var thing = [23, 51, 3, 62, 14]</p><p>Goal: [62, 51, 23, 14, 3]',

	answer: 'thing.sort(function(a,b){returnb-a})',

	correct: 'thing.sort(function(a,b){return b-a}) is correct because it compares each number in the list to see if it returns a positive or negative number, and sorts them accordingly'
},{
	question: '<p>var thing = ["fish","bird","mammal","reptile"].</p><p> Goal: thing = ["fish", "amphibian", "reptile"]<br> new_thing = ["bird", "mammal"]',

	answer: 'new_thing=thing.splice(1,2,"amphibian")',

	correct: 'new_thing = thing.splice(1, 2, "amphibian") is correct because it started at index 1, removed both "bird" and "mammal", and replaced them with "amphibian".',
}];

var submited_answer = null;
var quiz_numbers = [];
var x = 0;
var correct = false;

function load_question(){
	for (i = 0; i < quiz.length; i++){
		quiz_numbers.push(i);
	}
}

function ask_question(x){
	$('.question').html(quiz[x].question);
}

function new_question(x){
		ask_question(x);
		submit_answer(x);
}

function submit_answer(){
	$('form').on('submit', function(evt){
		evt.preventDefault();
		submited_answer = $('#answer').val();
		answer = submited_answer.split(' ').join('');
		answer = submited_answer.split("'").join('"').replace(';','');

		if (answer === quiz[x].answer){
			$('.result').html(quiz[x].correct);
		} else {
			$('.result').html('Try again.');
		}
	}); //end form submit
}



$(document).ready(function(){
	load_question(x);
	ask_question(x);
	submit_answer(x);
	$('button').on('click', function(evt){
		x++;
		evt.preventDefault();
		$('.result').html('');
		$('#answer').val('');
		new_question(x);
		if (x === quiz_numbers.length - 1){
			$('button').attr('disabled', true);
		}
	});


	
}); //end document ready