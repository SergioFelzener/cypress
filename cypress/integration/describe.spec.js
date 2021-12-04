/// <reference types="cypress" />  

// ajudando VSCode que estamos usando cypress 

it('A External Test', () => {
    console.log('ok existe um teste Externo !!!')
});

describe('Shold group tests .... ', () => {
    it('A Internal Test', () => {
        console.log('ok existe um teste  Interno!!!')
    });

});
//skip no grupo 

describe.skip('Shold group tests .... ', () => {
    it('A Internal Test', () => {
        console.log('ok existe um teste  Interno!!!')
    });

});

describe('Shold group tests .... ', () => {
    describe('Shold group tests .... ', () => {
        it('A Internal Test', () => {
            console.log('ok existe um teste  Interno!!!')
        });

    });
    //pulando um teste
    it.skip('A Internal Test', () => {
        console.log('ok existe um teste  Interno!!!')
    });

});


// it.only // apenas esse metodo executa