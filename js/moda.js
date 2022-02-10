const listaModa = [];

const mostrarElemento = (id) => {
    document.getElementById(`${id}`).style.display = 'block';
};

const addNumber = () => {


    let inputIngresarNum = document.getElementById('inputIngresarNum').value;


    if (inputIngresarNum === '' || Number(inputIngresarNum) < 0) {
        document.getElementById('lista').innerHTML = `
        <strong>¡Advertencia!</strong> 
        El campo no puede ir vacío ni llevar números negativos.
        `;

        mostrarElemento('lista');

    } else {
        listaModa.push(Number(inputIngresarNum));

        // Insertar en HTML
        document.getElementById('lista').innerHTML = `
        <h5>
        Tu lista ordenada lleva: (${listaModa.sort((a, b) => a - b)})
        </h5>`;

        mostrarElemento('lista');

        // Limpiar el Input
        document.getElementById('inputIngresarNum').value = '';


        if (listaModa.length > 1) {

            document.getElementById('lista').innerHTML = `
                <h5>
                Tu lista lleva: (${listaModa}) si son todos tus datos puedes presionar el botón: 
                </br> 
                <strong>Calcular Mediana</strong>
                </h5>`;

            mostrarElemento('calcularPromedio');
        }
    }

};

const calcularModa = (lista) => {

    const listaCount = {};

    lista.map((elemento) => {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);
    return listaArray[listaArray.length - 1];
};

const btnCalcularModa = () => {

    document.getElementById('resultado').innerHTML = `
    <h5>La Moda es: ${calcularModa(listaModa)[0]} con ${calcularModa(listaModa)[1]} repeticiones.</h5>`;


    // console.log(lista);

    // console.log(`Mediana: ${calcularMediana(lista)}`);
    mostrarElemento('resultado');
};




// console.log(`Moda: ${calcularModa(listaModa)[0]} con ${calcularModa(listaModa)[1]} repeticiones.`);
