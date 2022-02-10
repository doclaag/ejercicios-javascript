const listaMediana = [];
// let mitadLista = parseInt(lista.length / 2);

let mediana;



const mostrarElemento = (id) => {
    document.getElementById(`${id}`).style.display = 'block';
};


const addNumber = () => {

    let inputIngresarNum = document.getElementById('inputIngresarNum').value;

    // console.log(inputIngresarNum);

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
        Tu lista ordenada lleva: (${lista.sort((a, b) => a - b)})
        </h5>`;

        mostrarElemento('lista');

        // Limpiar el Input
        document.getElementById('inputIngresarNum').value = '';


        if (lista.length > 1) {

            document.getElementById('lista').innerHTML = `
                <h5>
                Tu lista lleva: (${lista}) si son todos tus datos puedes presionar el botón: 
                </br> 
                <strong>Calcular Mediana</strong>
                </h5>`;

            mostrarElemento('calcularPromedio');
        }
    }

    // let numero = 4.49;
    // console.log(numero.toFixed() + '-');
    // numero = 4.75;
    // console.log('→' + numero.toFixed());
};


const calcularPromedio = (lista) => {
    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    // const promedio = suma / lista.length;
    return (suma / lista.length);

    // return promedio.toFixed(2);
};


const esPar = (numero) => {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
};



const calcularMediana = (lista) => {

    lista.sort((a, b) => a - b);

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];


        return mediana = calcularPromedio([elemento1, elemento2]);


    } else {
        return mediana = lista[mitadLista];
    }
};






const btnCalcularMediana = () => {

    document.getElementById('resultado').innerHTML = `
    <h5>La mediana es de:  ${calcularMediana(lista)}</h5>`;


    // console.log(lista);

    // console.log(`Mediana: ${calcularMediana(lista)}`);
    mostrarElemento('resultado');
};