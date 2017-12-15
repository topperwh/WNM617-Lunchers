<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
 <meta name=viewport content="width=device-width, initial-scale=1">
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110548379-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-110548379-1');
</script>

	<?php include "partials/head.php"; ?>
	<link rel="stylesheet" href="css/slider.css">

	<!-- SpecialSheet -->
	<link rel="stylesheet" href="custom_files/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="custom_files/jquery.ui.touch-punch.min.js"></script> 
	<script src="custom_files/bootstrap.bundle.min.js"></script>
  	
	<!-- End -->
	<link rel="stylesheet" href="css/colorizer.css">

	<link rel="stylesheet" href="css/overwrite.css">
	
	</head>

<body>

	<?php include "partials/nav.php"; ?>
	<div class="divider"></div>
  	<div class="stripe"></div>

	<div class="row">
		<div class="col-md-2 col-sm-12">
        </div>
        <div class="col-md-3 col-sm-12 cl1">

        	<div id="neckdrop" class="neckdrop" style="z-index: 5;"></div>

	        
		
			<div class="dresslenght">
	        	<img id="dressslide" class="mini" src="custom_files/mini.png"> 
	        </div>
			
	        <div class="holdercustom"></div>

        <div id="droppable" class="displayleft">

        	<div id="dressdrop"">
	        </div>

        </div> <!-- End of Droppable Area -->

    </div> 






        <div class="col-md-5 col-sm-12 cr1">
        	
        	<div class="textinbox">
	        	
				<div class="panel panel1">
					<div class="toppanel">
						<img id="forward1" class="forward" src="custom_files/rightarrow.png" title="Continue to Fabric Selection">
						<p class="navpanel">Choose a Neckline</p>
					</div>

					<!-- Neckline Choice -->
					<div class="custombar">
						<!-- Add -->
					 	<br>
					    <div class="thumbnails">
						<div class="thumboutside" id="click1"><img id="neck1" class="thumb" src="custom_files/neck1.png">
							<p class="directions">sweetheart</p>
						</div>
						<div class="thumboutside" id="click2"><img id="neck2" class="thumb" src="custom_files/neck2.png">
						<p class="directions">one-shoulder</p></div>  
						<div class="thumboutside" id="click3"><img id="neck3" class="thumb" src="custom_files/neck3.png">
						<p class="directions">v-neck</p></div>
						<!-- <button id="forward1" class="ui-widget-content ui-corner-all">Continue to Fabric Selection</button>   -->
						<br>
					
						<p class="directions">click to choose neckline</p>
						</div>
					</div>
				</div>
				
				<!-- Fabric Selection -->
				<div class="panel panel2">
					<div class="toppanel">
						<img id="backward1" class="backward" src="custom_files/leftarrow.png" title="Back to Neckline Selection">
						<img id="forward2" class="forward" src="custom_files/rightarrow.png" title="Continue to Dress Length">

						<p class="navpanel">Fabrics</p>
					</div>
					<div class="custombar">
						<!-- Add -->
					 	<br>
					    <div class="thumbnails">
					    	<div class="inline">	
						<div id="draggable1" class="thumboutside2"><img id="dress1" class="dress1" src="custom_files/dress1.jpg">
							

						</div>
						<p class="directions">cotton</p></div>
						<div class="inline">	
						<div id="draggable2" class="thumboutside2"><img id="dress2" class="dress2" src="custom_files/dress2.jpg">
						</div>
						<p class="directions">tweed</p></div>
						<div class="inline">  
						<div id="draggable3" class="thumboutside2"><img id="dress3" class="dress3" src="custom_files/dress3.jpg">
						</div> 
						<p class="directions">linen</p></div>
						<!-- <button id="backward1">Back to Neckline Selection</button>  
						<br>
						<button id="forward2">Continue to Dress Length</button>   -->

						<br>
					
						  <p class="directions">drag the fabric into the box under the model</p>
						</div>
					</div>
				</div>
				

				<!-- Dress Slider -->
				<div class="panel panel3">
					<div class="toppanel">
						<img id="backward2" class="backward" src="custom_files/leftarrow.png" title="Back to Fabric Selection">
						<img id="colorSelect" class="forward" src="custom_files/rightarrow.png" title="Choose a Color">
						<p class="navpanel">Dress Length</p>
					</div>
					<div class="custombar">
							<!-- Add -->
						 	<br>
						    <div id="sliderSelect">
								<div id="flat-slider" class="flat-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
								  <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
								</div>
								<br>
								<p class="directions">use the slider for the length</p>
							</div>
							<!-- <button id="backward2">Back to Fabric Selection</button>  
							<br>
							<button id="colorSelect">Choose a Color</button> -->
				 
					</div>
				</div>
			

				<!-- Color Selection -->
				<div class="panel panel4">
					<div class="toppanel">
						<img id="backward3" class="backward" src="custom_files/leftarrow.png" title="Back to Dress Length Selection">
						<img id="forward3" class="forward" src="custom_files/rightarrow.png" title="Design a Pattern">

						<p class="navpanel">Choose a Color</p>
					</div>
					<div class="custombar">
							<div class="preview">
  <input id="red" class='red' name='color' type='radio' />
  <input id="yellow" class='yellow' name='color' type='radio' />
  <input id="blue" class='blue' name='color' type='radio' />
  <input id="darkblue" class='darkblue' name='color' type='radio' /> 

 <!--  <img src="custom_files/blackmini.png" style="width: 150px; height: 165px;" /> -->
</div>
<button id="removeColor" class="btn btn-lg btn-warning">Remove Color</button>

							<!-- <button id="backward3">Back to Dress Length Selection</button>  
							<br>
							<button id="cartbtn">Add to Cart</button>  --> 

					</div>
				</div>

				<div class="panel panel5">
					<div class="toppanel">
						<img id="backward4" class="backward" src="custom_files/leftarrow.png" title="Back to Color Selection">
						<img id="forward4" class="forward" src="custom_files/rightarrow.png" title="Finalize your Selections">

						<p class="navpanel">Choose a Pattern</p>
					</div>
					<div class="custombar">

						<div id="pattern">
							
							<div id="patternHome">
								<img id="patternimg" src="" style="line-height: 50px; text-align: center;">
								
							</div>

							<div id="patternButtons">
							<label for="imageUpload" id="pattern1" class="btn btn-lg btn-primary">Upload a Pattern</label>
							<input class="classhere" type="file" name="pattern"  id="imageUpload" accept="image/*" style="display: none">
							<button class="btn btn-lg btn-warning
							 erase">Remove Pattern</button><br>
							<a id="skip" href="#">Skip</a>
							 
							</div>
							<p id="patternText">uploads must be under 2 MB's</p>

					</div>
					

					</div>
				</div>

				<div class="panel panel6">
					<div class="toppanel">
						<img id="backward5" class="backward" src="custom_files/leftarrow.png" title="Back to Choosing a Pattern">

						<p class="navpanel">Finalize</p>
					</div>
					<div class="custombar">
							<div id="selection">

								<div id="selections1">
									<p class="selectionTitle">Neckline</p>
									<img id="finalImage1"  class="finalImage" src="">
									<p id="selectionName1" class="selectionName"></p>
									<p id="repick1" class="repick">Change</p>
									
								</div>	
								<div id="selections2">
									<p class="selectionTitle">Fabric</p>
									<img id="finalImage2" class="finalImage" src="">
									<p id="selectionName2" class="selectionName"></p>
									
									<p id="repick2" class="repick">Change</p>

								</div>	
								<div id="selections3">
									<p class="selectionTitle">Dress Length</p>
									<img id="finalImage3" class="finalImage" src="">
									<p id="selectionName3" class="selectionName"></p>
									<p id="repick3" class="repick">Change</p>
								

								</div>	
								<div id="selections4">
									<p class="selectionTitle">Color</p>
									<div id="finalImage4" class="finalImage"></div>
									<p id="selectionName4" class="selectionName"></p>
									<p id="repick4" class="repick">Change</p>

								</div>	
								<div id="selections5">
									<p class="selectionTitle">Pattern</p>
									<img id="finalImage5" class="finalImage" src="">
									<p id="selectionName5" class="selectionName"></p>
									<p id="repick5" class="repick">Change</p>

								</div>	
							
							</div>
				
						
							<button id="cartbutton" class="btn btn-lg btn-primary"><a href="../login.php">Add to Cart</a></button> 
						
						

					

					</div>
				</div>




          	</div>

          		


		</div>
		<div class="col-md-2 col-sm-12">
        </div>




	</div>
	
	
	</div>
	    <?php include "partials/footer.php"; ?>

	    <script src="js/neck.js"></script>  
	    <script src="js/drag.js"></script> 
	    <script src="js/rechoice.js"></script> 
	    <script src="js/slider.js"></script>
<script src="js/colorizer.js"></script>
<script src="js/backforward.js"></script>
	    <script src="js/imagewrite.js"></script>  

<script src="js/landing.js"></script>
<script src="js/finalize.js"></script>
<script src="js/repick.js"></script>

	    <script>

	    	$( "#click1,#click2, #click3" ).click(function() {
	    		$(".panel1").fadeOut(500);
$(".panel2").delay(650).fadeIn(450);
$("#droppable").delay(650).fadeIn(450);

});

	    	$.fn.colorSelection = function(){ 
	    		$(".panel3").fadeOut(500);
$(".panel4").delay(650).fadeIn(450);
$(".panel4").addClass("active");
 $('.panel3').removeClass("active");
 $('.dresslenght').draggable( "disable" );
       

    }
    $("#colorSelect").click(function(){
        $.fn.colorSelection();
    });

	    	
	    </script>
	
</body>
</html>