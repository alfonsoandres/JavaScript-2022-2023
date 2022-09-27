let nombre = prompt("Dime tu nombre");
let apellido = prompt("Dime tu apellido");
let salario = prompt("Dime tu salario");
let edad = prompt("Dime tu edad");
var totalSalario;

if (salario > 1000 & salario < 2000) {
    if (edad >= 45) {

        totalSalario = (parseFloat(salario) * 0.03) + parseFloat(salario);
        alert("nombre " + nombre + " apellido " + apellido + " salario " + salario + " edad " + edad + " SalarioNuevo " + totalSalario);
    } else if (edad <= 45) {
        totalSalario = (parseFloat(salario) * 0.10) + parseFloat(salario);
        alert("nombre " + nombre + " apellido " + apellido + " salario " + salario + " edad " + edad + " SalarioNuevo " + totalSalario);
    }

} else if (salario < 1000) {
    if (edad <= 30) {
        totalSalario = (parseFloat(salario) + 1100);
        alert("nombre " + nombre + " apellido " + apellido + " salario " + salario + " edad " + edad + " SalarioNuevo " + totalSalario);
        
    } else if (edad >= 30 & edad <= 45) {
        totalSalario = (parseFloat(salario) * 0.03) + parseFloat(salario);
        alert("nombre " + nombre + " apellido " + apellido + " salario " + salario + " edad " + edad + " SalarioNuevo " + totalSalario);

    } else if (edad >= 45) {
        totalSalario = (parseFloat(salario) * 0.15) + parseFloat(salario);
        alert("nombre " + nombre + " apellido " + apellido + " salario " + salario + " edad " + edad + " SalarioNuevo " + totalSalario);

    }
}