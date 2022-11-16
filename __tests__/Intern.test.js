const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should set constructor properties', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';
        const school = 'Adelaide Secondry';

        const intern = new Intern('lara', 5, 'test@gmail.com', 'Adelaide Secondry');

        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    })

    it ('should use the get method and return correct data', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';
        const school = 'Adelaide Secondry';

        const intern = new Intern('lara', 5, 'test@gmail.com', 'Adelaide Secondry');

        expect(intern.getName()).toEqual(name);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
        expect(intern.getSchool()).toEqual(school);
    })

    it ('should return correct role from getRole() method', () => {
        const internValue = 'Intern';

        const intern = new Intern('lara', 5, 'test@gmail.com', 'Adelaide Secondry');

        expect(intern.getRole()).toEqual(internValue);
    })

})