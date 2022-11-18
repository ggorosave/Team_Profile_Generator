const Intern = require('../lib/Intern');

describe('Intern', () => {
    
    it('should return an object with the name, id, email, and github of and engineer', () => {
        const intern = new Intern('Gonzo', '133539', 'gonzo@ilovechickens.com', 'University of Jim Henson');

        expect(intern).toEqual({ name: 'Gonzo', id: '133539', email: 'gonzo@ilovechickens.com', school: 'University of Jim Henson' })
    });

    describe('Get School', () => {
    
        it('should return the school of the intern', () => {
            const intern = new Intern('Gonzo', '133539', 'gonzo@ilovechickens.com', 'University of Jim Henson');
            const result = intern.getSchool();

            expect(result).toBe('University of Jim Henson')
        });
    })

    describe('Get Role', () => {
    
        it('should overwrite the employee role and return "Intern"', () => {
            const intern = new Intern();
            const result = intern.getRole();

            expect(result).toBe('Intern');
        });
    })
})