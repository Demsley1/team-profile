const Employee = require('../lib/employee');

test('creates an employee class object', () => {
    const employee = new Employee('Stan');

    expect(employee.name).toBe('Stan');
    expect(employee.email).toBe(' ')
    expect(employee.id).toBe(' ')
    expect(employee.role).toBe(' ')
})

test('gets email value and sets it to the employee email property', () => {
    const employee = new Employee('Stan');

    expect(employee.getEmail('a random value')).toEqual(expect.any(String))

    employee.getEmail('test@mail.com')

    expect(employee.email).toEqual('test@mail.com')
});

test('gets an ID number value from answers and sets property value to inputed number value', () => {
    const employee = new Employee('Stan');

    expect(employee.getID(1)).toEqual(expect.any(Number))

    employee.getID(24)

    expect(employee.id).toBe(24)
});

test('gets an employees role and sets it to either a value returned from answers hash, or no val indicating am "Employee"', () => {
    const employee = new Employee('Stan');

    expect(employee.getRole('value')).toEqual(expect.any(String));

    employee.getRole();

    expect(employee.role).toEqual('Employee')
});
