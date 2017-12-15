$( document ).ready(function() {
	// neck(selection1)
	// dress(selection2)
	// skirt(selection3)
	// color(selection4)
	// theImage(selection5) selectionName finalImage

	$( "#forward4, #skip" ).click(function() {
		if (localStorage.getItem('neck') == 1) {
	$('#selectionName1').html('sweetheart');

}

if (localStorage.getItem('neck') == 2) {
	$('#selectionName1').html('one-shoulder');
}

if (localStorage.getItem('neck') == 3) {
	$('#selectionName1').html('v-neck');
	
}

if (localStorage.getItem('dress') == 1) {
$('#selectionName2').html('cotton');
$( "#finalImage2" ).attr("src", 'custom_files/dress1.jpg');
}

if (localStorage.getItem('dress') == 2) {
$('#selectionName2').html('cotton');
	$( "#finalImage2" ).attr("src", 'custom_files/dress2.jpg');
}

if (localStorage.getItem('dress') == 3) {
$('#selectionName2').html('cotton');

	$( "#finalImage2" ).attr("src", 'custom_files/dress3.jpg');
}

if (localStorage.getItem('skirt') == 1) {
$('#selectionName3').html('mini');
}

if (localStorage.getItem('skirt') == 2) {
	$('#selectionName3').html('midi');
}

if (localStorage.getItem('skirt') == 3) {
	$('#selectionName3').html('maxi');
}




if (localStorage.theImage !== null) {
$('#selections5').fadeIn(500);
  $( "#finalImage5" ).attr("src", localStorage.theImage);
  console.log('first local');


}

if (localStorage.theImage == null) {

	$('#selections5').fadeOut(500);
	console.log('2nd local');

}




  if (localStorage.getItem("color") == "red1") {
$('#finalImage4').css('background-color', '#e00018' );
$('#selectionName4').html('red');
$( "#finalImage1" ).attr("src", 'custom_files/neck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/mini.png');


}

  if (localStorage.getItem("color") == "red2") {
$('#finalImage4').css('background-color', '#e00018' );
$('#selectionName4').html('red');
$( "#finalImage1" ).attr("src", 'custom_files/neck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/mini.png');
}

if (localStorage.getItem("color") == "red3") {
	$('#finalImage4').css('background-color', '#e00018' );
	$('#selectionName4').html('red');
	$( "#finalImage1" ).attr("src", 'custom_files/neck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/mini.png');


}

if (localStorage.getItem("color") == "yellow1") {
 $('#selectionName4').html('yellow');
 $('#finalImage4').css('background-color', '#faed63' );
 $( "#finalImage1" ).attr("src", 'custom_files/yellowneck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/yellowmini.png');

}

  if (localStorage.getItem("color") == "yellow2") {
  	$('#selectionName4').html('yellow');
$('#finalImage4').css('background-color', '#faed63' );
 $( "#finalImage1" ).attr("src", 'custom_files/yellowneck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/yellowmini.png');

}

if (localStorage.getItem("color") == "yellow3") {
	$('#selectionName4').html('yellow');
$('#finalImage4').css('background-color', '#faed63' );
 $( "#finalImage1" ).attr("src", 'custom_files/yellowneck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/yellowmini.png');
}

if (localStorage.getItem("color") == "blue1") {
	$('#selectionName4').html('blue');
 
$('#finalImage4').css('background-color', '#84d0f0' );
 $( "#finalImage1" ).attr("src", 'custom_files/blueneck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/bluemini.png');
}

  if (localStorage.getItem("color") == "blue2") {
 $('#selectionName4').html('blue');
$('#finalImage4').css('background-color', '#84d0f0' );
 $( "#finalImage1" ).attr("src", 'custom_files/blueneck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/bluemini.png');
}

if (localStorage.getItem("color") == "blue3") {
	$('#selectionName4').html('blue');
 $('#finalImage4').css('background-color', '#84d0f0' );
  $( "#finalImage1" ).attr("src", 'custom_files/blueneck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/bluemini.png');

}

if (localStorage.getItem("color") == "darkblue1") {
	$('#selectionName4').html('dark blue');
$('#finalImage4').css('background-color', '#1a2581' );
 $( "#finalImage1" ).attr("src", 'custom_files/darkblueneck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/darkbluemini.png');
}

  if (localStorage.getItem("color") == "darkblue2") {
  	$('#selectionName4').html('dark blue');
$('#finalImage4').css('background-color', '#1a2581' );
 $( "#finalImage1" ).attr("src", 'custom_files/darkblueneck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/darkbluemini.png');

}

if (localStorage.getItem("color") == "darkblue3") {
	$('#selectionName4').html('dark blue');
$('#finalImage4').css('background-color', '#1a2581' );
 $( "#finalImage1" ).attr("src", 'custom_files/darkblueneck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/darkbluemini.png');

}


}); 

	//THis code fills in the finalization panel on refresh

if (localStorage.getItem('neck') == 1) {
	$('#selectionName1').html('sweetheart');

}

if (localStorage.getItem('neck') == 2) {
	$('#selectionName1').html('one-shoulder');
}

if (localStorage.getItem('neck') == 3) {
	$('#selectionName1').html('v-neck');
	
}

if (localStorage.getItem('dress') == 1) {
$('#selectionName2').html('cotton');
$( "#finalImage2" ).attr("src", 'custom_files/dress1.jpg');
}

if (localStorage.getItem('dress') == 2) {
$('#selectionName2').html('cotton');
	$( "#finalImage2" ).attr("src", 'custom_files/dress2.jpg');
}

if (localStorage.getItem('dress') == 3) {
$('#selectionName2').html('cotton');

	$( "#finalImage2" ).attr("src", 'custom_files/dress3.jpg');
}

if (localStorage.getItem('skirt') == 1) {
$('#selectionName3').html('mini');
}

if (localStorage.getItem('skirt') == 2) {
	$('#selectionName3').html('midi');
}

if (localStorage.getItem('skirt') == 3) {
	$('#selectionName3').html('maxi');
}




if (localStorage.theImage !== null) {
$('#selections5').fadeIn(500);
  $( "#finalImage5" ).attr("src", localStorage.theImage);
  console.log('first local');


}

if (localStorage.theImage == null) {

	$('#selections5').fadeOut(500);
	console.log('2nd local');

}




  if (localStorage.getItem("color") == "red1") {
$('#finalImage4').css('background-color', '#e00018' );
$('#selectionName4').html('red');
$( "#finalImage1" ).attr("src", 'custom_files/neck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/mini.png');


}

  if (localStorage.getItem("color") == "red2") {
$('#finalImage4').css('background-color', '#e00018' );
$('#selectionName4').html('red');
$( "#finalImage1" ).attr("src", 'custom_files/neck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/mini.png');
}

if (localStorage.getItem("color") == "red3") {
	$('#finalImage4').css('background-color', '#e00018' );
	$('#selectionName4').html('red');
	$( "#finalImage1" ).attr("src", 'custom_files/neck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/mini.png');


}

if (localStorage.getItem("color") == "yellow1") {
 $('#selectionName4').html('yellow');
 $('#finalImage4').css('background-color', '#faed63' );
 $( "#finalImage1" ).attr("src", 'custom_files/yellowneck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/yellowmini.png');

}

  if (localStorage.getItem("color") == "yellow2") {
  	$('#selectionName4').html('yellow');
$('#finalImage4').css('background-color', '#faed63' );
 $( "#finalImage1" ).attr("src", 'custom_files/yellowneck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/yellowmini.png');

}

if (localStorage.getItem("color") == "yellow3") {
	$('#selectionName4').html('yellow');
$('#finalImage4').css('background-color', '#faed63' );
 $( "#finalImage1" ).attr("src", 'custom_files/yellowneck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/yellowmini.png');
}

if (localStorage.getItem("color") == "blue1") {
	$('#selectionName4').html('blue');
 
$('#finalImage4').css('background-color', '#84d0f0' );
 $( "#finalImage1" ).attr("src", 'custom_files/blueneck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/bluemini.png');
}

  if (localStorage.getItem("color") == "blue2") {
 $('#selectionName4').html('blue');
$('#finalImage4').css('background-color', '#84d0f0' );
 $( "#finalImage1" ).attr("src", 'custom_files/blueneck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/bluemini.png');
}

if (localStorage.getItem("color") == "blue3") {
	$('#selectionName4').html('blue');
 $('#finalImage4').css('background-color', '#84d0f0' );
  $( "#finalImage1" ).attr("src", 'custom_files/blueneck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/bluemini.png');

}

if (localStorage.getItem("color") == "darkblue1") {
	$('#selectionName4').html('dark blue');
$('#finalImage4').css('background-color', '#1a2581' );
 $( "#finalImage1" ).attr("src", 'custom_files/darkblueneck1.png');
$( "#finalImage3" ).attr("src", 'custom_files/darkbluemini.png');
}

  if (localStorage.getItem("color") == "darkblue2") {
  	$('#selectionName4').html('dark blue');
$('#finalImage4').css('background-color', '#1a2581' );
 $( "#finalImage1" ).attr("src", 'custom_files/darkblueneck2.png');
$( "#finalImage3" ).attr("src", 'custom_files/darkbluemini.png');

}

if (localStorage.getItem("color") == "darkblue3") {
	$('#selectionName4').html('dark blue');
$('#finalImage4').css('background-color', '#1a2581' );
 $( "#finalImage1" ).attr("src", 'custom_files/darkblueneck3.png');
$( "#finalImage3" ).attr("src", 'custom_files/darkbluemini.png');

}
	
	   });  // eND OF doc READY