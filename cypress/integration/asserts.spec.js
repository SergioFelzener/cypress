it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect(a).not.to.be.equal("b");
});

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(b, 'Verificando igualdade com teste').not.to.be.equal("teste");
});
it('Sergio', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(b, 'Verificando igualdade com teste').not.to.be.equal("teste");
    expect(c, 'Variavel indefinida teste ...').to.be.undefined;
});


// Objetos

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2,
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equals(obj);
    expect(obj).to.be.deep.equal({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ a: 1 })
    expect(obj).to.have.property('b');
    expect(obj).to.have.property('b', 2);
    expect(obj).to.be.not.empty;
    expect({}).to.be.empty;
    expect({}).empty;


});

it('Arrays Equality', () => {
    const arr = [1, 2, 3];

    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.include.members([1, 3]);
    expect(arr).to.not.empty;
    expect([]).empty;

});

it('Types', () => {
    const num = 1;
    const string = 'String';

    expect(num).to.be.a('number');
    expect(string).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');

});

it('String', () => {
    const str = 'test de String ...';

    expect(str).to.be.equal('test de String ...');
    expect(str).to.have.length(18);
    expect(str).to.contains('st');
    expect(str).to.match(/de/);
    expect(str).to.match(/^test/);
    expect(str).to.match(/...$/);
    expect(str).to.match(/.{18}/);
    expect(str).to.match(/\w+/); // so letras 
    expect(str).to.match(/\D+/); // nao contem numeros
})

it('Numbers', () => {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(7);
    expect(floatNumber).to.be.equal(5.2123);
    expect(floatNumber).to.be.closeTo(5.2, 0.1);

});