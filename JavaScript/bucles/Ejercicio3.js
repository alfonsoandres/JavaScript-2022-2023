var numero=0;
var total=0;

numero=prompt("Dime un numero");

document.write(
    `<table>
    <tr>
      <th>La tabla de multiplicar del numero:`+numero+`</th>
      </table>`
);
   
        for (let index = 0; index <=10; index++) {
            total=index*numero;
             document.write(
                `<table>
                <tr>
                    <td>`+numero+`  *  `+index+`</td>
                    <td>`+total+`</td>

                </tr>
                </table>`);
             
         }  
    

