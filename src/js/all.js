var div = document.getElementById('log');
var textos = ['Desenvolvimento de Sistemas', 'Layout Responsivo', 'Front-End e Back-End [Júnior]','PHP, Mysql, JavaScript e CSS','Bootstrap, SASS, Gulp, Angular 2+, Composer, Laravel, GIT, NPM'];
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
/*
document.getElementById("menus2").onclick = function() {fundo2()};
document.getElementById("menus3").onclick = function() {fundo2()};

//usar true e false para verificar se foi aplicado o fundo
document.getElementById("menus").onclick = function() {fundoSimples()};
document.getElementById("menus4").onclick = function() {fundoSimples()};

function fundo2(){
  console.log("menu sobre teste");
  document.getElementById("svgFundo").style.display = 'inherit';
}
*/

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

 // list.getElementsByTagName("LI")[0].innerHTML = "Milk";

 var vetorTituloProjetos = ["tituloProjetos","tituloProjetos2","tituloProjetos3","tituloProjetos4",
 "tituloProjetos5","tituloProjetos6"];

 var vetorMenu = ["menus", "menus2", "menus3", "menus4" ];

 var vetorIconeMenu = ["iconeMenu","iconeMenu2","iconeMenu3"];

 var vetorFundoBranco = ["inicio","ruby","sass","bootstrap","sobre","fundoCursos","btnSobre",
 "btnSobre2","btnSobre3","btnSobre4","txtBtn","btnProj","btnProj2","btnProj3","btnProj4","btnProj5"];

 var vetorTxtBtn = ["txtBtn","txtBtn2","txtBtn3","txtBtn4"];



 var vetorBtnSobre = ["btnSobre", "btnSobre2","btnSobre3","btnSobre4"];



//vetores com ids 
var btnSbr = [];
var menuIds = [];
var tituloProjeId = [];

  for (var i = 0; i < vetorBtnSobre.length; i++) {
      btnSbr.push(document.getElementById(vetorBtnSobre[i]));
                         }  

    for (var i = 0; i < vetorMenu.length; i++) {
      menuIds.push(document.getElementById(vetorMenu[i]));
                         }  

     for (var i = 0; i < vetorTituloProjetos.length; i++) {
      tituloProjeId.push(document.getElementById(vetorTituloProjetos[i]));
                         }                                             
            
  
 var vetorBtnProjetos = ["btnProj","btnProj2","btnProj3","btnProj4","btnProj5"];
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
 function luz(){


           //  var x = document.getElementById("inicio");
        if( fOurT === false){
           fOurT = true;

          //     let test =  document.getElementById("svgFundoPreto").style.display='inline-block';

   //  console.log("teste id svg"+test);

   

   document.getElementById("svgFundoPreto").style.display = 'inherit';

 
         

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
                             
       
            document.getElementById("sass").style.backgroundColor = 'gray';

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
            
            document.getElementById("bootstrap").style.backgroundColor = 'gray';
            document.getElementById("sobre").style.backgroundColor = 'gray';
            document.getElementById("fundoCursos").style.backgroundColor = 'gray';
            document.getElementById("txtSobre").style.color = 'white';
        
            document.getElementById("txtBtn").style.backgroundColor = 'gray';



for (var i = 0; i < vetorTxtBtn.length; i++) {
              corTxt( vetorTxtBtn[i],"white");
                           }

            document.getElementById("txtEmail").style.color = '#ADFF2F';
            document.getElementById("svgCarta").style.fill = '#ADFF2F';

            
              for (var i = 0; i < vetorBtnSobre.length; i++) {
              corFundo( vetorBtnSobre[i],"#A4A4A4");
                           }

            for (var i = 0; i < vetorBtnProjetos.length; i++) {
               corFundo( vetorBtnProjetos[i],"gray");
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

function line(particle, particle2) {
    context.beginPath();
    context.moveTo(particle.x, particle.y);
    context.lineTo(particle2.x, particle2.y);
    context.stroke();
  }
   
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < maxParticles; i++) {
      let particle = particles[i];
      context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
      for (let j = 0; j < maxParticles; j++) {
        if (i != j) {
          let particle2 = particles[j];
          let distanceX = Math.abs(particle.x - particle2.x);
          let distanceY = Math.abs(particle.y - particle2.y);
          if (distanceX < threshold && distanceY < threshold) {
            context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
            let color = 200 - Math.floor(distanceX + distanceY);
            context.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
            line(particle, particle2);
          }
        }
      }
      particle.x = particle.x + particle.vx;
      particle.y = particle.y + particle.vy;
      if (particle.x > canvas.width - particleSize || particle.x < particleSize)
        particle.vx = -particle.vx;
      if (particle.y > canvas.height - particleSize || particle.y < particleSize)
        particle.vy = -particle.vy;
    }
    window.requestAnimationFrame(animate);
  }
   
  let canvas = document.getElementById('myCanvas');
  let context = canvas.getContext('2d');
  let particles = [];
  let particleSize = 2;
  let maxParticles = 50;
  let threshold = 100;
  for (let i = 0; i < maxParticles; i++) {
    let particle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random(),
      vy: Math.random()
    }
    particles.push(particle);
  }
  context.fillStyle = 'gray';
  canvas.style.position = 'fixed';
  animate();
  