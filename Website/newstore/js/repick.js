$( document ).ready(function() {
$( "#repick1" ).click(function() {

 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel1').addClass('active');
 $('.panel1').delay(600).fadeIn(500);

            
            $('.dresslenght, #neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 1 Active');
});

$('#finalImage1, #finalImage2, #finalImage3, #finalImage4, #finalImage5').draggable({
	helper:'clone'

	});

$('#finalImage1').draggable({
	
    drag: function() {
    	
 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel1').addClass('active');
 $('.panel1').delay(600).fadeIn(500);


            
            $('.dresslenght, #neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 1 Active');

             }

});

$( "#repick2" ).click(function() {

 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel2').addClass('active');
 $('.panel2').delay(600).fadeIn(500);

            
            $('.dresslenght, #neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 2 Active');
});

$('#finalImage2').draggable({
    drag: function() {
       $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel2').addClass('active');
 $('.panel2').delay(600).fadeIn(500);

            
            $('.dresslenght, #neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 2 Active');

             }

});

$( "#repick3" ).click(function() {

 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel3').addClass('active');
 $('.panel3').delay(600).fadeIn(500);


            
            $('#neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 3 Active');
});

$('#finalImage3').draggable({
    drag: function() {
    $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel3').addClass('active');
 $('.panel3').delay(600).fadeIn(500);


            
            $('#neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 3 Active');

             }

});

$( "#repick4" ).click(function() {

 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
             $('.panel4').addClass('active');
 $('.panel4').delay(600).fadeIn(500);

           
            $('#neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 4 Active');
});

$('#finalImage4').draggable({
    drag: function() {
   $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel4').addClass('active');
 $('.panel4').delay(600).fadeIn(500);


            
            $('#neckdrop, #dressdrop').draggable( "enable" );
            console.log('Panel 4 Active');

             }

});

$( "#repick5" ).click(function() {

 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
            $('.panel5').addClass('active');
 $('.panel5').delay(600).fadeIn(500);

            
            console.log('Panel 5 Active');
});

$('#finalImage5').draggable({
    drag: function() {
 $('.panel6').fadeOut(500);
            $('.panel6').removeClass('active');
 $('.panel5').addClass('active');

 $('.panel5').delay(600).fadeIn(500);


            
            console.log('Panel 5 Active');

             }

});

	}); // End of Doc Ready