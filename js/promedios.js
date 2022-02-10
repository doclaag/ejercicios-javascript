const listaPromedio = [];

const mostrarElemento = (id) => {
    document.getElementById(`${id}`).style.display = 'block';
};


const calcularPromedio = (lista) => {
    /* let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    } */


    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = suma / lista.length;

    return promedio.toFixed(2);


}

// console.log(calcularMedia(lista));
// console.log(promedio);

const addNumber = () => {


    let inputIngresarNum = document.getElementById('inputIngresarNum').value;

    console.log(inputIngresarNum);

    if (inputIngresarNum === '' || Number(inputIngresarNum) < 0) {
        document.getElementById('lista').innerHTML = `
        <strong>¡Advertencia!</strong> 
        El campo no puede ir vacío ni llevar números negativos.
        `;


        mostrarElemento('lista');

    } else {
        lista.push(Number(inputIngresarNum));

        // Insertar en HTML
        document.getElementById('lista').innerHTML = `
        <h5>
        Tu lista lleva: (${lista})
        </h5>`;

        mostrarElemento('lista');

        // Limpiar el Input
        document.getElementById('inputIngresarNum').value = '';


        if (lista.length > 1) {

            document.getElementById('lista').innerHTML = `
                <h5>
                Tu lista lleva: (${lista}) si son todos tus datos puedes presionar el botón: 
                </br> 
                <strong>Calcular Promedio</strong>
                </h5>`;

            mostrarElemento('calcularPromedio');
        }
    }

    // let numero = 4.49;
    // console.log(numero.toFixed() + '-');
    // numero = 4.75;
    // console.log('→' + numero.toFixed());
};

const btnCalcularPromedio = () => {

    document.getElementById('resultado').innerHTML = `
    <h5>El promedio es de:  ${calcularPromedio(lista)}</h5>`;

    mostrarElemento('resultado');

};

