
var numero=0;
var numeroMax=0;

for (let index = 0; index < 3; index++) {
    
numero=parseInt(prompt("Dime un numero"));
    
if (numero>numeroMax) {
       numeroMax=numero;
    } 
}



document.write("El numero mayor es:"+numeroMax);