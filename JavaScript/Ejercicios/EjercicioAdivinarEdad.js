var fecha_nacimiento= prompt("Dime tu edad");

function calcularEdad(fecha_nacimiento) {
    var fecha_hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = fecha_hoy.getFullYear() - cumpleanos.getFullYear();
    var m = fecha_hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && fecha_hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

var edad = calcularEdad(fecha_nacimiento);

if(edad >= 18){
    alert("Eres mayor de edad");
    alert(edad);
}else{
    alert("Eres menor de edad");
    alert(edad);
}