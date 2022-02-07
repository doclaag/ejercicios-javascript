// FUNCIONES

// CUADRADO
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => Math.pow(lado, 2);



// TRIÁNGULO
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// TRIÁNGULO ISÓSCELES
const alturaIsosceles = (lado1, lado2, base) => {
    if (lado1 !== lado2) {
        return 'No es un Triángulo Isósceles';
    } else {
        const resultado = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(lado2, 2) / 4))

        return `${resultado} cm`;
    }
};



// CÍRCULO
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};
const areaCirculo = (radio) => Math.pow(radio, 2);


// Insertar en HTML

// CUADRADO
const calcularAreaCuadrado = () => {
    const lado = Number(document.getElementById('inputCuadrado').value);


    document.getElementById('resultadoCuadrado').innerHTML = `${areaCuadrado(lado)} cm²`;
};

const calcularPerimetroCuadrado = () => {
    const lado = Number(document.getElementById('inputCuadrado').value);
    perimetroCuadrado(lado);

    document.getElementById('resultadoCuadrado').innerHTML = `${perimetroCuadrado(lado)} cm`;
};



// TRIANGULO

const calcularAreaTriangulo = () => {
    const base = Number(document.getElementById('inputTrianguloBase').value);
    const altura = Number(document.getElementById('inputTrianguloAltura').value);

    document.getElementById('resultadoTriangulo').innerHTML = `${areaTriangulo(base, altura)} cm²`;
}


const calcularPerimetroTriangulo = () => {
    const lado1 = Number(document.getElementById('inputTrianguloA').value);
    const lado2 = Number(document.getElementById('inputTrianguloB').value);
    const base = Number(document.getElementById('inputTrianguloBase').value);


    document.getElementById('resultadoTriangulo').innerHTML = `${perimetroTriangulo(lado1, lado2, base)} cm`;
}

const calcularAlturaTrianguloIsosceles = () => {
    const lado1 = Number(document.getElementById('inputIsoscelesA').value);
    const lado2 = Number(document.getElementById('inputIsoscelesB').value);
    const base = Number(document.getElementById('inputIsoscelesBase').value);

    document.getElementById('resultadoIsosceles').innerHTML = `${alturaIsosceles(lado1, lado2, base)}`;
};



// CÍRCULO
const calcularAreaCirculo = () => {
    const radio = Number(document.getElementById('inputCirculo').value);


    document.getElementById('resultadoCirculo').innerHTML = `${areaCirculo(radio)} cm²`;
};

const calcularPerimetroCirculo = () => {
    const radio = Number(document.getElementById('inputCirculo').value);


    document.getElementById('resultadoCirculo').innerHTML = `${perimetroCirculo(radio)} cm`;
};


// Código del Cuadrado
// console.group('Cuadrado');
// const ladoCuadrado = 5;




/// Variables Texto
// let txtLados = `Los lados del cuadrado miden ${ladoCuadrado} cm`;
// let txtPerimetro = `El perímetro del cuadrado mide ${perimetroCuadrado(ladoCuadrado)} cm`;
// let txtArea = `El área del cuadrado mide ${areaCuadrado(ladoCuadrado)} cm^2`;


// Imprimir en Consola
// console.log(txtLados);
// console.log(txtPerimetro);
// console.log(txtArea);

/* document.getElementById('cuadrado').innerHTML = `
<h3>Cuadrado</h3>
<p>
${txtLados} <br/>
${txtPerimetro} <br/>
${txtArea}
</p>`; */

// console.groupEnd();



// // Código del Triángulo
// console.group('Triángulos');
// const baseTriangulo = 6;
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const alturaTriangulo = 6;




// // Variables de Texto
// let txtAltura = `La altura del triángulo es: ${alturaTriangulo}`;
// txtLados = `Los lados del triángulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm.`;
// txtPerimetro = `El perímetro del triángulo es: ${perimetroTriangulo(6, 6, 4)}`;
// txtArea = `El área del triángulo es: ${areaTriangulo(6, 5)}`;


// /// Impresión en Consola
// console.log(txtLados);
// console.log(txtAltura);
// console.log(txtPerimetro);
// console.log(txtArea);


// // Insertar HTML
// /* document.getElementById('triangulo').innerHTML = `
// <h3>Triángulo</h3>
// <p>
// ${txtLados} <br/> 
// ${txtAltura}<br/> 
// ${txtPerimetro} <br/> 
// ${txtArea}
// </p>`; */

// console.groupEnd();



// // Código del Circulo
// console.group('Círculo');

// const radio = 4;



// // Variables Texto
// let txtRadio = `El radio del círculo es: ${radio} cm.`;
// let txtDiametro = `El diámetro del círculo es ${diametroCirculo(radio)} cm.`;
// txtPerimetro = `El perímetro del círculo es: ${perimetroCirculo(radio)} cm.`;
// txtArea = `El área del círculo es: ${areaCirculo(radio)} cm.`;


// // Impresión en Consola
// console.log(txtRadio);
// console.log(txtDiametro);
// console.log(txtPerimetro);
// console.log(txtArea);


// // Insertar HTML
// /* document.getElementById('circulo').innerHTML = `
// <h3>Círculo</h3>
// <p>
// ${txtRadio} <br/> 
// ${txtDiametro}<br/> 
// ${txtPerimetro} <br/> 
// ${txtArea}
// </p>`; */

// console.groupEnd();