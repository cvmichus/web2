<?php
require'class/config.php';
require'class/users.php';
require'class/dbactions.php';
//realizamos la conexión a la base de datos
$objCon = new Connection();
$objCon->get_connected();
//consultamos el listado de los usuarios!!
$objUse = new Users();
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <title>MiGasWeb.com</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Mi Gas es constituido por un grupo de empresarios mexicanos comprometidos con la responsabilidad social y el medio ambiente, quienes eligen el estado de Queretaro con el objetivo de establecer estaciones modernas, atractivas y limpias que ofrecen al cliente un excelente servicio y las mejores promociones.">
    <meta name="keywords" content="Gasolineras,MiGas,Mi gas, Gasolineras Queretaro,Estaciones de Servicio, Gasolineras, Gasolina, Gasolinería ">
    <meta name="author" content="migasweb.com">

    <!-- Bootstrap Css -->
    <link href="bootstrap-assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Style -->

2017 - www.incapital.mx


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

      <!-- PNotify -->
        <script type="text/javascript" src="pnotify.custom.min.js"></script>
        <link href="pnotify.custom.min.css" media="all" rel="stylesheet" type="text/css" />
        <?php
        if (isset($_GET['e']))  {
        ?>
        <script type="text/javascript">
        $(function(){
            new PNotify({
                title: 'MENSAJE ENVIADO',
                text: 'Se envio su mensaje con exito.',
                type: "success",
                sound: true
            });
        });
        </script>
        <?php
      }
        if (isset($_GET['f']))  {
        ?>
        <script type="text/javascript">
        $(function(){
            new PNotify({
                title: 'MENSAJE NO ENVIADO',
                text: 'Tu mensaje no se ha enviado,intentalo nuevamente.',
                type: "error",
                sound: true
            });
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

        <?php
      }
        ?>

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
<style>
@font-face {
    font-family: "Calculator";
    src: url(fonts/digital-7.ttf) format("truetype");
}

#lab_precio{
    font-family: Calculator; 
    font-size: 3.0em; 
    color:#ffffff;
    width:20%;
    height: 1.5em;
    margin-right: 100px;
    margin-left: 50px;
    
}

@media (min-width: 200px) { 
     #lab_precio{
    font-family: Calculator; 
    font-size: 2.0em; 
    color:#ffffff;
    width: 100%;
    height: 1.5em;
}

 }


@media (min-width: 300px) { 
     #lab_precio{
    font-family: Calculator; 
    font-size: 3em; 
    color:#ffffff;
    width: 40%;
      height: 1.4em;
      float: right;
    right: -10px;
    bottom: 3px;
}

 }


@media (min-width: 576px) { 
     #lab_precio{
        font-family: Calculator; 
    font-size: 3em; 
    color:#ffffff;
    width: 29%;
      height: 1.3em;
      float: right;
    right: 110px;
    bottom: 6px;
    
}

 }

@media (min-width: 768px) {

     #lab_precio{
      font-family: Calculator; 
    font-size: 4.8em; 
    color:#ffffff;
    width: 29%;
      height: 1.3em;
      float: right;
    right: -30px;
    bottom: 107px;
}


}

@media (min-width: 992px) { 

     #lab_precio{
    font-family: Calculator; 
    font-size: 4.8em; 
    color:#ffffff;
    width: 19%;
      height: 1.55em;
      float: right;
    right: 92px;
    bottom: 125px;


}

}

@media (min-width: 1200px) { 

     #lab_precio{
    font-family: Calculator; 
    font-size: 4.8em; 
    color:#ffffff;
    width: 19%;
      height: 1.55em;
      float: right;
    right: 190px;
    bottom: -7px;

}

}

</style>
<body>
    <!-- Preloader
    ============================================= -->
    <div class="preloader"><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></div>
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
          <a class="navbar-brand" href="index.php"><img src="img/logo/logo_blanco.png" width="20px" class="img-responsive" alt="logo"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
             <li><a href="#demo1" class="page-scroll">Inicio</a></li>
                            <li><a href="#services" class="page-scroll">Nosotros</a></li>
                             <li><a href="#portfolio" class="page-scroll">Precios</a></li>
                            <li><a href="#team" class="page-scroll">Facturar</a></li>
                            <li><a href="#contact" class="page-scroll">Contactanos</a></li>
          </ul>
          <!--
            navbar navbar-default navbar-static-top
            navbar navbar-default navbar-fixed-top
          -->
          <ul class="nav navbar-nav navbar-right">
          <!--
        http://corporativomigas.ddns.net:8081/AeropuertoCGW/

          -->
           <li><a href="http://200.95.237.38:8081/AeropuertoCGW/" target="_blank" class="page-scroll">Acceso a Clientes</a></li>
            <!--<li><a href="#">Accesar</a></li>-->
          </ul>
        </div><!--/.nav-collapse -->
      </div>
	  <!--<img src="img/separador.png" width="2%">-->
	  <div class="container">
			<div class="row">
			<div class="col-sm-8">
			<marquee style="color:white;background-color:#000;" behavior="scroll" scrollamount="5" direction="left" >
			<?php
			$noticias=$objUse->noticias();
			while($rowN= mysql_fetch_array($noticias)){
			echo '<label>'.$rowN['titulo'].'</label>';
			echo ": &nbsp;";
			echo $rowN['texto'];
			echo "&nbsp;";
			echo '<img src="img/separador.png" width="4.5%">';
			echo "&nbsp;";
			}
			?>		</marquee> </div>
			
			<div class="col-sm-4">

			 <marquee style="color:white;background-color:#000;font-size:1em;" behavior="scroll" scrollamount="5" direction="left" width="100%" > 
      
          <?php 

$doc = new DOMDocument(); 
$doc->load( 'http://www.banxico.org.mx/rsscb/rss?BMXC_canal=fix&BMXC_idioma=es' ); 

// Cargamos todos los Items 
$items = $doc->getElementsByTagName( "item" ); 

// Recorremos cada uno 
foreach( $items as $item ) 
{ 
// El titulo del post 
$titles = $item->getElementsByTagName( "title" ); 
$title = str_replace("(0 puntos)","",$titles->item(0)->nodeValue); 

// El link del post 
$links = $item->getElementsByTagName( "link" ); 
$link = $links->item(0)->nodeValue; 


// Contenido del post 
$contenidos = $item->getElementsByTagName( "description" ); 
$contenido = $contenidos->item(0)->nodeValue; 

// Mostramos el resultado 
echo "$title"; 
} 

?>
<?php 
echo "&nbsp;";
echo '<img src="img/separador.png" width="9.5%">';
echo "&nbsp;";
?>
<?php 

$doc2 = new DOMDocument(); 
$doc2->load( 'http://www.banxico.org.mx/rsscb/rss?BMXC_canal=euro&BMXC_idioma=es' ); 

// Cargamos todos los Items 
$items2 = $doc2->getElementsByTagName( "item" ); 

// Recorremos cada uno 
foreach( $items2 as $item ) 
{ 
// El titulo del post 
$titles2 = $item->getElementsByTagName( "title" ); 
$title2 = str_replace("(0 puntos)","",$titles2->item(0)->nodeValue); 

// El link del post 
$links2 = $item->getElementsByTagName( "link" ); 
$link = $links2->item(0)->nodeValue; 


// Contenido del post 
$contenidos2 = $item->getElementsByTagName( "description" ); 
$contenido = $contenidos2->item(0)->nodeValue; 

// Mostramos el resultado 
echo $title2;  
} 

?>

       </marquee>
			</div>
			</div>
	  </div>
     </nav> 

<br>
        <!--SLIDE-->
         <div id="conteiner">
         <ul id="demo1">

                <li><a href="#slide1"><img src="img/sliders/bannerweb_sorteo.png" alt="<a style='color:white' href='bases/BasesSorteoMiGas.pdf' target='_blank'>Ver las Bases</a>"></a></li>
                <li><a href="#slide2"><img src="img/sliders/Slide0.png"  ></a></li>
                <li><a href="#slide3"><img src="img/sliders/Slide1.png" ></a></li>
                <li><a href="#slide4"><img src="img/sliders/Slide2.png" ></a></li>
                <li><a href="#slide5"><img src="img/sliders/Slide3.png" ></a></li>
            </ul>

    </div>
        <!--SLIDE-->
            <script>
            $(function() {
                var demo1 = $("#demo1").slippry({
                    transition: 'fade',
                    useCSS: true,
                    speed: 1000,
                    // pause: 3000,
                    auto: true
                    // preload: 'visible',
                    // autoHover: false
                });

            });
        </script>
    </section>

    <!-- Welcome
    ============================================= -->
    <section id="welcome">
        <div class="container">
            <h2>Bienvenido a <span>Mi GAS</span></h2>
            <hr class="sep">
            <p><h2>"Nos esforzamos litro a litro"</h2></p>
            <img class="img-responsive center-block wow fadeInUp" data-wow-delay=".3s" src="img/welcome/MI-GAS_logo.png" alt="logo">
        </div>
    </section>

    <!-- Services
    ============================================= -->
    <section id="services">
        <div class="container">
            <h2 style="text-align: center;">Quienes Somos</h2>
            <hr class="light-sep">
            <p style="text-align: justify;">Mi Gas Gasolineras es constituido por un grupo de empresarios mexicanos comprometidos con la responsabilidad social y el medio ambiente, quienes eligen el estado de Queretaro con el objetivo de establecer estaciones modernas, atractivas y limpias que ofrecen al cliente un excelente servicio y las mejores promociones.</p>
<br><br>
            <div class="services-box">
                <div class="row wow fadeInUp" data-wow-delay=".3s">
                    <div class="col-md-4">
                        <div class="media-left"><span class="icon-briefcase "></span></div>
                        <div class="media-body">
                            <h3 style="text-align: center;">MISION</h3>
                            <p style="text-align: justify;">Comercializar combustibles de calidad, brindando un excelente servicio superando las expectativas de nuestros clientes, siempre apegados a ser social mente responsables y cuidando el medio ambiente..</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="media-left"><span class="icon-flag "></span></div>
                        <div class="media-body">
                            <h3 style="text-align: center;">VISION</h3>
                            <p style="text-align: justify;">Ser lideres en la comercialización de combustibles en la zona de Queretaro, logrando la satisfacción de nuestros clientes mejorando nuestros procesos de manera continua, siempre guiados por la honestidad y el trabajo en equipo.</p>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="media-left"><span class="icon-clipboard"></span></div>
                        <div class="media-body">
                            <h3>VALORES</h3>
                            <p style="text-align: justify;">

                              Responsabilidad<br>
                              Actitud de servicio<br>
                              Compromiso<br>
                              Lealtad<br>
                              Pasion <br>

                              </p>
                              <br><br>
                            
                        </div>

                    </div>


                </div>
            </div>
        </div>

           <div class="container">
            <h2>SUPER EMPRESA 2017</h2>
            <hr class="sep">
            <p>Es un placer comunicarte que  formamos parte del Ranking Expansión, Súper Empresas 2017.</p>
            <img class="img-responsive center-block wow fadeInUp" data-wow-delay=".2s" src="img/manualsuperempresas/Logo-super empresas-2016-03.jpg" alt="logo" width="80%">
        </div>

    </section>

    <!-- Portfolio
    ============================================= -->
    <section id="portfolio">
            <div class="container">
            <h2>PRECIOS</h2>
            
            
          <div class="row">
           <div class="col-sm-12"><img src="img/logo/MI-GAS_logo.png" alt="migas" title="MIGASWEB" class="img-responsive center-block"></div>
          <div class="col-sm-8"><img src="img/magna2.jpg" title="MAGNA" alt="MAGNA" class="img-responsive center-block"></div>
          <div class="col-sm-4" id="lab_precio"  style="background-color: #006d14;"><?php
                      $id=1;
                      $precio_magna=$objUse->precio_magna($id);
                          $rowm= mysql_fetch_array($precio_magna);
                          echo "$".$rowm['precio'];

                       ?>
                           
                </div>
          </div>  

           <div class="row">
          <div class="col-sm-8"><img src="img/premium2.jpg" alt="PREMIUM" class="img-responsive center-block"></div>
          <div class="col-sm-4" id="lab_precio" style="background-color: #b80024;">
             <?php
                        $id=2;
                        $precio_prem=$objUse->precio_prem($id);
                            $rowp= mysql_fetch_array($precio_prem);
                            echo "$".$rowp['precio'];

                         ?>
          </div>
          </div>  

           <div class="row">
          <div class="col-sm-8"><img src="img/disel.jpg" alt="DISEL" class="img-responsive center-block"></div>
          <div class="col-sm-4" id="lab_precio" style="background-color: #000000;">
            <?php
                        $id=3;
                        $precio_disel=$objUse->precio_disel($id);
                            $rowd= mysql_fetch_array($precio_disel);
                            echo "$".$rowd['precio'];

                         ?>
          </div>
          </div>  
     
        </div>
    </section>
    <!-- Work Process
    ============================================= -->
    <!--<section id="work-process">
        <div class="container">
            <h2>Work Process</h2>
            <hr class="sep">
            <p>What Happen In The Background</p>
            <div class="row wow fadeInUp" data-wow-delay=".3s">
                <div class="col-lg-3">
                    <span class="icon-chat"></span>
                    <h4>1.Discuss</h4>
                </div>
                <div class="col-lg-3">
                    <span class="icon-circle-compass"></span>
                    <h4>2.Sketch</h4>
                </div>
                <div class="col-lg-3">
                    <span class="icon-browser"></span>
                    <h4>3.Make</h4>
                </div>
                <div class="col-lg-3">
                    <span class="icon-global"></span>
                    <h4>4.Publish</h4>
                </div>
            </div>
        </div>
    </section>-->
    <!-- Some Fune Facts
    ============================================= -->
  <!--  <section id="fun-facts">
        <div class="container">
            <h2>Some Fun Facts </h2>
            <hr class="light-sep">
            <p>Fun Facts</p>
            <div class="row wow fadeInUp" data-wow-delay=".3s">
                <div class="col-lg-3">
                    <span class="icon-happy"></span>
                    <h2 class="number timer">367</h2>
                    <h4>Happy Clients</h4>
                </div>
                <div class="col-lg-3">
                    <span class="icon-trophy"></span>
                    <h2 class="number timer">150</h2>
                    <h4>Project Done</h4>
                </div>
                <div class="col-lg-3">
                    <span class="icon-wine"></span>
                    <h2 class="number timer">121</h2>
                    <h4>Glass Of Wine</h4>
                </div>
                <div class="col-lg-3">
                    <span class="icon-documents"></span>
                    <h2 class="number timer">10000</h2>
                    <h4>Lines Of Code</h4>
                </div>
            </div>
        </div>
    </section>-->
    <!-- Some Fune Facts
    ============================================= -->
    <section id="team">
        <div class="container">
            <h2>Facturar</h2>
            <hr class="sep">
            <p> </p>
            <div class="row wow fadeInUp" data-wow-delay=".3s">
                <div class="col-md-4">
                    <div class="team">
                        <img class="img-responsive center-block" src="img/team/MariaDoe1.jpg" alt="1">
                        <h4><a href="http://38.65.136.63/e13192/" target="_blank">Facturacion</a></h4>
                        <h4><a rel="shadowbox;width=1024;height=400" href="mapa1.php" > Ubicacion</a></h4>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="team">
                        <img class="img-responsive center-block" src="img/team/MariaDoe2.jpg" alt="1">
                        <h4><a href="http://38.65.137.59:8081/aeropuertoFE/" target="_blank">Facturacion</a></h4>

<h4>
<a rel="shadowbox;width=1024;height=400" href="mapa2.php" > Ubicacion</a></h4>

                    </div>
                </div>

                <div class="col-md-4">
                    <div class="team">
                        <img class="img-responsive center-block" src="img/team/MariaDoe3.jpg" alt="1">
                        <h4><a href="http://38.65.136.254:8000/e12418/" target="_blank">Facturacion</a></h4>
                        <h4>
<a rel="shadowbox;width=1024;height=400" href="mapa3.php" > Ubicacion</a></h4>

                    </div>
                </div>

                <div class="col-md-4">
                    <div class="team">
                        <img class="img-responsive center-block" src="img/team/MariaDoe4.jpg" alt="1">
                        <h4><a href="http://38.65.136.144/arcangel/" target="_blank">Facturacion</a></h4>
                        <h4>
<a rel="shadowbox;width=1024;height=400" href="mapa4.php" > Ubicacion</a></h4>

                    </div>
                </div>

                <div class="col-md-4">
                    <div class="team">
                        <img class="img-responsive center-block" src="img/team/MariaDoe5.jpg" alt="1">
                          <h4><a href="http://38.65.136.49:8081/e00885/feinicio.aspx" target="_blank">Facturacion</a></h4>
                          <h4>
<a rel="shadowbox;width=1024;height=400" href="mapa5.php" > Ubicacion</a></h4>
                        <!--<p>Developer</p>
                        <div class="team-social-icons">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                        </div>-->
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- Testimonials
    ============================================= -->
 <section id="testimonials">
        <div class="container">
            <h2>EN TWITTER</h2>
            <hr class="light-sep">
            <div id="owl-testi" class="owl-carousel owl-theme">
                    <?php
$long_descripcion=1000; 
$num_noticias=12; 
$n=0; 
$noticias = simplexml_load_file('http://twitrss.me/twitter_user_to_rss/?user=migasqro'); 
foreach ($noticias as $noticia) {  
    foreach($noticia as $reg){ 
        if($reg->title!=NULL && $reg->title!='' && $reg->description!=NULL && $reg->description!='' && $n<$num_noticias){ 
            ?>
             <div class="item"> <?php
            echo ' <div class="quote"><h4><a href="'.$reg->link.'" target="_blank">'.$reg->title.'</a></h4></div>'; 
            if(strlen($reg->description)>$long_descripcion) 
                echo '<p>'.substr($reg->description,0,$long_descripcion).'...</a></p>'; 
            else if ($reg->description==NULL || $reg->description==''){
            }
            else 
                echo '<p>'.$reg->description.'</p>'; 
            $n++; 
            ?> </div><?php
        } 
    } 
}
?>
             
            </div>
        </div>
    </section>
    <!-- Contact Us
    ============================================= -->
    <section id="contact">
        <div class="container">
            <h2>Contactanos</h2>
            <hr class="sep">
            <p><h3>Todos los campos son obligatorios.</h3></p>
            <div class="col-md-6 col-md-offset-3 wow fadeInUp" data-wow-delay=".3s">
                <form action="sendemail.php" method="post">
                    <div class="form-group">
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre" required >
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-control" id="correo" name="correo" placeholder="Correo"  required >
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" id="asunto" name="asunto" placeholder="Asunto"  required >
                    </div>

                    <div class="form-group">
                        <textarea class="form-control" id="mensaje" name="mensaje" rows="3" placeholder="Mensaje"  required ></textarea>
                    </div>

                    <input type="submit" class="btn-block" name="submit" value="ENVIAR"/>
                </form>
            </div>
        </div>
    </section>
    <!-- Google Map
    ============================================= -->
  <!--  <div id="map"></div>-->
    <!-- Footer
    ============================================= -->
    <footer>
        <div class="container">
            <h2><img src="img/logo/MI-GAS_logo.png"></h2>
            <div class="social">
                <a href="https://www.facebook.com/GasolineriasMiGas/" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
                <a href="https://twitter.com/migasqro" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
            </div>
            <h6>&copy; 2017 Migas.com .Todos los derechos resevados</h6>
        </div>
    </footer>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

</body>

</html>
