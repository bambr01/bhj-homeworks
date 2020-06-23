function timer() {
    const timerStep =  document.getElementById("timer");
	timerStep.textContent -= 1;
	if(timerStep.textContent == 0) { 
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}
}
let timerId = setInterval(timer, 1000);