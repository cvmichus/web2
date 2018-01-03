                <div class="col-md-4" >
                  <?php
                   $secc = "i1";
                   ?>
                        <div style="text-align:justify;">

<span style="font-size:12pt;color:#1e2f43;text-decoration:none;cursor: pointer;font-weight:bold;"   ><img src="img/icons/ciudadesyseticonospng-01.png" width="60%"><br>Lazaro Cardenas</span><br>
<span style="font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;" onclick="cargar('#contenido5', '5.1.php')"><img src="img/icons/ciudadesyseticonospng-05.png" width="60%"><br>Tapachula</span><br>
<span style="font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;" onclick="cargar('#contenido5', '5.3.php')"><br><br><br><br><br>Generales</span><br>




                             </div>
                    </div>

                    <div class="col-md-4">
                       <br>
                        <div  style="text-align:justify;">
                        <ul style="list-style:none;cursor: pointer;color: #1e2f43;font-family:Montserrat;font-size:13.3px;">
                        <li onclick="ejecuta_ajax('5.5.4.php','','contenido1.5')" <?php if ($secc == "i4") {echo "id='activo'";} ?>>Diagnóstico y estudios técnicos</li>
                        <li onclick="ejecuta_ajax('5.5.5.php','','contenido1.5')" <?php if ($secc == "i5") {echo "id='activo'";} ?> >Acciones</li>
                        <li onclick="ejecuta_ajax('5.5.6.php','','contenido1.5')" <?php if ($secc == "i6") {echo "id='activo'";} ?> >Marco legal</li>


                        </ul>
                        </div>

                    </div>

                        <div class="col-md-4">

                        <div id="global">
                        <div id="contenido1.5">

                        </div>
                        </div>

                       <style>
						#global {
						height: 500px;
						width:316%;
						overflow-y: scroll;
						}
						#contenido1.1 {
						height: auto;
						}

						</style>

                        </div>
