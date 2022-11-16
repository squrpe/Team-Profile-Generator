const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should set constructor properties', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';
        const github = 'squrpe';

        const engineer = new Engineer('lara', 5, 'test@gmail.com', 'squrpe');

        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.github).toEqual(github);
    })

    it ('should use the get method and return correct data', () => {
        const name = 'lara';
        const id = 5;
        const email = 'test@gmail.com';
        const github = 'squrpe';

        const engineer = new Engineer('lara', 5, 'test@gmail.com', 'squrpe');

        expect(engineer.getName()).toEqual(name);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
        expect(engineer.getGithub()).toEqual(github);
    })

    it ('should return correct role from getRole() method', () => {
        const engineerValue = 'Engineer';

        const engineer = new Engineer('lara', 5, 'test@gmail.com', 'squrpe');

        expect(engineer.getRole()).toEqual(engineerValue);
    })

})