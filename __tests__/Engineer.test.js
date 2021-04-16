const Engineer = require('../lib/Engineer');
describe("Methods", () => {
    test('can we get name by calling getName()', () => {
        const name = 'Jake';
        const engineer = new Engineer(name, 1, 'email@email.com', 21)
        expect(engineer.getName()).toBe(name);      
    })
    test('can we get id by calling getId()', () => {
        const id = 82;
        const engineer = new Engineer('Jake', id, 'email@email.com', 21)
        expect(engineer.getId()).toBe(id);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const engineer = new Engineer('Jake', 23, email, 21)
        expect(engineer.getEmail()).toBe(email);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const engineer = new Engineer('Jake', 23, email, 21)
        expect(engineer.getEmail()).toBe(email);
    })
})