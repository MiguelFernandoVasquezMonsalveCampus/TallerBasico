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

// metodos de indexOf

let p7 = 'hola mundo';
let p8 = p7.indexOf('m');

console.log(p8);

// metodos de lastIndexOf

let p9 = 'hola mundo';
let p10 = p9.lastIndexOf('mundo');

console.log(p10);

// metodos de search

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
console.log(paragraph[paragraph.search(regex)]);

// metodos de localeCompare

let p11 = 'hola';
let p12 = 'HOLA';

console.log(p11.localeCompare(p12));

// metodo de match

let p13 = 'hola mundo';
let p14 = p13.match(/mundo/);

console.log(p14);

// metodo de matchAll

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];

console.log(array[0]);
console.log(array[1]);

// metodos de repeat

p15 = 'hola';

console.log(p15.repeat(3));

// metodos de replace

let p16 = 'hola mundo';
let p17 = p16.replace('mundo', 'campus');

console.log(p17);

// metodos de slice

let p18 = 'hola mundo';
let p19 = p18.slice(0, 4);

console.log(p19);

// metodos de substr

let p20 = 'hola mundo';
let p21 = p20.substr(0, 8);

console.log(p21);