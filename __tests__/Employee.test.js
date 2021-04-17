const Employee = require('../lib/Employee');

describe("Methods", () => {
    test('can we get name by calling getName()', () => {
        const name = 'Jake';
        const employee = new Employee(name, 1, 'email@email.com')
        expect(employee.getName()).toBe(name);      
    })
    test('can we get id by calling getId()', () => {
        const id = 82;
        const employee = new Employee('Jake', id, 'email@email.com')
        expect(employee.getId()).toBe(id);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const employee = new Employee('Jake', 23, email)
        expect(employee.getEmail()).toBe(email);
    })
    test('can we get role by calling getRole()', () => {
        const employee = new Employee('Jake', 23, 'email@email.com')
        expect(employee.getRole()).toBe('Employee');
    })
})