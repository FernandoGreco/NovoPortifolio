

var div = document.getElementById('log');
var textos = ['echo ("- Desenvolvimento de Sistemas Web");', 'printf ("- Layout Responsivo");', 'System.out.println ("-Front-End e Back-End [Júnior]");','select tecnologias from fernando where status = "utilizadas";','Mysql,  PHP, JavaScript, CSS (Bootstrap)'];
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

typeWriter(txt2);
//escreve texto e para
 function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 175 * i);
    });
  }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

  const titulo = document.querySelector('mn');
  typeWriter(titulo);
