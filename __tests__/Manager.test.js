const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('Jarod', 81, 'jarod.florence@gmail.com', 7);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employee role', () => {
    const manager = new Manager('Jarod', 81, 'jarod.florence@gmail.com', 7);

    expect(manager.getRole()).toEqual("Manager");
});