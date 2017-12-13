            <?php
				$secc = "h1";
            ?>
                <div class="col-3">
                    <div class="section-heading">
                    
                        <h1 class="section-title" style="font-size:14pt;font-family:Montserrat;">Lázaro Cárdenas</h1><br>
						<img src="images/LAZARO 1.png" class="img-rounded" width="50%"><br>
                      <!--
					   <span><a style="font-size:14pt;font-family:Montserrat;" href="#about" onclick="cargar('#contenido3', '3.1.php')" >Tapachula</a></span><br>
					  -->
					   <span style="font-size:14pt;font-family:Montserrat;"><a href="#ciudades" onclick="cargar('#contenido3', '1.3.php')" >Tapachula</a></span><br>
					   <img src="images/tapachula.jpg" class="img-rounded" width="50%"><br>
						    </div>

                </div>

                <div class="col-2-3">

                    <!--Icon Block-->
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                        <!--Icon-->
                       
                        <!--Icon Block Description-->
                        <div class="icon-block-description">
                            <span id="enlace"><a onclick="ejecuta_ajax('3.2.1.php','','contenido1.3')">La Ciudad</a></span><br>
							<span id="enlace"><a onclick="ejecuta_ajax('3.2.2.php','','contenido1.3')" >Indicadores</a></span><br>
							<span id="enlace"><a onclick="ejecuta_ajax('3.2.3.php','','contenido1.3')" >Diagnóstico Sintético</a></span><br>

                       
                        </div>
                    </div>
                    <!--End of Icon Block-->

                    <!--Icon Block-->
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                        <!--Icon-->
                       
                        <!--Icon Block Description-->
                        <div class="icon-block-description" id="contenido1.3" style="overflow-y: scroll; height: 400px;">
                            
                            
                        </p>
                        </div>
                    </div>
                    <!--End of Icon Block-->

                    <!--Icon Block-->
                   
                    <!--End of Icon Block-->

                    <!--Icon Block-->
                   

                     <!--Icon Block-->
                   
                    <!--End of Icon Block-->

                    <!--Icon Block-->
                   
                    <!--End of Icon Block-->

                    <!--Icon Block-->
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                        <!--Icon-->
                        
                        
                    </div>
                    <!--End of Icon Block-->
                    <!--End of Icon Block-->
                       

                </div>
				
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
		
		<style>
		#enlace{
		color: #7C7D83;
		text-decoration: none;
		cursor:pointer;
		font-family:Montserrat;
		font-size:10px;
		font weight:bolder;
		}
		
		#enlace:hover { 
		color: #1F1F20; 
		text-decoration: none; 
		cursor:pointer;
		font-family:Montserrat;
		font-size:12px;
		}
		
		
		#enlace:visited { 
		color: #1F1F20; 
		font weight:bolder;
		text-decoration: none; 
		font-family:Montserrat;
		font-size:14px;
		}
		
		#enlace:active { 
		color: #1F1F20; 
		font weight:bolder;
		text-decoration: none; 
		font-family:Montserrat;
		font-size:14px;
		}
		
		</style>
		
		