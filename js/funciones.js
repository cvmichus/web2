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



function limpiar()
{
   document.getElementById("contenido1.1").innerHTML="";
}

function limpiar2()
{
   document.getElementById("contenido2.2").innerHTML="";
}
       
        
    function cargar(div, desde)
    {
    $(div).load(desde);
    }

                 function activass1(){
                   document.getElementById("ss1.1").style="font-weight:bold;cursor:pointer;color: #1e2f43;font-family:Montserrat;font-size:10pt;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("contenido1.1").innerHTML="";
                   
                 }

                 function activass2(){
                   document.getElementById("ss1.2").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("contenido1.1").innerHTML="";
                   
                 }

                 function activass3(){
                   document.getElementById("ss1.3").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("contenido1.1").innerHTML="";
                 
                 }

                 function activass4(){
                   document.getElementById("ss1.4").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("contenido1.1").innerHTML="";
                 }

                 function activass5(){
                   document.getElementById("ss1.5").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                    document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                    document.getElementById("contenido1.1").innerHTML="";
                 }

                 function activass6(){
                   document.getElementById("ss1.6").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                    document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                    document.getElementById("contenido1.1").innerHTML="";
                 }

                 //
                 

                 function activasec1(){
                   document.getElementById("sec.1").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sec.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sec.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasec2(){
                   document.getElementById("sec.2").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sec.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sec.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasec3(){
                   document.getElementById("sec.3").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sec.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sec.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }


                 function activasss4(){
                   document.getElementById("sss1.7").style="font-weight:bold;font-size:9pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss5(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-weight:bold;font-size:9pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss6(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-weight:bold;font-size:9pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss7(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-weight:bold;font-size:9pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss8(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-weight:bold;font-size:9pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss9(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-weight:bold;font-size:9pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss10(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-weight:bold;font-size:9pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss11(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-weight:bold;font-size:9pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss12(){
                   document.getElementById("sss1.7").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.8").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.9").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.10").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.11").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.12").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.13").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.14").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.15").style="font-weight:bold;font-size:9pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }


                 /*1.3 Corresponsabiliodades enm la ZEE*/

                  function activasss13(){
                   document.getElementById("sss3.1").style="font-weight:bold;font-size:9pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss14(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-weight:bold;font-size:9pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss15(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-weight:bold;font-size:9pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss16(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-weight:bold;font-size:9pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss17(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-weight:bold;font-size:9pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss18(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-weight:bold;font-size:9pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss19(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-weight:bold;font-size:9pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss20(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-weight:bold;font-size:9pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss21(){
                   document.getElementById("sss3.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss3.9").style="font-weight:bold;font-size:9pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }
 


                  /*1.4 Marco normativo urbano y de desarrollo industrial */

                  function activasss22(){
                   document.getElementById("sss4.1").style="font-weight:bold;font-size:9pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss23(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-weight:bold;font-size:9pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss24(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-weight:bold;font-size:9pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss25(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-weight:bold;font-size:9pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss26(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-weight:bold;font-size:9pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss27(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-weight:bold;font-size:9pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss28(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-weight:bold;font-size:9pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss29(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-weight:bold;font-size:9pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }

                 function activasss30(){
                   document.getElementById("sss4.1").style="font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.2").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.3").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.4").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.5").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.6").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.7").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.8").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss4.9").style="font-weight:bold;font-size:9pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 } 

                   function activasss31(){
                   document.getElementById("sss5.1").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  
                 } 



                 function activasss32(){
                   document.getElementById("sss6.1").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   } 

                       function activasss33(){
                   document.getElementById("sss6.2").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   } 


                       function activasss34(){
                   document.getElementById("sss6.3").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   } 

                       function activasss35(){
                   document.getElementById("sss6.4").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   } 

                       function activasss36(){
                   document.getElementById("sss6.5").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss6.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   } 


                   /*PLANEACION*/

                    function cargar2(div, desde)
                    {
                    $(div).load(desde);
                    }

                     function activass21(){
                          document.getElementById("ss2.1").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass22(){
                          document.getElementById("ss2.2").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                          document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass23(){
                          document.getElementById("ss2.3").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass24(){
                          document.getElementById("ss2.4").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass25(){
                          document.getElementById("ss2.5").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass26(){
                          document.getElementById("ss2.6").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass27(){
                          document.getElementById("ss2.7").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass28(){
                          document.getElementById("ss2.8").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }

                  function activass29(){
                          document.getElementById("ss2.9").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("ss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                           document.getElementById("contenido2.2").innerHTML="";
                 }


                 function activasec21(){
                          document.getElementById("sss2.1").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }


                 function activasec22(){
                          document.getElementById("sss2.2").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }

                  //2.2 Vinculación Programática
                  
                  function activasec23(){
                          document.getElementById("sss2.3").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }


                  function activasec24(){
                          document.getElementById("sss2.4").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }

                  function activasec25(){
                          document.getElementById("sss2.5").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.6").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }

                  function activasec26(){
                          document.getElementById("sss2.6").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.4").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }

                  //
                  //  
                     function activasec27(){
                          document.getElementById("sss2.5").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }  

                  function activasec28(){
                          document.getElementById("sss2.7").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }  

                  function activasec29(){
                          document.getElementById("sss2.8").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.9").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }  

                  function activasec30(){
                          document.getElementById("sss2.9").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.7").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.8").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.5").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }  


                  //2.4 Competencias
                  
                  function activasec31(){
                          document.getElementById("sss2.10").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.11").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.12").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.13").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }



                  function activasec32(){
                         document.getElementById("sss2.11").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.10").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.12").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.13").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }



                  function activasec33(){
                          document.getElementById("sss2.12").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.11").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.10").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.13").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }



                  function activasec34(){
                         document.getElementById("sss2.13").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.11").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.12").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                          document.getElementById("sss2.10").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                        
                 }

                 //AMBIto especial
                 
                  function activasec35(){
                  document.getElementById("sss2.14").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.15").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.16").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.17").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec36(){
                  document.getElementById("sss2.15").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.16").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.17").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec37(){
                  document.getElementById("sss2.16").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.15").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.17").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec38(){
                  document.getElementById("sss2.17").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.15").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.16").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.14").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  //LEGAL
                   function activasec39(){
                  document.getElementById("sss2.18").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.19").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.20").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.21").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec40(){
                  document.getElementById("sss2.19").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.18").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.20").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.21").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec41(){
                  document.getElementById("sss2.20").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.21").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.19").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.18").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec42(){
                  document.getElementById("sss2.21").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.20").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.18").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss2.19").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }


                  //2.7 CORRESPONSABILIDAD
                  function activasec43(){
                   document.getElementById("sss2.22").style="font-weight:bold;font-size:8pt;color:#e3313d;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.23").style="font-size:8pt;color:#19481e;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.24").style="font-size:8pt;color:#f0b65a;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.25").style="font-size:8pt;color:#e37435;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.26").style="font-size:8pt;color:#7b223c;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.27").style="font-size:8pt;color:#9bccd2;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.28").style="font-size:8pt;color:#8d618b;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.29").style="font-size:8pt;color:#c16c95;text-decoration:none;cursor: pointer"
                   document.getElementById("sss2.30").style="font-size:8pt;color:#3f1678;text-decoration:none;cursor: pointer"
                 }


                 function activasec52(){
                   document.getElementById("sss2.31").style="font-weight:bold;font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                   document.getElementById("sss2.32").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
         
                 }



                 function activasec53(){
                   document.getElementById("sss2.32").style="font-weight:bold;font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
                   document.getElementById("sss2.31").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer";
         
                 }


                 //CIUDADES
                 //
                function cargar3(div, desde)
                {
                $(div).load(desde);
                }

                function limpiar3()
                {
                document.getElementById("contenido3.3").innerHTML="";
                }



                   function t31(){
                   document.getElementById("t3.1").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t3.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                    document.getElementById("contenido3.3").innerHTML="";
                 }

                   function t32(){
                   document.getElementById("t3.2").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t3.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                    document.getElementById("contenido3.3").innerHTML="";
                 }


                   function activasec311(){
                   document.getElementById("sss311").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss312").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss313").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
               
                 }

                   function activasec312(){
                  document.getElementById("sss312").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss311").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss313").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
           
                 }

                   function activasec313(){
                  document.getElementById("sss313").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss311").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss312").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   
                 }


                      //3.2 Lázaro Cárdenas
                      
                   function activasec321(){
                    document.getElementById("sss321").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss322").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss323").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss324").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   
                 }

                   function activasec322(){
                  document.getElementById("sss322").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss321").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss323").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss324").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   
                 }

                   function activasec323(){
                   document.getElementById("sss323").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss321").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss322").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss324").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   
                 }

                   function activasec324(){
                  document.getElementById("sss324").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss321").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss322").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss323").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   
                 }


                 //GOBERNANZA 

                 function cargar4(div, desde)
                {
                $(div).load(desde);
                }

                function limpiar4()
                {
                document.getElementById("contenido4.4").innerHTML="";
                }

                 function t41(){
                   document.getElementById("t4.1").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.7").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 function t42(){
                   document.getElementById("t4.2").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.7").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 function t43(){
                   document.getElementById("t4.3").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.7").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 function t44(){
                   document.getElementById("t4.4").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.7").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 function t45(){
                   document.getElementById("t4.5").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.7").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 function t46(){
                   document.getElementById("t4.6").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.7").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 function t47(){
                   document.getElementById("t4.7").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t4.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido4.4").innerHTML="";
                 }

                 //4.1 Contexto: Marco Normativo Urbano
                 
                  function activasec411(){
                  document.getElementById("sss411").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss412").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss413").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasec412(){
                  document.getElementById("sss412").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss411").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss413").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasec413(){
                  document.getElementById("sss413").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss412").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss411").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }
            
             //4.2 
             //
                function activasec421(){
                  document.getElementById("sss421").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss422").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss423").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                  function activasec422(){
                  document.getElementById("sss422").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss421").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss423").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                  function activasec423(){
                  document.getElementById("sss423").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss421").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss422").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 //4.3.1¿Qué dice la Constitución Federal?
                  function activasec431(){
                  document.getElementById("sss431").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                   //4.4.4
                  function activasec441(){
                  document.getElementById("sss441").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss442").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss443").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss444").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                  function activasec442(){
                  document.getElementById("sss442").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss441").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss443").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss444").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                  function activasec443(){
                  document.getElementById("sss443").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss442").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss441").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss444").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                  function activasec444(){
                  document.getElementById("sss444").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss442").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss443").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss441").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }


                  function activasec451(){
                  document.getElementById("sss451").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss452").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  
                 }

                   function activasec452(){
                  document.getElementById("sss452").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss451").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  
                 }


                 //4.6 Organismos de gestión
                  function activasec461(){
                  document.getElementById("sss461").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss462").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss463").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss464").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss465").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss466").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                    function activasec462(){
                  document.getElementById("sss462").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss461").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss463").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss464").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss465").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss466").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                    function activasec463(){
                  document.getElementById("sss463").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss462").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss461").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss464").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss465").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss466").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                    function activasec464(){
                  document.getElementById("sss464").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss462").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss463").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss461").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss465").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss466").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                    function activasec465(){
                  document.getElementById("sss465").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss462").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss463").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss464").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss461").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss466").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                    function activasec466(){
                  document.getElementById("sss466").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss462").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss463").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss464").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss465").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss461").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }


                    //4.7 Gobernanza de los Planes
                  function activasec471(){
                  document.getElementById("sss471").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss472").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss473").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss474").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                   function activasec472(){
                  document.getElementById("sss472").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss471").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss473").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss474").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                   function activasec473(){
                  document.getElementById("sss473").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss471").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss472").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss474").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                   function activasec474(){
                  document.getElementById("sss474").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss471").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss473").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss472").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }


                   //CONTENIDO 5
                   //
                      function cargar5(div, desde)
                {
                $(div).load(desde);
                }

                function limpiar5()
                {
                document.getElementById("contenido5.5").innerHTML="";
                }

                  function t51(){
                   document.getElementById("t5.1").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t5.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido5.5").innerHTML="";
                 }

                  function t52(){
                   document.getElementById("t5.2").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("t5.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("contenido5.5").innerHTML="";
                 }

                 //5.1 TAPACHULA 

                  function activasec511(){
                  document.getElementById("sss511").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss512").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss513").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss514").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss515").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5132").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5131").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  }

                  function activasec512(){
                  document.getElementById("sss512").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss511").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss513").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss514").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss515").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5132").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5131").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  }

                  function activasec513(){
                  document.getElementById("sss513").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss512").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss511").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss514").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5132").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5131").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss515").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  }

                  function activasec514(){
                  document.getElementById("sss514").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss512").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss513").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss511").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5132").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5131").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss515").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  }

                  function activasec5131(){
                  document.getElementById("sss5131").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss512").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss513").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss511").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss514").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5132").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss515").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"

                  }

                  function activasec5132(){
                  document.getElementById("sss5132").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss512").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss513").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss511").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss514").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5131").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss515").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  }

                      function activasec515(){
                  document.getElementById("sss515").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss512").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss513").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss511").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss514").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5131").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss5132").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"


                  }


                   //5.1 TAPACHULA 


                    function activasec521(){
                  document.getElementById("sss521").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss522").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss523").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss524").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                     function activasec522(){
                  document.getElementById("sss522").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss521").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss523").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss524").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                     function activasec523(){
                  document.getElementById("sss523").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss521").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss522|").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss524").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                     function activasec524(){
                  document.getElementById("sss524").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss522").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss523").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("sss521").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   }

                   //PLANES
                   
                   function cargar6(div, desde)
                {
                $(div).load(desde);
                }

                function limpiar6()
                {
                document.getElementById("contenido6.6").innerHTML="";
                }

                function t61(){
                  document.getElementById("t6.1").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("contenido6.6").innerHTML="";
                }

                 function t62(){
                    document.getElementById("t6.2").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("contenido6.6").innerHTML="";
                 }

                 function t63(){
                   document.getElementById("t6.3").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("contenido6.6").innerHTML="";
                 }

                 function t64(){
                    document.getElementById("t6.4").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t6.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("contenido6.6").innerHTML="";
                 }



                 function activasec611(){
                    document.getElementById("sss611").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
            
                 } 


                  function activasec621(){
                    document.getElementById("sss621").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
            
                 } 


                  function activasec631(){
                    document.getElementById("sss631").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                     document.getElementById("sss632").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
            
                 } 


                  function activasec632(){
                    document.getElementById("sss632").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                     document.getElementById("sss631").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
            
                 } 


                  function activasec641(){
                    document.getElementById("sss641").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                     document.getElementById("sss642").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
            
                 } 

                  function activasec642(){
                    document.getElementById("sss642").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                     document.getElementById("sss641").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
            
                 } 
 
	function cargar7(div, desde)
                {
                $(div).load(desde);
                }

                function limpiar7()
                {
                document.getElementById("contenido7.7").innerHTML="";
                }
				
				function t71(){
                  document.getElementById("t7.1").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                document.getElementById("contenido7.7").innerHTML="";
                }
				
				
				 function t711(){
                    document.getElementById("t711").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t712").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t713").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t714").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
              
                 }
				
				 function t712(){
                    document.getElementById("t712").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t711").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t713").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                  document.getElementById("t714").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
              
                 }
				
