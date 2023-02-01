/*email*/
let formulario = document.querySelector('#email-ativar');

formulario.addEventListener('click', show1);

function show1(){
    document.querySelector('.email-contain-out').classList.add('ds-grid');
   }

/*vantagens*/
let vantagens = document.querySelector('#vantagens-ativar');
vantagens.addEventListener('click', show2);
   
 function show2(){
    document.querySelector('.vantagens-contain-out').classList.add('ds-grid');
 }

 let depoimentos = document.querySelector('#depoimentos-ativar');
 depoimentos.addEventListener('click', show3);

 function show3 (){
   document.querySelector('.depoimentos-contain-out').classList.add('ds-grid');
 }


//back-to-top
 const btnTop = document.getElementById('back-to-top')
   btnTop.addEventListener('click', ()=>{
      window.scrollTo(0,0);
   });