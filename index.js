const manejo_dolar = [
    {moneda: "dolar", compra: 1250, venta: 1100,},
    {moneda: "euro", compra: 1480, venta: 1350,}
];

// function operacion(pregunta, moneda){
//     switch(pregunta){
//         case "compra":
//             compra(moneda);
//             break;
//         case "venta":
//             venta(moneda);
//         break;
//         default:
//             inicio()
//     }
// }

// function operacion2(siguiente1){
//     switch(siguiente1){
//         case "dolar":
//         inicio2(manejo_dolar[0]);
//         break;
//         case "euro":
//         inicio3(manejo_dolar[1])
//         break;
//         default:
//             inicio()
//     }
// }

// function inicio2(moneda){
//     let pregunta = prompt(`que queres hacer:
//         compra
//         venta
//         `).toLowerCase();
// operacion(pregunta, moneda)
// }

// function inicio3(moneda){
//     let pregunta = prompt(`que queres hacer:
//         compra
//         venta
//         `).toLowerCase();
// operacion(pregunta, moneda);
// }


// function compra(moneda){
//     let cantidad = Number(prompt("cuantos vas a comprar?"))
//     let contenido = moneda.compra * cantidad
//     alert("debes pagar: $" + contenido)
// }

// function venta(moneda){
// let cantidad = Number(prompt("cuanto vas a vender?"))
// let contenido = moneda.venta * cantidad
// alert ("te daremos: $"+ contenido)
// }

// function inicio (){
// let siguiente1= prompt(`elige la moneda:
//     dolar
//     euro
//     `).toLowerCase();


// operacion2(siguiente1)
// }



// inicio()


let nameUser;
let dni;
let correo;

let nombrem = document.querySelector(".userW");

document.querySelector(".enviar").onclick = () => {
nameUser = document.querySelector(".info-nombre").value;
dni= document.querySelector(".info-dni").value;
correo= document.querySelector(".info-correo").value;

localStorage.setItem("nameUser", nameUser)
nombrem.innerHTML = `<p>Hola, ${nameUser} !</p>` ;
}

const bro = localStorage.getItem("nameUser");

if(bro){
nombrem.innerHTML = `<p> Hola, ${bro} !</p>`;
}

let money = document.querySelector(".objetivo") ;
let cantidad = document.querySelector(".info-cantidad");
let total = document.querySelector(".total");

function seleccion (){
let monedita = money.value;
let cuanto = Number(cantidad.value);

if (money.value === manejo_dolar[0].moneda) {
let resultado = Number(cantidad.value) * manejo_dolar[0].compra;
total.value = resultado.toFixed(2);
} else if (money.value === manejo_dolar[1].moneda) {
let resultado = Number(cantidad.value) *manejo_dolar[1].compra;
total.value = resultado.toFixed(2);
} else {
total.value = "No hay nd";
}
}

