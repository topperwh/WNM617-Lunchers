    
$( document ).ready(function() {

$("#draggable1, #draggable2,#draggable3").draggable({

    helper:'clone'

});

$("#droppable").droppable({
   tolerance: 'touch',
   over: function(event, ui) {
        $(this).css('z-index', 1);
        ui.helper.css('z-index', 10);
    },
    drop: function(event, ui) {
        if (ui.draggable.is('#draggable1')) {

            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="fabric" src="custom_files/dress1.jpg">').fadeIn(500);
            $('#draggable2, #draggable3').css("background-color", "initial");
            $('#dress2, #dress3 ').css("opacity", "0.5");
            $('#dress1').css("opacity", "initial");
            
            localStorage.setItem("dress", "1");
            // $('#draggable2, #draggable3 ').draggable("disable");
            // $('#draggable1').draggable( "disable" );
            $('.panel2').removeClass("active");
            $('.panel3').addClass("active");
            $('#dressdrop, .dresslenght').css("top", "");
       $('#dressdrop, .dresslenght').css("left", "");
       $('#dressdrop').css("display", "initial");
$('#forward2').fadeIn(2000);
 $('.dresslenght').draggable("disable");


            
             $(".panel2").fadeOut(500);
             $(".panel3, #dressslide, .dresslenght").delay(650).fadeIn(450);


        

             if(localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == ''){
              localStorage.setItem('skirt', '1');

              console.log('SKirt set to number 1');
            }
             


        }
 if (ui.draggable.is('#draggable2')) {
            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="fabric" src="custom_files/dress2.jpg">').fadeIn(500);
            $('#draggable1, #draggable3').css("background-color", "initial");
            $('#dress1, #dress3 ').css("opacity", "0.5");
            $('#dress2').css("opacity", "initial");
           
            localStorage.setItem("dress", "2");
            // $('#draggable2').draggable( "disable" );
            // $('#draggable1, #draggable3 ').draggable( "enable" );
$('#forward2').fadeIn(2000);
 $('.dresslenght').draggable( "disable" );



        
            $('#dressdrop, .dresslenght').css("top", "");
       $('#dressdrop, .dresslenght').css("left", "");
       $('#dressdrop').css("display", "initial");

           
             $(".panel2").fadeOut(500);
             $(".panel3, #dressslide, .dresslenght").delay(650).fadeIn(450);
             $('.panel2').removeClass("active");
            $('.panel3').addClass("active");

            if(localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == ''){
              localStorage.setItem('skirt', '1');
              console.log('SKirt set to number 1');

            }


  $('#secondh2, #main, #clear-btn2').css("display", "none");
            // console.log(localStorage.getItem('dress'));

        }

        if (ui.draggable.is('#draggable3')) {
            $("#dressdrop").html('');
            $("#dressdrop").html('<img class="fabric" src="custom_files/dress3.jpg">').fadeIn(500);
            $('#draggable1, #draggable2 ').css("background-color", "initial");
            $('#dress2, #dress1 ').css("opacity", "0.5");
            $('#dress3').css("opacity", "initial");
            // $('#draggable1, #draggable2').draggable( "enable" );
            // $('#draggable3').draggable( "disable" );
          
            localStorage.setItem("dress", "3");
            $(".panel2").fadeOut(500);
             $(".panel3,  #dressslide, .dresslenght").delay(650).fadeIn(450);
             $('.panel2').removeClass("active");
            $('.panel3').addClass("active");
            $('#dressdrop, .dresslenght').css("top", "");
       $('#dressdrop, .dresslenght').css("left", "");
       $('#dressdrop').css("display", "initial");
$('#forward2').fadeIn(2000);
 $('.dresslenght').draggable("disable");


      

       if(localStorage.getItem('skirt') == null || localStorage.getItem('skirt') == ''){
              localStorage.setItem('skirt', '1');
              console.log('SKirt set to number 1');

            }



        
          

        }

    }
});

if (localStorage.getItem("dress") == "1") {

  document.getElementById('dressdrop').innerHTML = '<img class="fabric" src="custom_files/dress1.jpg">';

  $('#dress2, #dress3 ').css("opacity", "0.5");
  $('#dress1').css("opacity", "initial");

  // $('#draggable2, #draggable3 ').draggable("disable");
  //           $('#draggable1').draggable( "disable" );


}

if (localStorage.getItem("dress") == "2") {

  document.getElementById('dressdrop').innerHTML = '<img class="fabric" src="custom_files/dress2.jpg">';
 
  $('#dress1, #dress3 ').css("opacity", "0.5");
  $('#dress2').css("opacity", "initial");
  // $('#draggable2').draggable( "disable" );
  //           $('#draggable1, #draggable3 ').draggable("disable");

  
}

if (localStorage.getItem("dress") == "3") {

  document.getElementById('dressdrop').innerHTML = '<img class="fabric" src="custom_files/dress3.jpg">';
  $('#dress2, #dress1 ').css("opacity", "0.5");
  $('#dress3').css("opacity", "initial");

  // $('#draggable1, #draggable2 ').draggable("disable");
  //           $('#draggable3').draggable( "disable" );


  
}

$.fn.myFunction = function(){ 
       localStorage.removeItem("dress");
       $('#dress2, #dress3, #dress1 ').css("opacity", "initial");
       $('#draggable1, #draggable2, #draggable3 ').css("background-color", "initial");
       $('#dressdrop').html("");

    }
    $(".clear-btn").click(function(){
        $.fn.myFunction();
    });



});