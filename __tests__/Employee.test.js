const Employee = require('../lib/Employee');

test('creates the employee object', () => {
    const employee = new Employee('Jarod', 81, 'jarod.florence@gmail.com');

    expect(employee.name).toBe('Jarod');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(String));
    
});

test('gets the employee name', () => {
    const employee = new Employee('Jarod', 81, 'jarod.florence@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets the employee Id', () => {
    const employee = new Employee('Jarod', 81, 'jarod.florence@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets the employee Email', () => {
    const employee = new Employee('Jarod', 81, 'jarod.florence@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employee Role', () => {
    const employee = new Employee('Jarod', 81, 'jarod.florence@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
