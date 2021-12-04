it('nada agora', function() {});

// function soma(a, b) {
//     return a + b;
// }

// const soma = function(a, b) {
//     return a + b;
// }

// Arrow Function 

// const soma = (a, b) => {
//     return a + b;
// }

const soma = (a, b) => a + b;

// um parametro 

// const soma = (a) => a + a;

// const soma = a => a + a;

console.log(soma(2, 4));

it('a function teste.....', function() {
    console.log('Function', this);
});

it('an arrow teste.....', () => {
    console.log('Arrow', this);
});