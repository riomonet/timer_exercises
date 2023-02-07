
function countdown(num){
    const timerId = setInterval(function(){
	console.log(num);
	num -= 1;
	if (num < 1) {
	    console.log('"DONE!"')
	    clearInterval(timerId)
	}
    }, 1000)
}


function randomGame(){
    let counter = 1;
    let n;
    const intervalId = setInterval ( function() {
	n = Math.random();
	console.log(`Try: ${counter}  = ${n}`);
	if(n > .75) {
	    console.log(`it took ${counter} tries to get a number > .75`)
	    clearInterval(intervalId)
	}
	else counter++;
    }, 1000)
}
