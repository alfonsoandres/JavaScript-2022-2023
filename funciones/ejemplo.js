
function primo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

 
function generarNumeros() {
for (let x=0;x<=500;x++) {
        if (primo(x)){
        document.getElementById("message").value+=x+"\n";
        }

    } 
}

