

var myQuestions=[
{question:"Inside which HTML element do we put the JavaScript?", answers:{a:"<JavaScript>",b:"<script>",c:"<js>"},correctAnswer:"b"},
{question:"The external JavaScript file must contain the <script> tag?", answers:{a:"True",b:"False"},correctAnswer:"b"},
{question:"How do you create a function in JavaScript?", answers:{a:"function=myfunction()",b:"function:myfunction()",c:"function myfunction()"},correctAnswer:"c"},
{question:"How do you call a function named 'myFunction'?", answers:{a:"myFunction()",b:"call myFunction",c:"call function myFunction"},correctAnswer:"a"},
{question:"How does a WHILE loop start?", answers:{a:"while(i<=10)",b:"while(i<=10,i++)",c:"while i 1 to 10"},correctAnswer:"a"},
{question:"How do you round the number 6.85, to the nearest integer?", answers:{a:"Math.round(6.85)",b:"rnd(6.85)",c:"Math.rnd(6.85)",d:"round(6.85)"},correctAnswer:"a"},
{question:"JavaScript is the same as Java", answers:{a:"True",b:"False"},correctAnswer:"b"},
{question:"How do you declare a JavaScript variable?", answers:{a:"var title=",b:"variable title=",c:"v title="},correctAnswer:"a"},
{question:"What will the following code return: Boolean(10 > 9)?", answers:{a:"True",b:"False",c:"NaN"},correctAnswer:"a"},
{question:"Is JavaScript case-sensitive?", answers:{a:"Yes",b:"No"},correctAnswer:"a"}];


function displayquestions(questions,quizcontainer){	
 var quizcontainer=document.getElementById('quiz')
 var quizresult=document.getElementById('result')
 var answers=[];
 var output=[];
  for(var i=0;i<questions.length;i++){
 	
 	for(element in questions[i].answers){


 		answers.push(  '<label>'+'<input type="radio" name="a'+ i + '" value="'+element+'">'
            +element+ ':'
            +questions[i].answers[element] 
          +'</label>'
 			);}



 	 	output.push(
 		'<div>'+ questions[i].question+ '</div>' + '<div>'+ answers.join('')+'</div>'
 		);



 }
quizcontainer.innerHTML=output.join('')
}

























