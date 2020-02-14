
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