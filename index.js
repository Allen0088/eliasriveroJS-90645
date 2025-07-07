const manejo_dolar = [
    {moneda: "dolar", compra: 1250, venta: 1100,},
    {moneda: "euro", compra: 1480, venta: 1350,}
];





function operacion(pregunta, moneda){
    switch(pregunta){
        case "compra":
            compra(moneda);
            break;
        case "venta":
            ventas(moneda);
        break;
        default:
            inicio()
    }
}

function operacion2(siguiente1){
    switch(siguiente1){
        case "dolar":
        inicio2(manejo_dolar[0]);
        break;
        case "euro":
        inicio3(manejo_dolar[1])
        break;
        default:
            inicio()
    }
}

function inicio2(moneda){
    let pregunta = prompt(`que queres hacer:
        compra
        venta
        `).toLowerCase();
operacion(pregunta, moneda)
}

function inicio3(moneda){
    let pregunta = prompt(`que queres hacer:
        compra
        venta
        `).toLowerCase();
operacion(pregunta, moneda);
}


function compra(moneda){
    let cantidad = Number(prompt("cuantos vas a comprar?"))
    let contenido = moneda.compra * cantidad
    alert("debes pagar: $" + contenido)
}

function venta(moneda){
let cantidad = Number(prompt("cuanto vas a vender?"))
let contenido = moneda.venta * cantidad
alert ("te daremos: $"+ contenido)
}

function inicio (){
let siguiente1= prompt(`elige la moneda:
    dolar
    euro
    `).toLowerCase();


operacion2(siguiente1)
}



inicio()


