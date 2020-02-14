/*
//chama função ao clicar em menu4
document.getElementById("menus4").onclick || document.getElementById("menus").onclick = function() {fundo2()};
function fundo2(){
  console.log("menu 4 teste");
  document.getElementById("svgFundo").style.display = 'none';
  document.getElementById("svgFundoContato").style.display = 'inherit';
}
//chama função ao clicar em menu4
document.getElementById("menus2").onclick || document.getElementById("menus3").onclick = function() {fundoSimples()};
function fundoSimples(){
  console.log("menu 5 teste");
  document.getElementById("svgFundo").style.display = 'inherit';
  document.getElementById("svgFundoContato").style.display = 'none';
}
*/

document.getElementById("menus2").onclick = function() {fundo2()};
document.getElementById("menus3").onclick = function() {fundo2()};

//usar true e false para verificar se foi aplicado o fundo
document.getElementById("menus").onclick = function() {fundoSimples()};
document.getElementById("menus4").onclick = function() {fundoSimples()};

function fundo2(){
  console.log("menu sobre teste");
  document.getElementById("svgFundo").style.display = 'inherit';
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