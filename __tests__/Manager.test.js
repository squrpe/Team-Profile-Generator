const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should set constructor properties', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';
        const officenumber = 1;

        const manager = new Manager('lara', 5, 'test@gmail.com', 1);

        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officenumber).toEqual(officenumber);
    })

    it ('should use the get method and return correct data', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';
        const officenumber = 1;

        const manager = new Manager('lara', 5, 'test@gmail.com', 1);

        expect(manager.getName()).toEqual(name);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
        expect(manager.getOfficenumber()).toEqual(officenumber);
    })

    it ('should return correct role from getRole() method', () => {
        const managerValue = 'Manager';

        const manager = new Manager('lara', 5, 'test@gmail.com', 1);

        expect(manager.getRole()).toEqual(managerValue);
    })

})