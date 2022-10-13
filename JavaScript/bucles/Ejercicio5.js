var array=[];

document.write(
    `<table>
    <tr>
      <th>NUMERO EN ORDEN INVERSO</th>
      
      </table>`
);
document.write(`<table>
<tr>`);
for (let index = 0; index < 10; index++) {
    
    var numero = parseInt(prompt("Dime un numero"));
   
    array.push(numero);
    document.write(
        `
                    <td>`+numero+`</td>
                    `
    );
}   
document.write(`</table>
         </tr>`);

   document.write(`<table>
   <tr>`);
        for (let index = array.length-1;index>=0; index--) {
             document.write(
                `
                    <td>`+array[index]+`</td>
                    `
               );
               
         } 
         
         document.write(`</table>
         </tr>`);