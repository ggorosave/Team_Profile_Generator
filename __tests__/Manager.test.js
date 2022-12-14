const Manager = require('../lib/Manager');

describe('Manager', () => {

    it('should return an object with a managers name, id, email, and office number', () => {
        const manager = new Manager('Ms Piggy', '347658', 'ms.piggy@bosslady.com', '80');

        expect(manager).toEqual({ name:'Ms Piggy', id: '347658', email: 'ms.piggy@bosslady.com', officeNumber: '80', role: 'Manager' });
    });

    describe('Get Office Number', () => {

        it('should return the office number of the manager', () => {
            const manager = new Manager('Ms Piggy', '347658', 'ms.piggy@bosslady.com', '80');

            const result = manager.getOfficeNumber();

            expect(result).toBe('80');            
        });
    });

    describe('Get Role', () => {

        it('should overwrite the employee role and return "manager"', () => {
            const manager = new Manager('Ms Piggy', '347658', 'ms.piggy@bosslady.com', '80');

            const result = manager.getRole();

            expect(result).toBe('Manager');            
        });
    });

});