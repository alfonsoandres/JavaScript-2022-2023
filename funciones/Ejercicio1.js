
let boton;

function parImpar() {
   
    let numero=document.getElementById('numero').value;
if (numero == 0) {
    alert("no valido")
  
}else{

if(numero%2==0){
        
    alert("El número "+numero+" es par");

}else{
    
    alert("El número "+numero+" es impar");
        
}
}

}


boton.addEventListener('click',parImpar);
    