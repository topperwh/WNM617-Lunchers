$( document ).ready(function() {


	$( "#forward1" ).click(function() {

		$(".panel1").fadeOut(500);
$(".panel2").delay(650).fadeIn(450);
$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
       $('.dresslenght').draggable( "enable" );


}); 

	$( "#forward2" ).click(function() {

		$(".panel2").fadeOut(500);
$(".panel3, #dressslide, .dresslenght").delay(650).fadeIn(450);
$(".panel3").addClass("active");
 $('.panel2.active').removeClass("active");
 $('.dresslenght').css("top", "");
       $('.dresslenght').css("left", "");
       $('.dresslenght').draggable( "disable" );
       


if(localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == ''){
              localStorage.setItem('skirt', '1');
              console.log('SKirt set to number 1');

            }



}); 

		$( "#forward3" ).click(function() {

		$(".panel4").fadeOut(500);
$(".panel5").delay(650).fadeIn(450);
$(".panel5").addClass("active");
$('.dresslenght, #neckdrop, #dressdrop').draggable( "disable" );
 $('.panel4.active').removeClass("active");

}); 

		$( "#forward4, #skip" ).click(function() {

		$(".panel5").fadeOut(500);
$(".panel6").delay(650).fadeIn(600);
$(".panel6").addClass("active");
 $('.panel5.active').removeClass("active");

}); 

	$( "#backward1" ).click(function() {

		$(".panel2").fadeOut(500);
$(".panel1").delay(650).fadeIn(450);
$(".panel1").addClass("active");
 $('.panel2.active').removeClass("active");
 $('.dresslenght, #neckdrop, #dressdrop').draggable( "enable" );

}); 

	$( "#backward2" ).click(function() {

		$(".panel3").fadeOut(500);
$(".panel2").delay(650).fadeIn(450);
$(".panel2").addClass("active");
 $('.panel3.active').removeClass("active");
  $('.dresslenght, #neckdrop, #dressdrop').draggable( "enable" );

}); 

	$( "#backward3" ).click(function() {

		$(".panel4").fadeOut(500);
$(".panel3").delay(650).fadeIn(450);
$(".panel3").addClass("active");
 $('.panel4.active').removeClass("active");
  $('.dresslenght').draggable( "disable" );
  $('#neckdrop, #dressdrop').draggable("enable");

});



  $( "#backward4" ).click(function() {

		$(".panel5").fadeOut(500);
$(".panel4").delay(650).fadeIn(450);
$(".panel4").addClass("active");
 $('.panel5.active').removeClass("active");
 $('#neckdrop, #dressdrop').draggable("enable");
 

}); 

    $( "#backward5" ).click(function() {

		$(".panel6").fadeOut(500);
$(".panel5").delay(650).fadeIn(450);
$(".panel5").addClass("active");
 $('.panel6.active').removeClass("active");

}); 

    

if (localStorage.getItem('color') == null || localStorage.getItem('color') == '') {
$('#forward3').css("display", 'none');

}


if (localStorage.getItem('neck') == null || localStorage.getItem('neck') == '') {
$('#forward1').css("display", 'none');

}

if (localStorage.getItem('dress') == null || localStorage.getItem('dress') == '') {
$('#forward2').css("display", 'none');


}

if (localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == '') {
$('#forward2').css("display", 'none');

}

if (localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == '') {
	if (localStorage.getItem('dress') !== null || localStorage.getItem('dress') !== '') {
$('#forward2').css("display", 'block');


}
}

}); // End of Doc Ready

	