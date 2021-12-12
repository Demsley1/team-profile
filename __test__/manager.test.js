const Manager = require('../lib/manager');

test('creates a Manager object from manager Class', () => {
    const manager = new Manager('Owen')

    expect(manager.name).toBe('Owen');
    expect(manager.email).toBe(' ')
    expect(manager.id).toBe(' ')
    expect(manager.role).toBe(' ')
    expect(manager.officeId).toBe(' ')
});

test('gets Managers role value as a string and changes it from the default emploee', () =>{
    const manager = new Manager('Owen')

    expect(manager.getRole("Manager")).toEqual("Manager")

    manager.getRole();

    expect(manager.role).toBe('Employee')
})

test ('gets office ID number value from answers and sets manager property to this value', () => {
    const manager = new Manager('Owen')

    expect(manager.getOfficeID(70)).toEqual(expect.any(Number))

    manager.getOfficeID(81)

    expect(manager.officeId).toBe(81)
})