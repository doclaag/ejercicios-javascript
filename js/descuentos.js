const precioOriginal = 120;
const descuento = 18;

const precioConDescuento = precioOriginal - (precioOriginal * (descuento / 100));

// console.log(precioConDescuento);


const aplicarDescuento = (precio, descuento) => {
    return precio - (precio * (descuento / 100));
};

// console.log(aplicarDescuento(precioOriginal, descuento));


const cupones = ['Descuento15', 'Descuento25', 'Descuento30'];


const btnAplicarDescuento = () => {
    // INPUTS PRICE & DISCOUNT
    const inputPrice = Number(document.getElementById('inputPrice').value);
    // const inputDiscount = Number(document.getElementById('inputDiscount').value);

    // SELECT
    const select = document.getElementById('cupon');
    const selected = select.options[select.selectedIndex].text;

    // console.log(selected);

    let descuento;

    if (inputPrice === 0 && inputDiscount === 0) {
        document.getElementById('resultPrice').innerHTML = `Los campos no pueden ir vacios`
    } else {
        switch (selected) {
            case cupones[0]:
                descuento = 15;
                break;
            case cupones[1]:
                descuento = 25;
                break;
            case cupones[2]:
                descuento = 30;
                break;
            default:
                descuento = 0;
                break;
        }

        const resultado = aplicarDescuento(inputPrice, descuento).toFixed(2);

        document.getElementById('resultPrice').innerHTML = `El precio con descuento es de: $ ${resultado}`;
    }
};

