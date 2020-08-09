 function luz(){


           //  var x = document.getElementById("inicio");
        if( fOurT === false){
           fOurT = true;

          //     let test =  document.getElementById("svgFundoPreto").style.display='inline-block';

   //  console.log("teste id svg"+test);

   

   document.getElementById("svgFundoPreto").style.display = 'inherit';

   
   document.getElementById("objMobile").style.backgroundColor = 'white';
   
   document.getElementById("objMobile").style.color = 'black';           
         

           for (var i = 0; i < vetorFundoBranco.length; i++) {
              corFundo( vetorFundoBranco[i],"white");
                           }

                           for (var i = 0; i < vetorTituloProjetos.length; i++) {
                            document.getElementById(vetorTituloProjetos[i]).style.color = 'black';
                            document.getElementById(vetorTituloProjetos[i]).style.backgroundColor = '#FAFAFA';
                                         }                


            document.getElementsByTagName("LABEL")[0].style.backgroundColor = 'white';
            document.getElementsByTagName("SPAN")[0].style.color = '#2250a0';

            
            document.getElementById("log").style.color = 'black';

            document.getElementById("iconeGit").style.fill = 'black';

            document.getElementById("btnProjetos").style.color = 'black';
            document.getElementById("btnProjetos").style.backgroundColor = 'white';
            document.getElementById("btnProjetos").style.borderWidth = '0.5px';
            document.getElementById("btnProjetos").style.borderStyle = 'dashed';
            document.getElementById("btnProjetos").style.borderColor = 'gray';

            document.getElementById("txtSobre").style.color = '#6E6E6E';
            
            document.getElementById("txtEmail").style.color = '#FF8C00';
            document.getElementById("svgCarta").style.fill = '#F0E68C';


           for (var i = 0; i < vetorTxtBtn.length; i++) {
              corTxt( vetorTxtBtn[i],"#6E6E6E");
                           }




            document.getElementById("btnProjetos").onmouseover  = function() 
            {
               
            document.getElementById("btnProjetos").style.color = 'gray';
            document.getElementById("btnProjetos").style.backgroundColor = 'A9A9A9';
            document.getElementById("btnProjetos").style.borderColor = 'gray';
                                     }


            document.getElementById("btnProjetos").onmouseleave = function() 
            {
               document.getElementById("btnProjetos").style.color = 'black';
            document.getElementById("btnProjetos").style.backgroundColor = 'white';
              document.getElementById("btnProjetos").style.borderColor = '#A9A9A9';
            }




             tituloProjeId[0].onmouseover = function() {mouseOver('#F5F5F5','tituloProjetos',0)};
             tituloProjeId[0].onmouseout = function() {mouseOut('#FAFAFA','tituloProjetos',0)};
              tituloProjeId[1].onmouseover = function() {mouseOver('#F5F5F5','tituloProjetos',1)};
             tituloProjeId[1].onmouseout = function() {mouseOut('#FAFAFA','tituloProjetos',1)};
              tituloProjeId[2].onmouseover = function() {mouseOver('#F5F5F5','tituloProjetos',2)};
             tituloProjeId[2].onmouseout = function() {mouseOut('#FAFAFA','tituloProjetos',2)};
              tituloProjeId[3].onmouseover = function() {mouseOver('#F5F5F5','tituloProjetos',3)};
             tituloProjeId[3].onmouseout = function() {mouseOut('#FAFAFA','tituloProjetos',3)};
              tituloProjeId[4].onmouseover = function() {mouseOver('#F5F5F5','tituloProjetos',4)};
             tituloProjeId[4].onmouseout = function() {mouseOut('#FAFAFA','tituloProjetos',4)};
              tituloProjeId[5].onmouseover = function() {mouseOver('#F5F5F5','tituloProjetos',5)};
             tituloProjeId[5].onmouseout = function() {mouseOut('#FAFAFA','tituloProjetos',5)};


             document.getElementsByTagName("LABEL")[0].onmouseover  = function() 
            {
                this.style.backgroundColor = "#E0FFFF";
              
            }

             document.getElementsByTagName("LABEL")[0].onmouseleave = function() 
            {
                this.style.backgroundColor = "white";

            }

            

 

            btnSbr[0].onmouseover = function() {mouseOver('#E0FFFF','botaoSobre',0)};
            btnSbr[0].onmouseout = function() {mouseOut('white','botaoSobre',0)};
            btnSbr[1].onmouseover = function() {mouseOver('#E0FFFF','botaoSobre',1)};
            btnSbr[1].onmouseout = function() {mouseOut('white','botaoSobre',1)};
            btnSbr[2].onmouseover = function() {mouseOver('#E0FFFF','botaoSobre',2)};
            btnSbr[2].onmouseout = function() {mouseOut('white','botaoSobre',2)};
            btnSbr[3].onmouseover = function() {mouseOver('#E0FFFF','botaoSobre',3)};
            btnSbr[3].onmouseout = function() {mouseOut('white','botaoSobre',3)};

           

            document.getElementById("lua").style.display = 'inherit';
            document.getElementById("luz").style.display = 'none';


              for (var i = 0; i < vetorIconeMenu.length; i++) {
               document.getElementById( vetorIconeMenu[i]).style.backgroundColor= '#2250a0';           
                              }


            for (var i = 0; i < vetorMenu.length; i++) {
                document.getElementById(vetorMenu[i]).style.color = '#4B0082';
                document.getElementById(vetorMenu[i]).style.backgroundColor = 'white';
              }




            document.getElementById("sass").style.backgroundColor = 'white';

              menuIds[0].onmouseover = function() {mouseOver('#E0FFFF','menu',0)};
              menuIds[0].onmouseout = function() {mouseOut('white','menu',0)};
              menuIds[1].onmouseover = function() {mouseOver('#E0FFFF','menu',1)};
              menuIds[1].onmouseout = function() {mouseOut('white','menu',1)};
              menuIds[2].onmouseover = function() {mouseOver('#E0FFFF','menu',2)};
              menuIds[2].onmouseout = function() {mouseOut('white','menu',2)};
              menuIds[3].onmouseover = function() {mouseOver('#E0FFFF','menu',3)};
              menuIds[3].onmouseout = function() {mouseOut('white','menu',3)};

         }
     
        else
        {
            document.getElementsByTagName("LABEL")[0].style.backgroundColor = 'black';
            document.getElementsByTagName("SPAN")[0].style.color = 'yellow';

            document.getElementById("iconeGit").style.fill = 'white';

            for (var i = 0; i < vetorIconeMenu.length; i++) {
                   document.getElementById(vetorIconeMenu[i]).style.backgroundColor = 'yellow';
                             }  
                             
       
            document.getElementById("sass").style.backgroundColor = 'black';

            for (var i = 0; i < vetorMenu.length; i++) {
                document.getElementById(vetorMenu[i]).style.backgroundColor = 'rgba(255,255,255,.2)';
                document.getElementById(vetorMenu[i]).style.color = 'white';
                             }   
   



            document.getElementById("inicio").style.backgroundColor = 'black';
            document.getElementById("ruby").style.backgroundColor = 'black';
            document.getElementById("log").style.backgroundColor = 'white';
            document.getElementById("log").style.color = 'black';
            document.getElementById("lua").style.display = 'none';
            document.getElementById("luz").style.display = 'inherit';
            
            document.getElementById("bootstrap").style.backgroundColor = 'black';
            document.getElementById("sobre").style.backgroundColor = 'black';
            document.getElementById("fundoCursos").style.backgroundColor = 'black';
            document.getElementById("txtSobre").style.color = 'white';
        
            document.getElementById("txtBtn").style.backgroundColor = 'black';



for (var i = 0; i < vetorTxtBtn.length; i++) {
              corTxt( vetorTxtBtn[i],"white");
                           }

            document.getElementById("txtEmail").style.color = '#ADFF2F';
            document.getElementById("svgCarta").style.fill = '#ADFF2F';

            
              for (var i = 0; i < vetorBtnSobre.length; i++) {
              corFundo( vetorBtnSobre[i],"#A4A4A4");
                           }

            for (var i = 0; i < vetorBtnProjetos.length; i++) {
               corFundo( vetorBtnProjetos[i],"black");
                           }


            for (var i = 0; i < vetorTituloProjetos.length; i++) {
                document.getElementById(vetorTituloProjetos[i]).style.color = 'white';
                document.getElementById(vetorTituloProjetos[i]).style.backgroundColor = '#696969';
                             }     
            

                             document.getElementById("btnProjetos").style.color = 'white';
                             document.getElementById("btnProjetos").style.backgroundColor = 'gray';
                             document.getElementById("btnProjetos").style.borderWidth = '0.5px';
                             document.getElementById("btnProjetos").style.borderStyle = 'solid';
                             document.getElementById("btnProjetos").style.borderColor = 'white';

                             document.getElementById("btnProjetos").onmouseover  = function() 
                             {
                                
                             document.getElementById("btnProjetos").style.color = 'black';
                             document.getElementById("btnProjetos").style.backgroundColor = '#A9A9A9';
                             document.getElementById("btnProjetos").style.borderColor = 'gray';
                                                      }
                 
                 
                             document.getElementById("btnProjetos").onmouseleave = function() 
                             {
                                document.getElementById("btnProjetos").style.color = 'white';
                             document.getElementById("btnProjetos").style.backgroundColor = 'gray';
                               document.getElementById("btnProjetos").style.borderColor = 'white';
                             }


            document.getElementsByTagName("LABEL")[0].onmouseover  = function() 
            {
                this.style.backgroundColor = "rgba(255,255,255,.2)";
                this.style.color = "black";
            }


            document.getElementsByTagName("LABEL")[0].onmouseleave = function() 
            {
                this.style.backgroundColor = "black";
                this.style.color = "white";
            }

            

            tituloProjeId[0].onmouseover = function() {mouseOver('#A9A9A9','tituloProjetosLua',0)};
            tituloProjeId[0].onmouseout = function() {mouseOut('#696969','tituloProjetosLua',0)};
            tituloProjeId[1].onmouseover = function() {mouseOver('#A9A9A9','tituloProjetosLua',1)};
            tituloProjeId[1].onmouseout = function() {mouseOut('#696969','tituloProjetosLua',1)};
            tituloProjeId[2].onmouseover = function() {mouseOver('#A9A9A9','tituloProjetosLua',2)};
            tituloProjeId[2].onmouseout = function() {mouseOut('#696969','tituloProjetosLua',2)};
            tituloProjeId[3].onmouseover = function() {mouseOver('#A9A9A9','tituloProjetosLua',3)};
            tituloProjeId[3].onmouseout = function() {mouseOut('#696969','tituloProjetosLua',3)};
            tituloProjeId[4].onmouseover = function() {mouseOver('#A9A9A9','tituloProjetosLua',4)};
            tituloProjeId[4].onmouseout = function() {mouseOut('#696969','tituloProjetosLua',4)};
            tituloProjeId[5].onmouseover = function() {mouseOver('#A9A9A9','tituloProjetosLua',5)};
            tituloProjeId[5].onmouseout = function() {mouseOut('#696969','tituloProjetosLua',5)};
       

            btnSbr[0].onmouseover = function() {mouseOver('#D8D8D8','corFundo',0)};
            btnSbr[0].onmouseout = function() {mouseOut('#A4A4A4','corFundo',0)};
            btnSbr[1].onmouseover = function() {mouseOver('#D8D8D8','corFundo',1)};
            btnSbr[1].onmouseout = function() {mouseOut('#A4A4A4','corFundo',1)};
            btnSbr[2].onmouseover = function() {mouseOver('#D8D8D8','corFundo',2)};
            btnSbr[2].onmouseout = function() {mouseOut('#A4A4A4','corFundo',2)};
            btnSbr[3].onmouseover = function() {mouseOver('#D8D8D8','corFundo',3)};
            btnSbr[3].onmouseout = function() {mouseOut('#A4A4A4','corFundo',3)};


              menuIds[0].onmouseover = function() {mouseOver('gray','menu',0)};
              menuIds[0].onmouseout = function() {mouseOut('rgba(255,255,255,.2)','menu',0)};
              menuIds[1].onmouseover = function() {mouseOver('gray','menu',1)};
              menuIds[1].onmouseout = function() {mouseOut('rgba(255,255,255,.2)','menu',1)};
              menuIds[2].onmouseover = function() {mouseOver('gray','menu',2)};
              menuIds[2].onmouseout = function() {mouseOut('rgba(255,255,255,.2)','menu',2)};
              menuIds[3].onmouseover = function() {mouseOver('gray','menu',3)};
              menuIds[3].onmouseout = function() {mouseOut('rgba(255,255,255,.2)','menu',3)};


fOurT = false;

        }
      }