console.log("hello world");

$(document).ready(function() {console.log("document is ready!");

// var h1 = document.createElement("h1");
// h1.innerText = "Secret Box!";

//2.1
// $("#secretBox").css("backgroundColor", "white").append(h1);

//2.2
// $("#row1 div").addClass("boxType3");

//2.3
// $("#row4 div:last-child").css("display", "none");

//2.4
// $(".boxType1").css("backgroundColor", "white");

//2.5
// $("#row2 div").slice(0,2).removeClass();

//2.6
// $("#container :not(.row, #secretBox)").css("width", "2px");



//3.1
$('#container').on("click", function(e) {console.log(`X: ${e.pageX}, Y: ${e.pageY}`);});


//3.2
$('.boxType1').append("<a>Galvanize<a>");
$('a').attr("href", "http://www.galvanize.com").on("click", noGo);
function noGo(e) {
	e.preventDefault();
	alert("You can't leave!");
}

//3.3
$('#container').on("click", ".box", addImg);

function addImg(e) {
	$(this).toggleClass("dog");
}

//3.4
$('#container').on('click', changeClr);

function changeClr(e) {

	if (e.target === $('#container')[0]) {
		$('#container').css("backgroundColor", "lime");
	}
	else {
		$('#container').css("backgroundColor", "black");
		$(e.target).css("backgroundColor", "white");
	}
}



















});