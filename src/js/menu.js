
//chama função ao clicar em menu4
document.getElementById("menus4").onclick = function() {myFunction()};

function myFunction(){
  console.log("menu 4 teste");
  document.getElementById("svgFundo").style.display = 'none';
  document.getElementById("svgFundoContato").style.display = 'inherit';
}

function menu(){

    var x = document.getElementById("menus");
    
 
    console.log(document.getElementById("menus"));
    if(x.style.display === "none"){

        
        for (var i = 0; i < vetorMenu.length; i++) {
            document.getElementById(vetorMenu[i]).style.display = 'inline-block';
                         }     
  
        for (var i = 0; i < vetorIconeMenu.length; i++) {
            document.getElementById(vetorIconeMenu[i]).style.display = 'none';
                        }                              
      document.getElementById("x").style.display= 'inline-block';
    
    }
    else{
        for (var i = 0; i < vetorMenu.length; i++) {
            document.getElementById(vetorMenu[i]).style.display = 'none';
                         } 
                         
         for (var i = 0; i < vetorIconeMenu.length; i++) {
           document.getElementById(vetorIconeMenu[i]).style.display = 'inherit';
                     }                  

      document.getElementById("x").style.display= 'none';
    }
    
    
    }
