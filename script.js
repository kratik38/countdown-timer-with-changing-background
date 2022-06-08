const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 jan 2023';

window.onload = function () {

	function changeImage() {   
	    var BackgroundImg=["./Img/Bg1.jpg","./Img/Bg2.jpg","./Img/Bg3.jpg","./Img/Bg4.jpg","./Img/Bg5.jpg"];
	    var i = Math.floor((Math.random() * 5));
	    document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
	}
	window.setInterval(changeImage, 6000);
    }

function countdown(){

	const newYearDate = new Date(newYears);
	
	const currentDate = new Date();

	const totalseconds = Math.floor((newYearDate - currentDate)/1000);

	const days = Math.floor(totalseconds/86400);

	const hours = Math.floor(totalseconds/3600)%24;

	const minutes = Math.floor(totalseconds/60)%60;

	const seconds = Math.floor(totalseconds)%60;

	daysEl.innerHTML = formatTime(days);
	hoursEl.innerHTML = formatTime(hours);
	minutesEl.innerHTML = formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);
	
	
}

function formatTime(time){
	return time < 10 ? (`0${time}`):time;
}

countdown();


setInterval(countdown,1000);
 