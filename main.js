//metodos de string

let parrafo = 'Hello world';
let largo = parrafo.length;
console.log(`Largo del texto (${parrafo}): ${largo}`);

// metodos de CharAt

let parrafo1 = 'hello campus';
let donde = parrafo1.charAt(6);
console.log(donde);

// metodos de charCodeAt

let parrafo2 = 'tengo hambre';
let donde1 = parrafo2.charCodeAt(4);

console.log(donde1)

// metodos de codePointAt

let parrafo3 = 'tengo hambre';
let donde2 = parrafo3.codePointAt();

console.log(donde2)

// metodos de fromCharCode

let parrafo4 = 189;
let donde3 = String.fromCharCode(parrafo4);

console.log(donde3)

// metodos de concat

let p5 = 'hola';
let p6 = 'mundo';

console.log(p5.concat(p6));
