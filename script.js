const avanca=document.querySelectorAll('btn-proximo');
const reiniciarBtn=document.getElementById('btn-reiniciar');

avanca.forEach(button => {
    button.addEventListener('click', function (){
        const atual=document.querySelector('.ativo');
        const proximoPasso='passo-'+this.getElementById('data-proxima');

        atual.classList.remove('ativo');
        const proximoElemento=document.getElementById(proximoPasso);

        if(proximoElemento){
            proximoElemento.classList.add('ativo');
        }else{
            console.error(`Elemento com ID "${proximoPasso}" não encontrado.`);
            
        }
    })
})