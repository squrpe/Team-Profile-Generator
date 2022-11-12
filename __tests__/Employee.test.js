const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should set constructor properties', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';

        const employee = new Employee('lara', 5, 'test@gmail.com');

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);

    })

    it ('should get name method returns name', () => {
        const name = 'lara';

        const employee = new Employee('lara', 5, 'test@gmail.com');

        expect(employee.getName()).toEqual(name);
    })
});