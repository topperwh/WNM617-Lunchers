<!DOCTYPE html>
<!-- saved from url=(0063)http://topperwh.webhostingforstudents.com/617-store/billing.php -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110548379-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-110548379-1');
</script>
	
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="./done.php_files/index.css">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="./done.php_files/css.css" rel="stylesheet">
    <link href="./done.php_files/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./done.php_files/animate.min.css">
        
  <link rel="stylesheet" href="./done.php_files/index-bg.css">
 <!--  <script type="text/javascript" src="./billing.php_files/jquery.min.js"></script> -->
 <style type="text/css">
      .py-5.footer{
        display: none;
      }
    </style>
</head>
<body>

	<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.php"><img class="logo" src="./billing.php_files/le_logo.png"><img class="logo2" src="./billing.php_files/le_logotext.svg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="concept.php">Concept</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="collection.php">Fall Collection</a>
            </li>
            <li class="nav-item">
              <button class="btn btn-square"><a href="newstore/custom.php">Make Yours</a></button>
            </li>
          </ul>
        </div>
      </div>
      </nav>

	<div class="divider"></div>
  <div class="stripe"></div>
  
  <div class="container">
    <div class="col-md-12 col-sm-12">
            <div class="divider"></div>
                <h1 class="mt-5">Shipping Address</h1><br>
    <div class="row">
        <div class="col-md-8 col-sm-12">
            <div>

                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                           <div class="form-group">
                               <input type="text" class="form-control input-sm" name="name" id="given-name" required="" placeholder="Name" autocomplete="given-name">
                          </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                            <div class="form-group">
                                <input name="lname" class="form-control input-sm" id="family-name" required="" placeholder="Lastname" autocomplete="family-name">
                            </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                              <div class="form-group">
                                  <input type="email" name="email" id="frmEmailA" class="form-control input-sm" placeholder="Email" required="" autocomplete="email">
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                            <div class="form-group">
                                <input type="tel" name="phone" id="frmPhoneNumA" class="form-control input-sm" placeholder="Phone humber" required="" autocomplete="tel">
                            </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <input name="ship-address" required="" id="frmAddressS" class="form-control input-sm" placeholder="Address Street P.O.Box" autocomplete="shipping street-address">
                            </div>
                        </div>
                      </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-xs-12 col-sm-4 col-md-3">
                                <div class="form-group">
                                <input name="ship-city" required="" id="frmCityS" class="form-control input-sm" placeholder="City" autocomplete="shipping locality">
                                </div>
                        </div>

                        <div class="col-xs-12 col-sm-4 col-md-3">
                                <div class="form-group">
                        <input name="ship-state" required="" id="frmStateS" placeholder="State" class="form-control input-sm" autocomplete="address-level1">
                                </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-3">
                            <div class="form-group">
                                <input name="ship-zip" required="" id="frmZipS" placeholder="Postcode" class="form-control input-sm" autocomplete="shipping postal-code">                 
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-3">
                            <div class="form-group">
                                <strong><p>USA</p></strong>            
                            </div>
                        </div>

                      </div>
                    </div>
                    
                  <div class="col-md-4 col-sm-12">
                    <div class="bilg">
                      <h2>Need help?</h2>
                      <h3>If you have any question or need help with your account, you may CONTACT US to assist you.<br>
                        CALL US AT<br>
                        1-855-486-4756<br>
                        Mon-Sat: 9am-12am ET<br>
                        Sun: 11am-11pm ET</h3>
                      </div>
                    </div>
                  </div>
          
  </div>
</div>
     <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
        <div class="col-md-8 col-sm-12">
                <h1 class="mt-5">Payment</h1><br>
                <form action="billing.php" method="POST" id="payment-form">
                    <span class="payment-errors"></span>
                    <div class="row">
                        <div class="form-group col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <span>Card Number</span><br><span>Test Card 4242424242424242</span>
                                <input name="cardnumber" required="" id="frmCCNum" size="20" class="form-control input-sm" autocomplete="cc-number" data-stripe="number">

                                <br>
                                <span>Expiration (MM/YYYY)</span><br>
                                <input type="text" size="2" class="form-control2 input-sm" data-stripe="exp-month"> <span> / </span>
                                <input type="text" size="4" class="form-control2 input-sm" data-stripe="exp-year"> 
                                <br><br>
                                <span>CVC</span><br>
                                    <input type="text" size="4" class="form-control2 input-sm" data-stripe="cvc">

                                <br><br>
                                <button type="submit" class="btn btn-square">Submit Payment</button>
                            </div>
                        </div>
                      
                    </div>
                </form>
          </div>
          <div class="col-md-2 col-sm-12">
            
          </div>
          </div>
          </div>
      </div>
      <div class="divider"></div>


      

  <footer class="py-5 footer">
      <div class="container">
      	<img class="logofoot" src="./billing.php_files/le_logofoot.png">
		<br>
		<br>
        <p class="m-0 text-white">Copyright © Le Shop 2017</p>
      </div>
      <!-- /.container -->
    </footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="./done.php_files/bootstrap.bundle.min.js"></script>

<script src="./billing.php_files/saved_resource"></script>
<script>Stripe.setPublishableKey('pk_test_1j0K344ZBhQP02jgwkoHsUkO');
              var stripeResponseHandler = function(status, response) {
                  var $form = $('#payment-form');
                  if(response.error) {
                      $form.find('.payment-errors').text(response.error.message);
                      $form.find('button').prop('disabled', false);
                  } else {
                      var token = response.id;
                      alert(token);
                      window.location.href= 'done.php';
                      //-----send the token to sever here
                  }

              }  

            jQuery(function($) {
                $('#payment-form').submit(function(e){
                     var $form = $(this);
                     $form.find('button').prop('disabled',true);
                    Stripe.card.createToken($form, stripeResponseHandler);
                    return false;
                });
            });

jQuery(function($) {
  $('#payment-form').submit(function(e){
    var $form = $(this);
    $form.find('button').prop('disabled',true);

  });
});</script>
  
<iframe name="stripeXDM_default913090_provider" id="stripeXDM_default913090_provider" aria-hidden="true" src="./billing.php_files/channel.html" frameborder="0" style="position: absolute; top: -2000px; left: 0px;"></iframe><iframe src="./billing.php_files/outer.html" frameborder="0" allowtransparency="true" scrolling="no" tabindex="-1" aria-hidden="true" style="width: 1px !important; height: 1px !important; position: fixed !important; visibility: hidden !important; pointer-events: none !important;"></iframe></body></html>