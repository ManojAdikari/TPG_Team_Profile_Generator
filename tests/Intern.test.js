
const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Correctly displays a new Intern', () => {
        const intern = new Intern ();
        expect(typeof(intern)).toBe("object");
    });
});

describe("getSchool", () => {
    it("Displays Interns School", () => {
        const school = "UniSA";
        const intern = new Intern("manoj", 1, "manoj@gmailmail.com", school);
        expect(intern.getSchool()).toBe(school);
    });
});

describe("getRole", () => {
    it("Displays Interns Role", () => {
        const role = "Intern";
        const intern = new Intern("manoj", 1, "manoj@gmailmail.com", "UniSA");
        expect(intern.getRole()).toBe(role);
    });
});