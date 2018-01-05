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

        
    function cargar(div, desde)
    {
    $(div).load(desde);
    }

                 function activass1(){
                   document.getElementById("ss1.1").style="font-weight:bold;cursor: pointer;color: #1e2f43;font-family:Montserrat;font-size:10pt"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass2(){
                   document.getElementById("ss1.2").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass3(){
                   document.getElementById("ss1.3").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass4(){
                   document.getElementById("ss1.4").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass5(){
                   document.getElementById("ss1.5").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                    document.getElementById("ss1.6").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer;"
                 }

                 function activass6(){
                   document.getElementById("ss1.6").style="font-weight:bold;font-size:10pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.1").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.2").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.3").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("ss1.4").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                    document.getElementById("ss1.5").style="font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }
                 

                 function activasss1(){
                   document.getElementById("sss1.1").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasss2(){
                   document.getElementById("sss1.2").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.3").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }

                 function activasss3(){
                   document.getElementById("sss1.3").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.1").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                   document.getElementById("sss1.2").style="font-size:8pt;color:#1e2f43;text-decoration:none;cursor: pointer"
                 }


                 function activasss4(){
                   document.getElementById("sss1.7").style="font-weight:bold;font-size:9pt;color:#e3313d;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.8").style="font-weight:bold;font-size:9pt;color:#19481e;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.9").style="font-weight:bold;font-size:9pt;color:#f0b65a;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.10").style="font-weight:bold;font-size:9pt;color:#e37435;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.11").style="font-weight:bold;font-size:9pt;color:#7b223c;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.12").style="font-weight:bold;font-size:9pt;color:#9bccd2;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.13").style="font-weight:bold;font-size:9pt;color:#485e6a;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.14").style="font-weight:bold;font-size:9pt;color:#1e2f43;text-decoration:none;cursor: pointer"
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
                   document.getElementById("sss1.15").style="font-weight:bold;font-size:9pt;color:#403c3b;text-decoration:none;cursor: pointer"
                 }


          