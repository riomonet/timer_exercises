const timer = document.querySelector('#timer');
const submit = document.querySelector('#cd-form');
const input = document.querySelector('#input');
const container = document.querySelector('#container');
const random = document.querySelector('#random');
const answer = document.querySelector('#answer');



submit.addEventListener('submit', function (e){
    e.preventDefault();
    countdown(input.value);

});

random.addEventListener('click', function () {
    container.innerText='';
    answer.innerText ='';
    randomGame();

    
});


function countdown(num){
    const timerId = setInterval(function(){
	timer.innerHTML = num;
	num -= 1;
	if (num < 0) {
	    timer.innerHTML = 'DONE!';
	    clearInterval(timerId)
	    input.value ='';
	}
    }, 1000)

}



function randomGame(){
    let counter = 1;
    let n;
    const intervalId = setInterval ( function() {
	n = Math.random();
	addToList(n);
	// console.log(`Try: ${counter}  = ${n}`);
	if(n > .75) {
	    answer.innerText=(`it took ${counter} attempt(s) to get a number > .75`);
	    clearInterval(intervalId)
	}
	else counter++;
    }, 1000)
}

function addToList(guess) {
    const li = document.createElement('li');
    li.innerText = guess;
    container.appendChild(li);
    
}
