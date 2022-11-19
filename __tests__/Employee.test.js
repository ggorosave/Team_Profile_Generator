const Employee = require('../lib/Employee');

describe('Employee', () => {
    
    it('should return and object with name, id, and email properties of an employee', () => {
        const employee = new Employee('Fozzi', '347126', 'fozzibear@wakawaka.com');

        expect(employee).toEqual({ name: 'Fozzi', id: '347126', email: 'fozzibear@wakawaka.com' })
    });

    describe('Get Name', () => {

        it('shoud return the name of an employee', () => {
            const employee = new Employee('Fozzi', '347126', 'fozzibear@wakawaka.com');

            const result = employee.getName();

            expect(result).toBe('Fozzi')
        });
    });

    describe('Get ID', () => {

        it('should return the id of and employee', () => {
            const employee = new Employee('Fozzi', '347126', 'fozzibear@wakawaka.com');

            const result = employee.getId();

            expect(result).toBe('347126');
        });
    });

    describe('Get Email', () => {

        it('should return the email of and employee', () => {
            const employee = new Employee('Fozzi', '347126', 'fozzibear@wakawaka.com');

            const result = employee.getEmail();

            expect(result).toBe('fozzibear@wakawaka.com');
        });
    });

    describe('Get Role', () => {

        it('should return the role of and employee', () => {
            const employee = new Employee();

            const result = employee.getRole();
    
            expect(result).toBe('your employee');
        });
        
    });

});
