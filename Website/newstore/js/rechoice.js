$( document ).ready(function() {
// Neck rechoice
$('#neckdrop').draggable({
    drag: function() {
       $('#neckdrop').fadeOut(500);
       localStorage.setItem("neck", "");
       if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
   
  $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  }





  if (localStorage.getItem("color") == "red1") {

   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");

}

  if (localStorage.getItem("color") == "red2") {
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");

}

if (localStorage.getItem("color") == "red3") {
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");

}

if (localStorage.getItem("color") == "yellow1") {

  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");

}

  if (localStorage.getItem("color") == "yellow2") {

  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");

}

if (localStorage.getItem("color") == "yellow3") {

  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");

}

if (localStorage.getItem("color") == "blue1") {

  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");

}

  if (localStorage.getItem("color") == "blue2") {

  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");

}

if (localStorage.getItem("color") == "blue3") {

  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");

}

if (localStorage.getItem("color") == "darkblue1") {

  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");
}

  if (localStorage.getItem("color") == "darkblue2") {

  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");

}

if (localStorage.getItem("color") == "darkblue3") {

  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");

}

       // localStorage.setItem('color', "");

  // $( "#dressslide" ).attr("src","custom_files/mini.png");

  // $('#red').prop('checked',false);
  // $('#yellow').prop('checked',false);
  // $('#blue').prop('checked',false);
  // $('#darkblue').prop('checked',false);
  // $( "#forward3" ).hide( "clip", {direction: "horizontal"}, 1000 );




  $('#neck1, #neck2, #neck3').css("opacity", "1");
  $('#click1, #click2, #click3').css("background-color", "initial");
  // $( "#neck1" ).attr("src","custom_files/neck1.png");
  // $( "#neck2" ).attr("src","custom_files/neck2.png");
  // $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#forward1" ).hide( "clip", {direction: "horizontal"}, 250 );

  if (localStorage.getItem('dress') == null || localStorage.getItem('dress') == '') {
$('#forward2').css("display", 'none');



}



  if ($(".panel2").hasClass("active")) {

       $(".panel2").fadeOut(500);
   

        // $("#droppable").fadeOut(500);
       


$(".panel1").delay(650).fadeIn(450);
 $('.dresslenght').draggable("enable");
console.log('From Dress Fabric to Neckline');



}

if ($(".panel3").hasClass("active")) {

       $(".panel3").fadeOut(500);
$(".panel1").delay(650).fadeIn(450);
 $('.dresslenght').draggable("enable");
console.log('From Skirt to Neckline');


}

if ($(".panel4").hasClass("active")) {

       $(".panel4").fadeOut(500);
$(".panel1").delay(650).fadeIn(450);
 $('.dresslenght').draggable("enable");
console.log('From Color to Neckline');

}

  if (!$(".panel1").hasClass("active")) {

            $('.panel1').addClass("active");
            $('.panel2.active').removeClass("active");
            $('.panel3.active').removeClass("active");
            $('.panel4.active').removeClass("active");



  }

    }

});

//Fabric Rechoice
$('#dressdrop').draggable({
    drag: function() {
       $('#dressdrop').fadeOut(500);

       localStorage.setItem("dress", "");
  $('#dress1, #dress2, #dress3').css("opacity", "1");
  $( "#forward2" ).hide( "clip", {direction: "horizontal"}, 250 );
   $('.dresslenght').draggable("enable");


//   if ($(".panel1").hasClass("active") && localStorage.getItem("neck") !== null) {

//        $(".panel1").fadeOut(500);
// $(".panel1").fadeIn(2000);
// $(".panel1").addClass("active");
//  $('.panel2.active').removeClass("active");
// $('.panel3.active').removeClass("active");
// $('.panel4.active').removeClass("active");
// console.log('First Code');

// }

if ($(".panel3").hasClass("active")) {
$(".panel3").fadeOut(500);
$(".panel2").delay(650).fadeIn(450);
$("#droppable").delay(650).fadeIn(450);

$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
$('.panel3.active').removeClass("active");
$('.panel4.active').removeClass("active");
  

}

if ($(".panel4").hasClass("active")) {

       $(".panel4").fadeOut(500);
$(".panel2").delay(650).fadeIn(450);
$("#droppable").delay(650).fadeIn(450);

$(".panel2").addClass("active");
 $('.panel1.active').removeClass("active");
$('.panel3.active').removeClass("active");
$('.panel4.active').removeClass("active");

console.log('Color to dress');



}

  if (!$(".panel2").hasClass("active") && !$(".panel1").hasClass("active")) {

            $('.panel1').addClass("active");
            $('.panel2.active').removeClass("active");
            $('.panel3.active').removeClass("active");
            $('.panel4.active').removeClass("active");
            console.log('Last Code');

  }

  

    }

});

//Skirt Length Rechoice
$('.dresslenght').draggable({
    drag: function() {

       localStorage.setItem("skirt", "");
         $('.dresslenght').fadeOut(500);
         $('.dresslenght').css("top", "");
       $('.dresslenght').css("left", "");
       $('img#dressslide').removeClass();
       $('img#dressslide').addClass("mini");

if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
    
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }


  if (localStorage.getItem("color") == "red1") {
  $( "#dressslide" ).attr("src","custom_files/mini.png");

}
  if (localStorage.getItem("color") == "red2") {
  $( "#dressslide" ).attr("src","custom_files/mini.png");

}
if (localStorage.getItem("color") == "red3") {
  $( "#dressslide" ).attr("src","custom_files/mini.png");

}

if (localStorage.getItem("color") == "yellow1") {

  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
 

}

  if (localStorage.getItem("color") == "yellow2") {

  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");


}

if (localStorage.getItem("color") == "yellow3") {

  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");


}

if (localStorage.getItem("color") == "blue1") {

  $( "#dressslide" ).attr("src","custom_files/bluemini.png");


}

  if (localStorage.getItem("color") == "blue2") {

  $( "#dressslide" ).attr("src","custom_files/bluemini.png");


}

if (localStorage.getItem("color") == "blue3") {

  $( "#dressslide" ).attr("src","custom_files/bluemini.png");


}

if (localStorage.getItem("color") == "darkblue1") {
 
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");




}

  if (localStorage.getItem("color") == "darkblue2") {

  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");


}

if (localStorage.getItem("color") == "darkblue3") {
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");



}


  // $( "#dressslide" ).attr("src","custom_files/mini.png");
       $(".flat-slider").slider('value', 0);
       // localStorage.setItem('color', "");
       // $( "#forward3" ).hide( "clip", {direction: "horizontal"}, 1000 );

  //       $('#red').prop('checked',false);
  // $('#yellow').prop('checked',false);
  // $('#blue').prop('checked',false);
  // $('#darkblue').prop('checked',false);

  //      $( "#neck1" ).attr("src","custom_files/neck1.png");
  // $( "#neck2" ).attr("src","custom_files/neck2.png");
  // $( "#neck3" ).attr("src","custom_files/neck3.png");


// if (localStorage.getItem('neck') == 1) {
// $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck1.png">').fadeIn(500);
// }
// if (localStorage.getItem('neck') == 2) {
// $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck2.png">').fadeIn(500);
// }
// if (localStorage.getItem('neck') == 3) {
// $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck3.png">').fadeIn(500);
// }


  // $( "#forward2" ).hide( "clip", {direction: "horizontal"}, 1000 );


       // $( "#forward2" ).hide( "clip", {direction: "horizontal"}, 400 );
       // $( "#colorSelect" ).hide( "clip", {direction: "horizontal"}, 400 );



if ($(".panel3").hasClass("active")) {

	//Nothin here

}
  
if ($(".panel4").hasClass("active")) {

	
	//Nothin here


}




    }

});


//Display dress on Refresh

if (localStorage.getItem('skirt') !== '') {
$('#dressslide').css("display", "block");
console.log('Cool Stuff');
}

//Hide dress on Refresh


if (localStorage.getItem('skirt') == null) {
$('#dressslide').css("display", "none");
console.log('Cool Stuff2');
}

       




}); // End of Doc Ready