$( document ).ready(function() {

//Click Dress color Code





$( "#red" ).click(function() {
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#e00018", "border-color": "#e00018"});

	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  localStorage.setItem('color', 'red1');
  $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#forward3" ).fadeIn(500);





	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  localStorage.setItem('color', 'red2');
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#forward3" ).fadeIn(500);

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  localStorage.setItem('color', 'red3');
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#forward3" ).fadeIn(500);

	}
}); /*End of Red*/

$( "#yellow" ).click(function() {
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#ecdd21", "border-color": "#faed63"});


	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
  localStorage.setItem('color', 'yellow1');
   $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");
  $( "#forward3" ).fadeIn(500);


	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
  localStorage.setItem('color', 'yellow2');
  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");
  $( "#forward3" ).fadeIn(500);


	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
  localStorage.setItem('color', 'yellow3');
  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");
$( "#forward3" ).fadeIn(500);

	}
}); /*End of yellow*/



$( "#blue" ).click(function() {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#84d0f0", "border-color": "#84d0f0"});

	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
  localStorage.setItem('color', 'blue1');
  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");
  $( "#forward3" ).fadeIn(500);
  $( "#colorSelect" ).fadeIn(500);


	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
  localStorage.setItem('color', 'blue2');
  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");
  $( "#forward3" ).fadeIn(500);
  $( "#colorSelect" ).fadeIn(500);

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
  localStorage.setItem('color', 'blue3');
  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");
  $( "#forward3" ).fadeIn(500);
  $( "#colorSelect" ).fadeIn(500);

	}
}); /*End of blue*/



$( "#darkblue" ).click(function() { 
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#1a2581", "border-color": "#1a2581"});
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
  localStorage.setItem('color', 'darkblue1');
  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");
  $( "#forward3" ).fadeIn(500);
  $( "#colorSelect" ).fadeIn(500);


	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
  localStorage.setItem('color', 'darkblue2');
  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");
  $( "#forward3" ).fadeIn(500);


	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
  localStorage.setItem('color', 'darkblue3');
  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");
  $( "#forward3" ).fadeIn(500);


	}
}); /*End of darkblue*/

//Hover Dress color Code





$( "#red" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay",  "#dressslide" ).css('display', 'none');
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  
  


	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");

	}
}); /*End of Red*/

$( "#yellow" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");

	}
}); /*End of yellow*/



$( "#blue" ).mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");

	}
}); /*End of blue*/

$("#darkblue").mouseover(function() {
	if (localStorage.getItem("neck") == 1) {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");

	}

	if (localStorage.getItem("neck") == 2) {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");

	}

	if (localStorage.getItem("neck") == 3) {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");

	}
}); /*End of darkblue*/


//Mousover Code

$( "#red" ).mouseout(function() {

	if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
		if (localStorage.getItem("neck") == "1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }


}

  if (localStorage.getItem("color") == "red1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

  if (localStorage.getItem("color") == "red2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "red3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "yellow1") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

  if (localStorage.getItem("color") == "yellow2") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "yellow3") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "blue1") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

  if (localStorage.getItem("color") == "blue2") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "blue3") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "darkblue1") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

  if (localStorage.getItem("color") == "darkblue2") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

if (localStorage.getItem("color") == "darkblue3") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}



}); //End of red

$( "#yellow" ).mouseout(function() {
	if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
		if (localStorage.getItem("neck") == "1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }


}

  if (localStorage.getItem("color") == "red1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

  if (localStorage.getItem("color") == "red2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "red3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "yellow1") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

  if (localStorage.getItem("color") == "yellow2") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "yellow3") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "blue1") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

  if (localStorage.getItem("color") == "blue2") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "blue3") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "darkblue1") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

  if (localStorage.getItem("color") == "darkblue2") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

if (localStorage.getItem("color") == "darkblue3") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}
});


$( "#blue" ).mouseout(function() {
  if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
		if (localStorage.getItem("neck") == "1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }


}

  if (localStorage.getItem("color") == "red1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

  if (localStorage.getItem("color") == "red2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "red3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "yellow1") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

  if (localStorage.getItem("color") == "yellow2") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "yellow3") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "blue1") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

  if (localStorage.getItem("color") == "blue2") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "blue3") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "darkblue1") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

  if (localStorage.getItem("color") == "darkblue2") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

if (localStorage.getItem("color") == "darkblue3") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}
});

$( "#darkblue" ).mouseout(function() {
  if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
		if (localStorage.getItem("neck") == "1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }

  if (localStorage.getItem("neck") == "3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  }


}

  if (localStorage.getItem("color") == "red1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

  if (localStorage.getItem("color") == "red2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "red3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
}

if (localStorage.getItem("color") == "yellow1") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

  if (localStorage.getItem("color") == "yellow2") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "yellow3") {
  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
}

if (localStorage.getItem("color") == "blue1") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

  if (localStorage.getItem("color") == "blue2") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "blue3") {
  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
}

if (localStorage.getItem("color") == "darkblue1") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

  if (localStorage.getItem("color") == "darkblue2") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}

if (localStorage.getItem("color") == "darkblue3") {
  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
}
});




//Check on Refresh to apply color choices

if (localStorage.getItem("color") == "" || localStorage.getItem("color") == null) {
		if (localStorage.getItem("neck") == "1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  }

  if (localStorage.getItem("neck") == "2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  }

  if (localStorage.getItem("neck") == "3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  }


}

  if (localStorage.getItem("color") == "red1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  $("#red").prop("checked", true);
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#e00018", "border-color": "#e00018"});



}

  if (localStorage.getItem("color") == "red2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  $("#red").prop("checked", true);
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#e00018", "border-color": "#e00018"});


}

if (localStorage.getItem("color") == "red3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
  $( "#dressslide" ).attr("src","custom_files/mini.png");
  $("#red").prop("checked", true);
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#e00018", "border-color": "#e00018"});


}

if (localStorage.getItem("color") == "yellow1") {
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#ecdd21", "border-color": "#faed63"});

  $( ".neckdisplay" ).attr("src","custom_files/yellowneck1.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
  $("#yellow").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");

}

  if (localStorage.getItem("color") == "yellow2") {
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#ecdd21", "border-color": "#faed63"});

  $( ".neckdisplay" ).attr("src","custom_files/yellowneck2.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
  $("#yellow").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");

}

if (localStorage.getItem("color") == "yellow3") {
  $( "#removeColor.btn-warning").css({"color": "white", "background-color": "#ecdd21", "border-color": "#faed63"});

  $( ".neckdisplay" ).attr("src","custom_files/yellowneck3.png");
  $( "#dressslide" ).attr("src","custom_files/yellowmini.png");
  $("#yellow").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/yellowneck1.png");
  $( "#neck2" ).attr("src","custom_files/yellowneck2.png");
  $( "#neck3" ).attr("src","custom_files/yellowneck3.png");

}

if (localStorage.getItem("color") == "blue1") {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#84d0f0", "border-color": "#84d0f0"});

  $( ".neckdisplay" ).attr("src","custom_files/blueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
  $("#blue").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");

}

  if (localStorage.getItem("color") == "blue2") {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#84d0f0", "border-color": "#84d0f0"});

  $( ".neckdisplay" ).attr("src","custom_files/blueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
  $("#blue").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");

}

if (localStorage.getItem("color") == "blue3") {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#84d0f0", "border-color": "#84d0f0"});

  $( ".neckdisplay" ).attr("src","custom_files/blueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/bluemini.png");
  $("#blue").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/blueneck1.png");
  $( "#neck2" ).attr("src","custom_files/blueneck2.png");
  $( "#neck3" ).attr("src","custom_files/blueneck3.png");

}

if (localStorage.getItem("color") == "darkblue1") {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#1a2581", "border-color": "#1a2581"});

  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck1.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
  $("#darkblue").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");
}

  if (localStorage.getItem("color") == "darkblue2") {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#1a2581", "border-color": "#1a2581"});

  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck2.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
  $("#darkblue").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");

}

if (localStorage.getItem("color") == "darkblue3") {
$( "#removeColor.btn-warning").css({"color": "white", "background-color": "#1a2581", "border-color": "#1a2581"});

  $( ".neckdisplay" ).attr("src","custom_files/darkblueneck3.png");
  $( "#dressslide" ).attr("src","custom_files/darkbluemini.png");
  $("#darkblue").prop("checked", true);
  $( "#neck1" ).attr("src","custom_files/darkblueneck1.png");
  $( "#neck2" ).attr("src","custom_files/darkblueneck2.png");
  $( "#neck3" ).attr("src","custom_files/darkblueneck3.png");

}

$.fn.colorRemoval = function(){ 

  localStorage.setItem('color', "");

  if (localStorage.getItem("neck") == "1") {
  $( ".neckdisplay" ).attr("src","custom_files/neck1.png");
  }

  if (localStorage.getItem("neck") == "2") {
  $( ".neckdisplay" ).attr("src","custom_files/neck2.png");
  }

  if (localStorage.getItem("neck") == "3") {
  $( ".neckdisplay" ).attr("src","custom_files/neck3.png");
 
  }
   $( "#neck1" ).attr("src","custom_files/neck1.png");
  $( "#neck2" ).attr("src","custom_files/neck2.png");
  $( "#neck3" ).attr("src","custom_files/neck3.png");
$( "#dressslide" ).attr("src","custom_files/mini.png");
  $('#red').prop('checked',false);
  $('#yellow').prop('checked',false);
  $('#blue').prop('checked',false);
  $('#darkblue').prop('checked',false);
  $( "#removeColor.btn-warning").css({"color": "black", "background-color": "white", "border-color": "#bbbba9"});
  $( "#forward3" ).hide( "clip", {direction: "horizontal"}, 250 );
       

    }
    $("#removeColor").click(function(){
        $.fn.colorRemoval();
    });


    });  // eND OF doc READY