const iva = 0.16;
let Total;

function calcularIva(precio){
    let ivaProducto = precio * iva;
    let Total = precio - ivaProducto;
    console.log(`El IVA del producto es de: ${ivaProducto} pesos mexicanos.`)
    console.log(`El precio final del producto es de: ${Total} pesos mexicanos.`)
}