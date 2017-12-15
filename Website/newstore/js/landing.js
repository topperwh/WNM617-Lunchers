// This code will tell the browser what panel to start with after a browser refreshes
$( document ).ready(function() {

       if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
      if (localStorage.getItem('dress') !== "" && localStorage.getItem('dress') !== null) {
            if (localStorage.getItem('skirt') !== "" || localStorage.getItem('skirt') !== null){
                  if (localStorage.getItem('color') !== "" || localStorage.getItem('color') !== null){
                        if (localStorage.getItem('theImage') !== null){
                             
                  
       
            $('.panel6').fadeIn(1000);
            $('.panel6').addClass('active');
            $('.dresslenght, #neckdrop, #dressdrop').draggable( "disable" );
            $('.panel1, .panel2, .panel3, .panel4, .panel5').css('display', 'none');
            console.log('Panel 6 Active');


            
}
}      
}
}
} 
 //Goes to Pattern

      if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
      if (localStorage.getItem('dress') !== "" && localStorage.getItem('dress') !== null) {
            if (localStorage.getItem('skirt') !== "" || localStorage.getItem('skirt') !== null){
                  if (localStorage.getItem('color') !== "" || localStorage.getItem('color') !== null){
                        if (localStorage.getItem('theImage') == null){
                  
       
            $('.panel5').fadeIn(1000);
            $('.panel5').addClass('active');
            $('.dresslenght, #neckdrop, #dressdrop').draggable( "disable" );
            $('.panel1, .panel2, .panel3, .panel4, .panel6').css('display', 'none');
            console.log('Panel 5 Active');

            
}
}      
}
}
} 
 //Goes to Pattern


if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
      if (localStorage.getItem('dress') !== "" && localStorage.getItem('dress') !== null) {
            if (localStorage.getItem('skirt') !== "" || localStorage.getItem('skirt') !== null){
                  if (localStorage.getItem('color') == "" || localStorage.getItem('color') == null){
                  
       
            $('.panel4').fadeIn(1000);
            $('.panel4').addClass('active');
            $('.dresslenght').draggable( "disable" );
            $('#neckdrop, #dressdrop').draggable( "enable" );
            $('.panel1, .panel2, .panel3, .panel5, .panel6').css('display', 'none');
            console.log('Panel 4 Active');

            

}      
}
}
} 
 //Goes to Color Picker
if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
	if (localStorage.getItem('dress') !== "" && localStorage.getItem('dress') !== null) {
		if (localStorage.getItem('skirt') == "" || localStorage.getItem('skirt') == null){
			
       
            $('.panel3').fadeIn(1000);
            $('.panel3').addClass('active');
            $('.panel1, .panel2, .panel6, .panel4, .panel5').css('display', 'none');
            console.log('Panel 3 Active');
            $('.dresslenght').draggable("disable");

            $(".panel3, #dressslide, .dresslenght").fadeIn(500);

            if(localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == ''){
              localStorage.setItem('skirt', '1');
              console.log('SKirt set to number 1');

            }

            

        
}
}
} //Goes to Skirt Length



  if ($(".panel3").hasClass("active")) {
            	$('.dresslenght').draggable("disable");
            	console.log('Skirt draggable disabled');
}


if (localStorage.getItem('neck') !== "" && localStorage.getItem('neck') !== null) {
		if (localStorage.getItem('dress') == "" ||  localStorage.getItem('dress') == null){
			
      
            $('.panel2, #droppable').fadeIn(1000);
            console.log('Panel 2 Active');
            $('.panel2').addClass('active');
            $('.panel1, .panel6, .panel3, .panel4, .panel5').css('display', 'none');

        
}
} //Goes to Skirt Length


if (localStorage.getItem('neck') == "" || localStorage.getItem('neck') == null) {
       
            $('.panel1').fadeIn(1000);
            $('.panel1').addClass('active');
            console.log('Panel 1 Active');
            $('.panel6, .panel2, .panel3, .panel4, .panel5').css('display', 'none');

}

if (localStorage.getItem('dress') !== "" || localStorage.getItem('dress') !== null) {
       
            $('#droppable').fadeIn(1000);

}



}); // End of Doc Ready