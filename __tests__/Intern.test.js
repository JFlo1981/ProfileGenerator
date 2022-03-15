const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Jarod', 81, 'jarod.florence@gmail.com', 'UT BootCamp');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets school name', () => {
    const intern = new Intern('Jarod', 81, 'jarod.florence@gmail.com', 'UT BootCamp');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get employee role', () => {
    const intern = new Intern('Jarod', 81, 'jarod.florence@gmail.com', 'UT BootCamp');

    expect(intern.getRole()).toEqual("Intern");
});