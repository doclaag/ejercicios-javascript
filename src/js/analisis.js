// HELPERS

const esPar = (numero) => {
    return (numero % 2 === 0);
};

const calcularPromedio = (lista) => {
    // const suma = lista.reduce((a, b) => a + b);

    const suma = lista.reduce((a, b) => a + b);

    return (suma / lista.length);
};


// CALCULADORAS DE MEDIANAS
const medianaSalarios = (lista) => {

    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];

        return calcularPromedio([persona1, persona2]);
    } else {

        // La persona de la mitad del arreglo
        return lista[mitad];
    }
};

// MEDIANA GENERAL

const salariosGua = guatemala.map(({ salary }) => {
    return salary;
});

const salariosOrdenados = salariosGua.sort((a, b) => a - b);


const medianaGeneral = medianaSalarios(salariosOrdenados);


// MEDIANA TOP 10
const inicio = (salariosOrdenados.length * 0.9);
const top10 = salariosOrdenados.length - inicio;

const salariosTop10 = salariosOrdenados.splice(inicio, top10);

const medianaTop10 = medianaSalarios(salariosTop10);


console.log({ medianaGeneral, medianaTop10 });