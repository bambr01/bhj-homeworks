let clickStartAmount = document.getElementById("clicker__counter");
let clickNumber = parseInt(clickStartAmount.textContent);
let image = document.getElementById("cookie");

 function clickCounter() {
		if (clickNumber % 2 == 0){
			image.width = 240;
		} else{
			image.width = 200;
		}
		clickNumber += 1;
 	console.log(clickNumber);
 	clickStartAmount.textContent = clickNumber;
}

 image.onclick = clickCounter;