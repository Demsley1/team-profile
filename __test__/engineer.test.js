const Engineer = require('../lib/engineer');

test('creates an engineer object extended from employee class', () => {
    const engineer = new Engineer('Eliza');

    expect(engineer.name).toBe('Eliza');
    expect(engineer.email).toBe(' ')
    expect(engineer.id).toBe(' ')
    expect(engineer.role).toBe(' ')
    expect(engineer.github).toBe(' ')
});

test('gets role submitted as parameter value and changes Engineer object propery to match', () => {
    const engineer = new Engineer('Eliza');

    expect(engineer.getRole('Engineer')).toEqual('Engineer');

    engineer.getRole();

    expect(engineer.role).toBe("Employee")
})

test('get engineers GitHub username from answers hash and returns it as the value for engineer object property', () => {
    const engineer = new Engineer('Eliza');

    expect(engineer.getGitHub('anyvalue')).toEqual(expect.any(String));

    engineer.getGitHub("Eliza2cool")

    expect(engineer.github).toBe("Eliza2cool")
})