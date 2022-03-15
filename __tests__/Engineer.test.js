const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Jarod', 81, 'jarod.florence@gmail.com', 'JFlo1981');

    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('gets github id', () => {
    const engineer = new Engineer('Jarod', 81, 'jarod.florence@gmail.com', 'JFlo1981');

    expect(engineer.getGitHub).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

test('get employee role', () => {
    const engineer = new Engineer('Jarod', 81, 'jarod.florence@gmail.com', 'JFlo1981');

    expect(engineer.getRole()).toEqual("Engineer");
});