                <div class="col-3">
                    <div class="section-heading">
                    
                        <h1 class="section-title" style="font-size:14pt;font-family:Montserrat;color:#1e2f43;">ZEE</h1>
						
						<span style="font-size:14pt;font-family:Montserrat;color:#1e2f43;"><a href="#about" onclick="cargar('#contenido1', '1.2.php')" >Políticas Urbanas y Territoriales</a></span><br>
						<span style="font-size:14pt;font-family:Montserrat;color:#1e2f43;"><a href="#about" onclick="cargar('#contenido1', '1.3.php')" >Corresponsabilidades en la ZEE</a></span><br>
						<span style="font-size:14pt;font-family:Montserrat;color:#1e2f43;"><a href="#about" onclick="cargar('#contenido1', '1.4.php')" >Marco normativo urbano y de desarrollo industrial</a></span><br>
						<span style="font-size:14pt;font-family:Montserrat;color:#1e2f43;"><a href="#about" onclick="cargar('#contenido1', '1.5.php')" >Plan de Acción</a></span><br>
						
                        
                    </div>

                </div>

                <div class="col-2-3">

                    <!--Icon Block-->
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                        <!--Icon-->
                       
                        <!--Icon Block Description-->
                        <div class="icon-block-description">
                           
							<span id="enlace"><a href="#about" onclick="ejecuta_ajax('1.1.1.php','','contenido1.1')" >¿Qué es una ZEE?</a></span><br>
							<span id="enlace"><a href="#about" onclick="ejecuta_ajax('1.1.2.php','','contenido1.1')" >¿Cuáles son los objetivos?</a></span><br>
							<span id="enlace"><a href="#about"onclick="ejecuta_ajax('1.1.3.php','','contenido1.1')" >¿Dónde se ubican las ZEE?</a></span><br>
                       
                        </div>
                    </div>
                    <!--End of Icon Block-->

                    <!--Icon Block-->
                    <div class="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                        <!--Icon-->
                       
                        <!--Icon Block Description-->
                        <div class="icon-block-description" id="contenido1.1" style="overflow-y: scroll; height: 400px;width:600px">
                            
                            
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
		color: #1e2f43;
		text-decoration: none;
		cursor:pointer;
		font-family:Montserrat;
		font-size:10px;
		font weight:bolder;
		}
		
		#enlace:hover { 
		color: #1e2f43; 
		text-decoration: none; 
		cursor:pointer;
		font-family:Montserrat;
		font-size:12px;
		}
		
		
		#enlace:visited { 
		color: #1e2f43; 
		font weight:bolder;
		text-decoration: none; 
		font-family:Montserrat;
		font-size:14px;
		}
		
		#enlace:active { 
		color: #1e2f43; 
		font weight:bolder;
		text-decoration: none; 
		font-family:Montserrat;
		font-size:14px;
		}
		
		</style>