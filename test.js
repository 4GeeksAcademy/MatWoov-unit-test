const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

   expect(total).toBe(23);
});

test("3.5 euro should be 4.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    

    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("two dollar should be 127.9 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(2)).toBe(255.8); // 1 dollar son 127.9 yenes, entonces 2 dolares deberian ser = (2 * 127.9)
})

test("three yen should be 4 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    
    expect(fromYenToPound(5)).toBe(4); // 1 yen son 0.8 pound, entonces 4  deberian ser = (4 * 0.8)
})

 