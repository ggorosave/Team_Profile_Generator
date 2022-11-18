const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    
    it('should return an object with the name, id, email, and github of and engineer', () => {
        const engineer = new Engineer('Kermit', '612332', 'kermit@thefrog.com', 'banjo_magic');

        expect(engineer).toEqual({ name: 'Kermit', id: '612332', email: 'kermit@thefrog.com', github: 'banjo_magic' })
    });

    describe('Get Github', () => {
    
        it('should return the github id of the engineer', () => {
            const engineer = new Engineer('Kermit', '612332', 'kermit@thefrog.com', 'banjo_magic');

            const result = engineer.getGithub();
    
            expect(result).toBe('banjo_magic')
        });
    })

    describe('Get Role', () => {
    
        it('should overwrite the employee role and return "Engineer"', () => {
            const engineer = new Engineer();

            const result = engineer.getRole();
    
            expect(result).toBe('Engineer')
        });
    })
})