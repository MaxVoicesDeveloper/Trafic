var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
let images = document.querySelectorAll(".rotate");

var t1 = 1;
var t2 = 1;
var t3 = 1;
var t4 = 1;
var t5 = 1;
var t6 = 1;
var fram = 0;
var ending = 0;
var typ1 = 1;
var work = true;

for(let image of images) {

let current_rotation = 0;
image.addEventListener('click', function() {
current_rotation = (current_rotation + 90) % 360;
image.style.transform = 'rotate(' + current_rotation + 'deg)';
image.style.transition = '500' + 'ms';

});
let images = document.querySelectorAll(".rotate");
}

function animTrain(a) {
	switch(a){
		case 1:
			fram+= 1;
			document.getElementById('t1').style.display = "flex";
			$("#t1").animate({top: "+=200px"}, 1000, "linear", function(){document.getElementById('t1').style.display = "none";});
			$("#t1").animate({top: "+=0px"}, 100, "linear", function() {animMoneyUp(fram);});
			$("#t5").animate({top: "+=0px"}, 500, "linear");
			t1 = 0;
			break;
			//close
		case 2:
			fram+= 1;
			document.getElementById('t6').style.display = "flex";
			$("#t6").animate({left: "+=250px"}, 1000, "linear");
			$("#t6").animate({top: "-=130px"}, 500, "linear", function(){document.getElementById('t6').style.display = "none";});
			$("#t1").animate({top: "+=0px"}, 1500, "linear", function() {animMoneyUp(fram);});
			$("#t5").animate({top: "+=0px"}, 500, "linear");
			t2 = 0;
			break;
			//close
		case 3:
			fram+= 1;
			document.getElementById('t4').style.display = "flex";
			$("#t4").animate({top: "+=53px"}, 500, "linear");
			$("#t4").animate({left: "+=210px"}, 800, "linear", function(){document.getElementById('t4').style.display = "none";});
			$("#t1").animate({top: "+=0px"}, 1300, "linear", function() {animMoneyUp(fram);});
			$("#t5").animate({top: "+=0px"}, 500, "linear");
			t3 = 0;
			break;
			//close
		case 4:
			fram+= 1;
			document.getElementById('t3').style.display = "flex";
			$("#t3").animate({top: "+=53px"}, 500, "linear");
			$("#t3").animate({left: "+=160px"}, 500, "linear");
			$("#t3").animate({top: "+=99px"}, 500, "linear");
			$("#t3").animate({left: "+=53px"}, 500, "linear", function(){document.getElementById('t3').style.display = "none";});
			$("#t1").animate({top: "+=0px"}, 2000, "linear", function() {animMoneyUp(fram);});
			$("#t5").animate({top: "+=0px"}, 500, "linear");
			t4 = 0;
			break;
		case 5:
			fram+= 1;
			document.getElementById('t2').style.display = "flex";
			$("#t2").animate({top: "+=150px"}, 1000, "linear");
			$("#t2").animate({left: "+=115px"}, 1000, "linear", function(){document.getElementById('t2').style.display = "none"});
			$("#t1").animate({top: "+=0px"}, 2000, "linear", function() {animMoneyUp(fram);});
			$("#t5").animate({top: "+=0px"}, 500, "linear");
			t5 = 0
			break;
		case 6:
			fram+= 1;
			document.getElementById('t5').style.display = "flex";
			$("#t5").animate({top: "+=53px"}, 500, "linear");
			$("#t5").animate({left: "+=180px"}, 1000, "linear");
			$("#t5").animate({top: "-=100px"}, 500, "linear");
			$("#t5").animate({left: "+=80px"}, 500, "linear", function(){document.getElementById('t5').style.display = "none"});
			$("#t1").animate({top: "+=0px"}, 2500, "linear", function() {animMoneyUp(fram);});
			$("#t5").animate({top: "+=0px"}, 500, "linear");
			t6 = 0
			break;

	}

}

function animMoneyUp(fram){
	console.log(fram);
	document.getElementById('mon').style.display = "flex";
	var img = 1, imgMax = 9;
	var image = document.getElementById('mon');
	$("#mon").animate({top: "+=300px"}, 1500, "linear", function(){animMoneyAdd(fram)});
	let timerId = setInterval(() => image.src ='f' + (++img > imgMax ? (img = 1) : img) + '.png', 100);
	setTimeout(() => { clearInterval(timerId); document.getElementById('mon').style.display = "none"; }, 1500);
	$("#mon").animate({top: "-=300px"}, 10, "linear", function(){animMoneyAdd(fram)});


}

function animMoneyAdd(fram){
	var image = document.getElementById('l25');
	image.src = 'ff' + 1 + '.png';
}
$('.body').on("click", function(event){
if (t1 && (l9.style.transform.replace(/[^0-9]/g,"") == 0 || l9.style.transform.replace(/[^0-9]/g,"") == 180)) {
	$("#t1").animate({top: "+=0px"}, 500, function(){animTrain(1);});
	ending += 1;
	t1 = 0;
	if (ending == 6){setTimeout(() => {end();}, 1500);};
};
if (t2 && (l14.style.transform.replace(/[^0-9]/g,"") == 0 || l14.style.transform.replace(/[^0-9]/g,"") == 180) && l23.style.transform.replace(/[^0-9]/g,"") == 270 && (l16.style.transform.replace(/[^0-9]/g,"") == 90 || l16.style.transform.replace(/[^0-9]/g,"") == 270) && (l15.style.transform.replace(/[^0-9]/g,"") == 90 || l15.style.transform.replace(/[^0-9]/g,"") == 270)) {
	$("#t1").animate({top: "+=0px"}, 500, function(){animTrain(2);});
	ending += 1;
	t2 = 0;
	if (ending == 6){setTimeout(() => {end();}, 1500);};
};
if (t3 && (l11.style.transform.replace(/[^0-9]/g,"") == 90 || l11.style.transform.replace(/[^0-9]/g,"") == 270) && (l12.style.transform.replace(/[^0-9]/g,"") == 90 || l12.style.transform.replace(/[^0-9]/g,"") == 270) && l18.style.transform.replace(/[^0-9]/g,"") == 0) {
	$("#t1").animate({top: "+=0px"}, 500, function(){animTrain(3);});
	ending += 1;
	t3 = 0;
	if (ending == 6){setTimeout(() => {end();}, 1500);};
};
if (t4 && l22.style.transform.replace(/[^0-9]/g,"") == 0 && l24.style.transform.replace(/[^0-9]/g,"") == 270 && (l10.style.transform.replace(/[^0-9]/g,"") == 90 || l10.style.transform.replace(/[^0-9]/g,"") == 270) && l17.style.transform.replace(/[^0-9]/g,"") == 0) {
	$("#t1").animate({top: "+=0px"}, 500, function(){animTrain(4);});
	ending += 1;
	t4 = 0;
	if (ending == 6){setTimeout(() => {end();}, 1500);};
};
if (t5 && l22.style.transform.replace(/[^0-9]/g,"") == 0 && l24.style.transform.replace(/[^0-9]/g,"") == 270) {
	$("#t1").animate({top: "+=0px"}, 500, function(){animTrain(5);});
	ending += 1;
	t5 = 0;
	if (ending == 6){setTimeout(() => {end();}, 1500);};
};
if (t6 && l21.style.transform.replace(/[^0-9]/g,"") == 90 && l20.style.transform.replace(/[^0-9]/g,"") == 270 && (l13.style.transform.replace(/[^0-9]/g,"") == 90 || l13.style.transform.replace(/[^0-9]/g,"") == 270) && l19.style.transform.replace(/[^0-9]/g,"") == 0) {
	$("#t1").animate({top: "+=0px"}, 500, function(){animTrain(6);});
	ending += 1;
	t6 = 0;
	if (ending == 6){setTimeout(() => {end();}, 1500);};
};
function end() {
	$("#t1").animate({top: "+=0px"}, 2000, "linear", function() {document.getElementById('hand').style.display = "flex";
	$("#hand").animate({left: "+=85px"}, 800, "linear", function(){animMoneyAdd(6); $("#re").animate({top: "+=100px"}, 500, "linear");});});
	$("#t1").animate({top: "+=0px"}, 1200, "linear", function() {document.getElementById('container').style.display = "none";});
	$("#t1").animate({top: "+=0px"}, 100, "linear", function() {document.getElementById('container2').style.display = "flex"; $("#container2").animate({top: "-=500px"}, 500, "linear");});
	typ1 = 0;
};
});
function buta() {
	$("#container2").animate({top: "-=700px"}, 100, "linear");
	$("#t1").animate({top: "+=0px"}, 500, "linear", function() {document.getElementById('container2').style.display = "none";});
  $("#t1").animate({top: "+=0px"}, 250, "linear", function() {document.getElementById('container3').style.display = "flex"; $("#container3").animate({top: "+=900px"}, 500, "linear");});
};

document.querySelector("#but1").onclick = function(){
  $("#container3").animate({top: "-=700px"}, 500, "linear", function() {document.getElementById('container3').style.display = "none";});
  $("#t1").animate({top: "+=0px"}, 250, "linear", function() {document.getElementById('container4').style.display = "flex"; $("#container4").animate({top: "+=500px"}, 500, "linear");});
};
