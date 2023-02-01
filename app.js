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

