var position = 0;
var current_index = 0;

var navlist = document.getElementsByClassName("menu__link")
window.onscroll = function () {
position = window.pageYOffset;
}

function Scroll(id, index) {
	navlist[current_index].className = "menu__link"
	current_index = index;
	navlist[current_index].className = "menu__link active"
	var el_pos = document.getElementById(id).offsetTop;
	
	var interval;

	if(position < el_pos) {
		interval = setInterval(function(){
			position+=13;
			if(position + 70 >= el_pos){
				clearInterval(interval);
			}
			else {
				window.scrollTo(0, position);
			}
		}, 0);
		}
		else {
			interval = setInterval(function(){
			position-=13;
			if(position + 65 <= el_pos){
				clearInterval(interval);
			}
			else {
				window.scrollTo(0, position);
			}
		}, 0);
		}
	}
