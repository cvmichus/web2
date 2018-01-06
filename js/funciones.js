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





          