const { TestWatcher } = require('jest');
const Intern = require('../lib/intern');

test('creates Intern object extended from employee Class', () => {
    const intern = new Intern('Irene')

    expect(intern.name).toBe('Irene');
    expect(intern.email).toBe(' ')
    expect(intern.id).toBe(' ')
    expect(intern.role).toBe(' ')
    expect(intern.school).toBe(' ')
});

test('gets interns role submitted as string, and returns role property as submitted value', () => {
    const intern = new Intern('Irene')

    expect(intern.getRole("Intern")).toEqual("Intern")

    intern.getRole()

    expect(intern.role).toBe("Employee")
});

test('gets interns school name from answers hash and changes itern school property to submitted value', () => {
    const intern = new Intern('Irene')

    expect(intern.getSchool('schoolname')).toEqual(expect.any(String));

    intern.getSchool("Columbia University")

    expect(intern.school).toBe("Columbia University")
});