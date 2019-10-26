

var div = document.getElementById('log');
var textos = ['echo ("- Desenvolvimento de Sistemas Web");', 'alert ("- Layout Responsivo");', 'System.out.println ("-Front-End e Back-End [Júnior]");','PHP, Mysql, JavaScript e CSS (Bootstrap)'];
var txt2 = textos;

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 2000); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 80);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr)
    }, 25);
}


function rodape(conteudos, el) {
    var atual = -1;
    var cont = 0;
  function prox(cb){
    cont++;
    if (atual < conteudos.length - 1) atual++;
    else atual = 0;
    var str = conteudos[atual];
   
    escrever(str, function(){
      limpar(prox);
    });
  }
  prox(prox);
}

rodape(textos);

 
 // list.getElementsByTagName("LI")[0].innerHTML = "Milk";

function menu(){

    var x = document.getElementById("menus");
    
    
    
    console.log(document.getElementById("menus"));
    if(x.style.display === "none"){
      document.getElementById("menus").style.display = 'inline-block';
      document.getElementById("menus2").style.display = 'inline-block';
      document.getElementById("menus3").style.display = 'inline-block';
      document.getElementById("menus4").style.display = 'inline-block';
      document.getElementById("iconeMenu").style.display= 'none';
      document.getElementById("iconeMenu2").style.display= 'none';
      document.getElementById("iconeMenu3").style.display= 'none';
      document.getElementById("x").style.display= 'inline-block';
    
    }
    else{
      document.getElementById("menus").style.display = 'none';
        document.getElementById("menus2").style.display = 'none';
        document.getElementById("menus3").style.display = 'none';
      document.getElementById("menus4").style.display = 'none';
        document.getElementById("iconeMenu").style.display= 'inherit';
      document.getElementById("iconeMenu2").style.display= 'inherit';
      document.getElementById("iconeMenu3").style.display= 'inherit';
      document.getElementById("x").style.display= 'none';
    }
    
    
    }


    
    function corFundo(id,cor){
        document.getElementById(id).style.backgroundColor = cor;
    }


    var fOurT = false;


    function luz(){

           //  var x = document.getElementById("inicio");
        if( fOurT === false){
           fOurT = true;

           let vetorMenu = ["menus", "menus2", "menus3", "menus4" ];

           let vetorIconeMenu = ["iconeMenu","iconeMenu2","iconeMenu3"];

           let vetorFundoBranco = ["inicio","ruby","sass","bootstrap","sobre","fundoCursos","btnSobre",
           "btnSobre2","btnSobre3","btnSobre4","txtBtn","btnProj","btnProj2","btnProj3","btnProj4","btnProj5"];

           let vetorTituloProjetos = ["tituloProjetos","tituloProjetos2","tituloProjetos3","tituloProjetos4",
           "tituloProjetos5","tituloProjetos6"];

           for (var i = 0; i < vetorFundoBranco.length; i++) {
              corFundo( vetorFundoBranco[i],"white");
                           }

                           

                           document.getElementById("tituloProjetos").style.color = 'black';
                           document.getElementById("tituloProjetos").style.backgroundColor = '#FAFAFA';
                           document.getElementById("tituloProjetos2").style.color = 'black';
                           document.getElementById("tituloProjetos2").style.backgroundColor = '#FAFAFA';
                           document.getElementById("tituloProjetos3").style.color = 'black';
                           document.getElementById("tituloProjetos3").style.backgroundColor = '#FAFAFA';
                           document.getElementById("tituloProjetos4").style.color = 'black';
                           document.getElementById("tituloProjetos4").style.backgroundColor = '#FAFAFA';
                           document.getElementById("tituloProjetos5").style.color = 'black';
                           document.getElementById("tituloProjetos5").style.backgroundColor = '#FAFAFA';
                           document.getElementById("tituloProjetos6").style.color = 'black';
                           document.getElementById("tituloProjetos6").style.backgroundColor = '#FAFAFA';



            document.getElementsByTagName("LABEL")[0].style.backgroundColor = 'white';
            document.getElementsByTagName("SPAN")[0].style.color = '#2250a0';

           
            document.getElementById("log").style.color = 'black';

            document.getElementById("txtSobre").style.color = '#6E6E6E';
            document.getElementById("txtBtn").style.color = '#6E6E6E';
            document.getElementById("txtEmail").style.color = '#FF8C00';
            document.getElementById("svgCarta").style.fill = '#F0E68C';

            document.getElementById("txtBtn2").style.color = '#6E6E6E';
            document.getElementById("txtBtn3").style.color = '#6E6E6E';
            document.getElementById("txtBtn4").style.color = '#6E6E6E';
     

        
            

            

            document.getElementById("tituloProjetos").onmouseover  = function() 
            {
                this.style.backgroundColor = "#F5F5F5";
         
            }


            document.getElementById("tituloProjetos").onmouseleave = function() 
            {
                this.style.backgroundColor = "#FAFAFA";
             
            }
           
            document.getElementById("tituloProjetos2").onmouseover  = function() 
            {
                this.style.backgroundColor = "#F5F5F5";
         
            }


            document.getElementById("tituloProjetos2").onmouseleave = function() 
            {
                this.style.backgroundColor = "#FAFAFA";
             
            }
           
            document.getElementById("tituloProjetos3").onmouseover  = function() 
            {
                this.style.backgroundColor = "#F5F5F5";
         
            }


            document.getElementById("tituloProjetos3").onmouseleave = function() 
            {
                this.style.backgroundColor = "#FAFAFA";
             
            }
           
            document.getElementById("tituloProjetos4").onmouseover  = function() 
            {
                this.style.backgroundColor = "#F5F5F5";
         
            }


            document.getElementById("tituloProjetos4").onmouseleave = function() 
            {
                this.style.backgroundColor = "#FAFAFA";
             
            }
           
            document.getElementById("tituloProjetos5").onmouseover  = function() 
            {
                this.style.backgroundColor = "#F5F5F5";
         
            }


            document.getElementById("tituloProjetos5").onmouseleave = function() 
            {
                this.style.backgroundColor = "#FAFAFA";
             
            }
           
            document.getElementById("tituloProjetos6").onmouseover  = function() 
            {
                this.style.backgroundColor = "#F5F5F5";
         
            }


            document.getElementById("tituloProjetos6").onmouseleave = function() 
            {
                this.style.backgroundColor = "#FAFAFA";
             
            }
           





             document.getElementsByTagName("LABEL")[0].onmouseover  = function() 
            {
                this.style.backgroundColor = "#E0FFFF";
              
            }

             document.getElementsByTagName("LABEL")[0].onmouseleave = function() 
            {
                this.style.backgroundColor = "white";

            }

            document.getElementById("btnSobre").onmouseover  = function() 
            {
                this.style.backgroundColor = "#E0FFFF";
            }

            document.getElementById("btnSobre").onmouseleave = function() 
            {
                this.style.backgroundColor = "white";
            }

            
            document.getElementById("btnSobre2").onmouseover  = function() 
            {
                this.style.backgroundColor = "#E0FFFF";
            }

            document.getElementById("btnSobre2").onmouseleave = function() 
            {
                this.style.backgroundColor = "white";
            }

            
            document.getElementById("btnSobre3").onmouseover  = function() 
            {
                this.style.backgroundColor = "#E0FFFF";
            }

            document.getElementById("btnSobre3").onmouseleave = function() 
            {
                this.style.backgroundColor = "white";
            }

            
            document.getElementById("btnSobre4").onmouseover  = function() 
            {
                this.style.backgroundColor = "#E0FFFF";
            }

            document.getElementById("btnSobre4").onmouseleave = function() 
            {
                this.style.backgroundColor = "white";
            }



         //   document.getElementById("log").style.color = 'black';

            document.getElementById("lua").style.display = 'inherit';
            document.getElementById("luz").style.display = 'none';


              for (var i = 0; i < vetorIconeMenu.length; i++) {
               document.getElementById( vetorIconeMenu[i]).style.backgroundColor= '#2250a0';           
                              }


            for (var i = 0; i < vetorMenu.length; i++) {
                document.getElementById(vetorMenu[i]).style.color = '#4B0082';
                document.getElementById(vetorMenu[i]).style.backgroundColor = 'white';
              }

              document.getElementById("menus").onmouseover  = function() 
              {
                  this.style.backgroundColor = "#E0FFFF";
              }
              
               document.getElementById("menus").onmouseleave = function() 
              {
                  this.style.backgroundColor = "white";
              }


              document.getElementById("menus2").onmouseover  = function() 
              {
                  this.style.backgroundColor = "#E0FFFF";
              }
              
               document.getElementById("menus2").onmouseleave = function() 
              {
                  this.style.backgroundColor = "white";
              }


              document.getElementById("menus3").onmouseover  = function() 
              {
                  this.style.backgroundColor = "#E0FFFF";
              }
              
               document.getElementById("menus3").onmouseleave = function() 
              {
                  this.style.backgroundColor = "white";
              }

              document.getElementById("menus4").onmouseover  = function() 
              {
                  this.style.backgroundColor = "#E0FFFF";
              }

 document.getElementById("menus4").onmouseleave = function() 
{
    this.style.backgroundColor = "white";
}
           
                    }
     
        else
        {
            document.getElementsByTagName("LABEL")[0].style.backgroundColor = 'black';
            document.getElementsByTagName("SPAN")[0].style.color = 'yellow';
            document.getElementById("iconeMenu").style.backgroundColor= 'yellow';
            document.getElementById("iconeMenu2").style.backgroundColor= 'yellow';
            document.getElementById("iconeMenu3").style.backgroundColor= 'yellow';
            document.getElementById("sass").style.backgroundColor = 'gray';
            document.getElementById("menus").style.backgroundColor = 'rgba(255,255,255,.2)';
            document.getElementById("menus2").style.backgroundColor = 'rgba(255,255,255,.2)';
            document.getElementById("menus3").style.backgroundColor = 'rgba(255,255,255,.2)';
            document.getElementById("menus4").style.backgroundColor = 'rgba(255,255,255,.2)';



            document.getElementById("inicio").style.backgroundColor = 'black';
            document.getElementById("ruby").style.backgroundColor = 'black';
            document.getElementById("log").style.backgroundColor = 'white';
            document.getElementById("log").style.color = 'black';
            document.getElementById("lua").style.display = 'none';
            document.getElementById("luz").style.display = 'inherit';
            document.getElementById("menus").style.color = 'white';
            document.getElementById("menus2").style.color = 'white';
            document.getElementById("menus3").style.color = 'white';
            document.getElementById("menus4").style.color = 'white';
            
            document.getElementById("bootstrap").style.backgroundColor = 'gray';
            document.getElementById("sobre").style.backgroundColor = 'gray';
            document.getElementById("fundoCursos").style.backgroundColor = 'gray';
            document.getElementById("txtSobre").style.color = 'white';
            document.getElementById("txtBtn").style.color = 'white';
            document.getElementById("txtBtn").style.backgroundColor = 'gray';
            document.getElementById("txtBtn2").style.color = 'white';
            document.getElementById("txtBtn3").style.color = 'white';
            document.getElementById("txtBtn4").style.color = 'white';
            document.getElementById("txtEmail").style.color = '#ADFF2F';
            document.getElementById("svgCarta").style.fill = '#ADFF2F';
            document.getElementById("btnSobre").style.backgroundColor = '#A4A4A4';
            document.getElementById("btnSobre2").style.backgroundColor = '#A4A4A4';
            document.getElementById("btnSobre3").style.backgroundColor = '#A4A4A4';
            document.getElementById("btnSobre4").style.backgroundColor = '#A4A4A4';
            
            document.getElementById("btnProj").style.backgroundColor = 'gray';
            document.getElementById("btnProj2").style.backgroundColor = 'gray';
            document.getElementById("btnProj3").style.backgroundColor = 'gray';
            document.getElementById("btnProj4").style.backgroundColor = 'gray';
            document.getElementById("btnProj5").style.backgroundColor = 'gray';

              
            
            document.getElementById("tituloProjetos").style.color = 'white';
            document.getElementById("tituloProjetos").style.backgroundColor = '#696969';
            document.getElementById("tituloProjetos2").style.color = 'white';
            document.getElementById("tituloProjetos2").style.backgroundColor = '#696969';
            document.getElementById("tituloProjetos3").style.color = 'white';
            document.getElementById("tituloProjetos3").style.backgroundColor = '#696969';
            document.getElementById("tituloProjetos4").style.color = 'white';
            document.getElementById("tituloProjetos4").style.backgroundColor = '#696969';
            document.getElementById("tituloProjetos5").style.color = 'white';
            document.getElementById("tituloProjetos5").style.backgroundColor = '#696969';
            document.getElementById("tituloProjetos6").style.color = 'white';
            document.getElementById("tituloProjetos6").style.backgroundColor = '#696969';

           // document.getElementsByTagName("LABEL")[0].style.backgroundColor = 'black';
           // document.getElementsByTagName("SPAN")[0].style.color = 'yellow';


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


            document.getElementById("tituloProjetos").onmouseover  = function() 
            {
                this.style.backgroundColor = "#A9A9A9";
                this.style.color = "black";
            }


            document.getElementById("tituloProjetos").onmouseleave = function() 
            {
                this.style.backgroundColor = "#696969";
                this.style.color = "white";
            }

            document.getElementById("tituloProjetos2").onmouseover  = function() 
            {
                this.style.backgroundColor = "#A9A9A9";
                this.style.color = "black";
            }


            document.getElementById("tituloProjetos2").onmouseleave = function() 
            {
                this.style.backgroundColor = "#696969";
                this.style.color = "white";
            }

            document.getElementById("tituloProjetos3").onmouseover  = function() 
            {
                this.style.backgroundColor = "#A9A9A9";
                this.style.color = "black";
            }


            document.getElementById("tituloProjetos3").onmouseleave = function() 
            {
                this.style.backgroundColor = "#696969";
                this.style.color = "white";
            }

            document.getElementById("tituloProjetos4").onmouseover  = function() 
            {
                this.style.backgroundColor = "#A9A9A9";
                this.style.color = "black";
            }


            document.getElementById("tituloProjetos4").onmouseleave = function() 
            {
                this.style.backgroundColor = "#696969";
                this.style.color = "white";
            }

            document.getElementById("tituloProjetos5").onmouseover  = function() 
            {
                this.style.backgroundColor = "#A9A9A9";
                this.style.color = "black";
            }


            document.getElementById("tituloProjetos5").onmouseleave = function() 
            {
                this.style.backgroundColor = "#696969";
                this.style.color = "white";
            }

            document.getElementById("tituloProjetos6").onmouseover  = function() 
            {
                this.style.backgroundColor = "#A9A9A9";
                this.style.color = "black";
            }


            document.getElementById("tituloProjetos6").onmouseleave = function() 
            {
                this.style.backgroundColor = "#696969";
                this.style.color = "white";
            }







            document.getElementById("btnSobre").onmouseover  = function() 
            {
                this.style.backgroundColor = "#D8D8D8";
            }


            document.getElementById("btnSobre").onmouseleave = function() 
            {
                this.style.backgroundColor = "#A4A4A4";
            }

            
            document.getElementById("btnSobre2").onmouseover  = function() 
            {
                this.style.backgroundColor = "#D8D8D8";
            }

            document.getElementById("btnSobre2").onmouseleave = function() 
            {
                this.style.backgroundColor = "#A4A4A4";
            }

            
            document.getElementById("btnSobre3").onmouseover  = function() 
            {
                this.style.backgroundColor = "#D8D8D8";
            }

            document.getElementById("btnSobre3").onmouseleave = function() 
            {
                this.style.backgroundColor = "#A4A4A4";
            }

            
            document.getElementById("btnSobre4").onmouseover  = function() 
            {
                this.style.backgroundColor = "#D8D8D8";
            }

            document.getElementById("btnSobre4").onmouseleave = function() 
            {
                this.style.backgroundColor = "#A4A4A4";
            }

         

            document.getElementById("menus").onmouseover  = function() 
{
    this.style.backgroundColor = "gray";
}

 document.getElementById("menus").onmouseleave = function() 
{
    this.style.backgroundColor = "rgba(255,255,255,.2)";
}


document.getElementById("menus2").onmouseover  = function() 
{
    this.style.backgroundColor = "gray";
}

 document.getElementById("menus2").onmouseleave = function() 
{
    this.style.backgroundColor = "rgba(255,255,255,.2)";
}

document.getElementById("menus3").onmouseover  = function() 
{
    this.style.backgroundColor = "gray";
}

 document.getElementById("menus3").onmouseleave = function() 
{
    this.style.backgroundColor = "rgba(255,255,255,.2)";
}

            document.getElementById("menus4").onmouseover  = function() 
{
    this.style.backgroundColor = "gray";
}

 document.getElementById("menus4").onmouseleave = function() 
{
    this.style.backgroundColor = "rgba(255,255,255,.2)";
}




fOurT = false;

        }
      }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

