
<!DOCTYPE html>
<html lang="en">

<head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <title>OTyDUZEE.MX</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="OTyDUZEE es constituido por un grupo .">
    <meta name="keywords" content="">
    <meta name="author" content="otyduzee.com">

    <!-- Bootstrap Css -->
    <link href="bootstrap-assets/css/bootstrap.min.css" rel="stylesheet">
	<link href='favicon.ico' rel='shortcut icon' type='image/x-icon'/>

    <!-- Style -->



    <link href="plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="plugins/owl-carousel/owl.theme.css" rel="stylesheet">
    <link href="plugins/owl-carousel/owl.transitions.css" rel="stylesheet">
    <link href="plugins/Lightbox/dist/css/lightbox.css" rel="stylesheet">
    <link href="plugins/Icons/et-line-font/style.css" rel="stylesheet">
    <link href="plugins/animate.css/animate.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bootstrap-assets/js/bootstrap.min.js"></script>
    <script src="js/custom.js"></script>
    <!-- JS PLUGINS -->
    <script src="plugins/owl-carousel/owl.carousel.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>

    <script src="plugins/countTo/jquery.countTo.js"></script>
    <script src="plugins/inview/jquery.inview.min.js"></script>
    <script src="plugins/WOW/dist/wow.min.js"></script>
    <!-- GOOGLE MAP -->
    <script src="https://maps.googleapis.com/maps/api/js"></script>

    <!--SLIDE-->
    <script src="slippry-master/dist/slippry.min.js"></script>
    <link rel="stylesheet" href="slippry-master/dist/slippry.css">


    <link rel="stylesheet" type="text/css" href="shadowbox/shadowbox.css">
      <script type="text/javascript" src="shadowbox/shadowbox.js"></script>
      <script type="text/javascript">
      Shadowbox.init({
      language:   "es",
      modal: true,
      players:    ['html', 'iframe', 'qt', 'wmp', 'php', 'flv']
      });
      </script>



        <script>
            $(function() {
                var demo1 = $("#demo1").slippry({
                    transition: 'fade',
                    useCSS: true,
                    // speed: 1000,
                    // pause: 3000,
                    auto: true,
                    // preload: 'visible',
                    // autoHover: false
                });

            });
        </script>



        <script type="text/javascript">
            $(".page-scroll").on("click", function(){
                    $(".page-scroll").collapse("hide");
            }
        </script>

    <!-- Icons Font -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


</body>

</head>

<body onload="cargar('#contenido1', '1.1.php');">
    <!-- Preloader
    ============================================= -->
    <div  class="preloader"><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></div>
    <!-- Header
    ============================================= -->
    <section class="main-header">
        <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        </div>
        <div id="navbar" class="navbar-collapse collapse" style="border-bottom: 1px solid black;">
          <ul class="nav navbar-nav" >

          </ul>
          <!--
            navbar navbar-default navbar-static-top
            navbar navbar-default navbar-fixed-top
          -->
          <ul class="nav navbar-nav navbar-right">
          <!--
        http://corporativomigas.ddns.net:8081/AeropuertoCGW/

          -->
                      <li><a href="#services" class="page-scroll">ZEE</a></li>
                      <li><a href="#planeacion" class="page-scroll">PLANEACIÓN</a></li>
                      <li><a href="#ciudades" class="page-scroll">CIUDADES CES</a></li>
                      <li><a href="#gobernanza" class="page-scroll">GOBERNANZA</a></li>
                      <li><a href="#insumos" class="page-scroll">INSUMOS</a></li>
                      <li><a href="#planes" class="page-scroll">PLANES</a></li>
                      <li><a href="#glosario" class="page-scroll">GLOSARIO</a></li>


          </ul>
        </div><!--/.nav-collapse -->
      </div>
    <!--<img src="img/separador.png" width="2%">-->
     </nav>

<br><br><br>

	<!--SLIDE-->
	<div id="conteiner">
	<center >
	<br>
	<img src="home.png" width="50%">
	</center>
	</div>
	<!--SLIDE-->

    </section>

    <!-- Welcome
    ============================================= -->
    <section id="welcome">
        <div class="container">
           <center  style="font-size: 3em; font-family: Rokkitt;color:#e3313d;font-weight:bold;letter-spacing: 10px;">

														OTyDUZEE</center>

                            <p><center style="font-size: 1.2em; font-family: Montserrat;font-weight:999; color:#1e2f43;" >ORDENAMIENTO TERRITORIAL Y DESARROLLO URBANO <br>PARA ZONAS ECONÓMICAS ESPECIALES</center></p>
                   </div>
    </section>

    <!-- Services
    ============================================= -->
        <section id="services">
        <div class="container">

        <div class="services-box">
        <div class="row wow fadeInUp" data-wow-delay=".2s" id="contenido1">
        </div>
        </div>
        </div>
        </section>
		<br><br>


</body>

<script type="text/javascript">

		function ejecuta_ajax(archivo, parametros, capa){
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange=function()
        {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById(capa).innerHTML=xmlhttp.responseText;
        }
        }

        x = Math.random()*99999999;
        xmlhttp.open("GET",archivo+"?"+parametros+"&x="+x, true);
        xmlhttp.send();
        }

        </script>

        <script>
		function cargar(div, desde)
		{
		$(div).load(desde);
		}
		</script>


               <script>
                 function activass1(){
                   document.getElementById("ss1.1").style="font-weight:bold;cursor: pointer;color: #1e2f43;font-family:Montserrat;font-size:9.5pt"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass2(){
                   document.getElementById("ss1.2").style="font-weight:bold;font-size:9.5pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass3(){
                   document.getElementById("ss1.3").style="font-weight:bold;font-size:9.5pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass4(){
                   document.getElementById("ss1.4").style="font-weight:bold;font-size:9.5pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass5(){
                   document.getElementById("ss1.5").style="font-weight:bold;font-size:9.5pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                    document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass6(){
                   document.getElementById("ss1.6").style="font-weight:bold;font-size:9.5pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                    document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasss1(){
                   document.getElementById("sss1.1").style="font-weight:bold;font-size:8.5pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasss2(){
                   document.getElementById("sss1.2").style="font-weight:bold;font-size:8.5pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasss3(){
                   document.getElementById("sss1.3").style="font-weight:bold;font-size:8.5pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }


                 function activasss4(){
                   document.getElementById("sss1.7").style="font-weight:bold;font-size:8.5pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss5(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-weight:bold;font-size:8.5pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss6(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-weight:bold;font-size:8.5pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss7(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-weight:bold;font-size:8.5pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss8(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-weight:bold;font-size:8.5pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss9(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-weight:bold;font-size:8.5pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss10(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-weight:bold;font-size:8.5pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss11(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-weight:bold;font-size:8.5pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }

                 function activasss12(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#485e6a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-weight:bold;font-size:8.5pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }


               </script>

</html>
