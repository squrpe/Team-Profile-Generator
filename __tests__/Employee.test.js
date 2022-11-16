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

    it ('should use the get method and return correct data', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';

        const employee = new Employee('lara', 5, 'test@gmail.com');

        expect(employee.getName()).toEqual(name);
        expect(employee.getId()).toEqual(id);
        expect(employee.getEmail()).toEqual(email);
    })

    it ('should return correct role from getRole() method', () => {
        const employeeValue = 'Employee';

        const employee = new Employee('lara', 5, 'test@gmail.com');

        expect(employee.getRole()).toEqual(employeeValue);
    })

});