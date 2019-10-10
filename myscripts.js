

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


    var fOurT = false;
    function luz(){

           //  var x = document.getElementById("inicio");
        if( fOurT === false){
           fOurT = true;
            document.getElementById("inicio").style.backgroundColor = 'white';
            document.getElementById("log").style.color = 'black';
            document.getElementById("lua").style.display = 'inherit';
            document.getElementById("luz").style.display = 'none';
            document.getElementById("menus").style.color = 'black';
            document.getElementById("menus2").style.color = 'black';
            document.getElementById("menus3").style.color = 'black';
            document.getElementById("menus4").style.color = 'black';
                    }
     
        else
        {
            document.getElementById("inicio").style.backgroundColor = 'black';
            document.getElementById("log").style.backgroundColor = 'white';
            document.getElementById("log").style.color = 'black';
            document.getElementById("lua").style.display = 'none';
            document.getElementById("luz").style.display = 'inherit';
            document.getElementById("menus").style.color = 'white';
            document.getElementById("menus2").style.color = 'white';
            document.getElementById("menus3").style.color = 'white';
            document.getElementById("menus4").style.color = 'white';
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

