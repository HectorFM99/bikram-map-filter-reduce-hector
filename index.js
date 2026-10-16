//RESUELVE LOS EJERCICIOS AQUI

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => numbers.map(num => Math.pow(num, num));

// Ejercicio 2
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const frasesComida = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
};

const result2 = foodList.map(comida => frasesComida[comida]);

// Ejercicio 3
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(persona =>
    `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(' y ')}`
);


// Ejercicio 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(num => num % 2 !== 0);

// Ejercicio 5
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

// Determina si el nombre del plato es femenino (termina en 'a' o en 'burguer')
const esFemenino = nombre => /a$|burguer$/i.test(nombre);

const result5 = foodList2
    .filter(plato => plato.isVeggie)
    .map(plato => `Que ric${esFemenino(plato.name) ? 'a' : 'o'} ${plato.name} me voy a comer!`);

// Ejercicio 6
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const result6 = inventory
    .filter(producto => producto.price > 300)
    .map(producto => producto.name);


// Ejercicio 7
const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acumulador, numero) => acumulador * numero, 1);

// Ejercicio 8
const sentenceElements = [
    'Me',
    'llamo',
    'Hector',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const result8 = sentenceElements.reduce((frase, elemento) => `${frase} ${elemento}`).trim();

// Ejercicio 9
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const result9 = books
    .filter(libro => libro.category === 'code')
    .reduce((total, libro) => total + libro.price, 0);
