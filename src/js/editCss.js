    function corFundo(id,cor){
        document.getElementById(id).style.backgroundColor = cor;
    }

      function corTxt(id,cor){
        document.getElementById(id).style.color = cor;
    }

    
      function mouseOver(cor,propriedadeCss,indice) {

                       switch (propriedadeCss) {
                 
                      case 'botaoSobre':
                          btnSbr[indice].style.backgroundColor = cor;   
                          break;
                    

                    case 'menu':
                          menuIds[indice].style.backgroundColor = cor;   
                          break;

                    case 'tituloProjetos':
                          tituloProjeId[indice].style.backgroundColor = cor;   
                          break;      

                    case 'tituloProjetosLua':
                          tituloProjeId[indice].style.backgroundColor = cor;
                          tituloProjeId[indice].style.color = 'black';   
                          break;       
                    
}
              }




              function mouseOut(cor,propriedadeCss,indice) {
                      switch (propriedadeCss) {
                 
                      case 'botaoSobre':
                           btnSbr[indice].style.backgroundColor = cor;
            
                          break;

                      case 'menu':
                          menuIds[indice].style.backgroundColor = cor;   
                          break;    

                      case 'tituloProjetos':
                          tituloProjeId[indice].style.backgroundColor = cor;   
                          break;  

                      case 'tituloProjetosLua':
                          tituloProjeId[indice].style.backgroundColor = cor;
                          tituloProjeId[indice].style.color = 'white';      
                          break;          
                    }

              }

 
    var fOurT = false;
  