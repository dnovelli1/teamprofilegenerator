const Engineer = require('../lib/Engineer');

describe("Methods", () => {
    test('can we get name by calling getName()', () => {
        const name = 'Jake';
        const engineer = new Engineer(name, 1, 'email@email.com', 'dnovelli1');
        expect(engineer.getName()).toBe(name);
    })
    test('can we get id by calling getId()', () => {
        const id = 82;
        const engineer = new Engineer('Jake', id, 'email@email.com', 'dnovelli1');
        expect(engineer.getId()).toBe(id);
    })
    test('can we get email by calling getEmail()', () => {
        const email = 'email@email.com';
        const engineer = new Engineer('Jake', 23, email, 'dnovelli1');
        expect(engineer.getEmail()).toBe(email);
    })
    test('can we get github by calling getGithub()', () => {
        const github = 'dnovelli1';
        const engineer = new Engineer('Jake', 23, 'email@email.com', github);
        expect(engineer.getGithub()).toBe(github);
    })
    test('can we get role by calling getRole()', () => {
        const engineer = new Engineer('Jake', 23, 'email@email.com', 'UC Berkeley');
        expect(engineer.getRole()).toBe('Engineer');
    })
})