$( document ).ready(function() {

$( "#click1" ).click(function() {
  $('#neckdrop').html('');
  $('#click2, #click3').css("background-color", "initial");
            $('#neck2, #neck3').css("opacity", "0.5");
            $('#neck1').css("opacity", "initial");
            
       $('#neckdrop').css("display", "initial");

            localStorage.setItem("neck", "1");
           $( "#forward1" ).fadeIn(500);

            $('.panel1').removeClass("active");
            $('.panel2').addClass("active");
            $('#neckdrop').css("top", "");
       $('#neckdrop').css("left", "");
  $('#firsth2, #main2, #clear-btn').css("display", "none");
  $('#secondh2, #main, #clear-btn2').css("display", "flex");

  if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
    if (localStorage.getItem("neck") == "1") {
 $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck1.png">').fadeIn(500);
  }

  if (localStorage.getItem("neck") == "2") {
 $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck2.png">').fadeIn(500);
  }

  if (localStorage.getItem("neck") == "3") {
 $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck3.png">').fadeIn(500);
  }


}

  if (localStorage.getItem('color') == '' || localStorage.getItem('color') == null){
 

  }


if (localStorage.getItem('color') == 'red1' || localStorage.getItem('color') == 'red2' || localStorage.getItem('color') == 'red3' || localStorage.getItem('color') == "" || localStorage.getItem('color') == null) {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/neck1.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'yellow1' || localStorage.getItem('color') == 'yellow2' || localStorage.getItem('color') == 'yellow3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/yellowneck1.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'blue1' || localStorage.getItem('color') == 'blue2' || localStorage.getItem('color') == 'blue3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/blueneck1.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'darkblue1' || localStorage.getItem('color') == 'darkblue2' || localStorage.getItem('color') == 'darkblue3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/darkblueneck1.png">').fadeIn(500);

}




            // $('#click1').click(false);
            // $('#click2, #click3, #click4').click(true);
            // console.log(localStorage.getItem('dress'));
});

$( "#click2" ).click(function() {
 
$('#neckdrop').html('');
 
  $('#click1, #click3').css("background-color", "initial");
            $('#neck1, #neck3').css("opacity", "0.5");
            $('#neck2').css("opacity", "initial");
            
       $('#neckdrop').css("display", "initial");
       $('.panel1').removeClass("active");
            $('.panel2').addClass("active");

            localStorage.setItem("neck", "2");
            $('#neckdrop').css("top", "");
       $('#neckdrop').css("left", "");
            $('#forward1').fadeIn(2000);

            $('#firsth2, #main2, #clear-btn').css("display", "none");
  $('#secondh2, #main, #clear-btn2').css("display", "flex");
  if (localStorage.getItem('color') == 'red2' || localStorage.getItem('color') == "" || localStorage.getItem('color') == null) {
  $('#neckdrop').html('<img class="neckdisplay" src="custom_files/neck2.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'yellow1' || localStorage.getItem('color') == 'yellow2' || localStorage.getItem('color') == 'yellow3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/yellowneck2.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'blue1' || localStorage.getItem('color') == 'blue2' || localStorage.getItem('color') == 'blue3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/blueneck2.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'darkblue1' || localStorage.getItem('color') == 'darkblue2' || localStorage.getItem('color') == 'darkblue3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/darkblueneck2.png">').fadeIn(500);

}
            // $('#click2').click(false);
            // $('#click1, #click3, #click4').click(true);
            // console.log(localStorage.getItem('dress'));
});

$( "#click3" ).click(function() {

$('#neckdrop').html('');
  
  $('#click1, #click2').css("background-color", "initial");
            $('#neck1, #neck2').css("opacity", "0.5");
            $('#neck3').css("opacity", "initial");
          
       $('#neckdrop').css("display", "initial");
       $('.panel1').removeClass("active");
            $('.panel2').addClass("active");
            $('#neckdrop').css("top", "");
       $('#neckdrop').css("left", "");
       $('#forward1').fadeIn(2000);
       

            localStorage.setItem("neck", "3");
            $('#firsth2, #main2, #clear-btn').css("display", "none");
  $('#secondh2, #main, #clear-btn2').css("display", "flex");

   if (localStorage.getItem('color') == 'red3' || localStorage.getItem('color') == "" || localStorage.getItem('color') == null) {
  $('#neckdrop').html('<img class="neckdisplay" src="custom_files/neck3.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'yellow1' || localStorage.getItem('color') == 'yellow2' || localStorage.getItem('color') == 'yellow3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/yellowneck3.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'blue1' || localStorage.getItem('color') == 'blue2' || localStorage.getItem('color') == 'blue3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/blueneck3.png">').fadeIn(500);

}

if (localStorage.getItem('color') == 'darkblue1' || localStorage.getItem('color') == 'darkblue2' || localStorage.getItem('color') == 'darkblue3') {
  $('#neckdrop').html('<img id="draggable4" class="neckdisplay" src="custom_files/darkblueneck3.png">').fadeIn(500);

}
            // $('#click3').click(false);
            // $('#click1, #click2, #click4').click(true);
            // console.log(localStorage.getItem('dress'));





});


if (localStorage.getItem("neck") == "1") {

  document.getElementById('neckdrop').innerHTML = '<img class="neckdisplay" src="custom_files/neck1.png">';
 
  $('#neck2, #neck3').css("opacity", "0.5");

}

if (localStorage.getItem("neck") == "2") {

  document.getElementById('neckdrop').innerHTML = '<img class="neckdisplay" src="custom_files/neck2.png">';
 
  $('#neck1, #neck3').css("opacity", "0.5");

  
}

if (localStorage.getItem("neck") == "3") {

  document.getElementById('neckdrop').innerHTML = '<img class="neckdisplay" src="custom_files/neck3.png">';
 
  $('#neck2, #neck1').css("opacity", "0.5");
  ;


  
}

$.fn.myFunction2 = function(){ 
       localStorage.removeItem("neck");
       $('#neck2, #neck3, #neck1').css("opacity", "initial");
       $('#click1, #click2, #click3').css("background-color", "initial");
       $('#neckdrop').html("");

    }
    $(".clearneck-btn").click(function(){
        $.fn.myFunction2();
    });





});