
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Displays a new Engineer', () => {
        const engineer = new Engineer ();
        expect(typeof(engineer)).toBe("object");
    });
});

describe("getGithub", () => {
    it("Displays Engineers GitHub Username", () => {
        const gitHub = "github.com/manoj";
        const engineer = new Engineer("manoj", 1, "manoj@email.com", gitHub);
        expect(engineer.getGithub()).toBe(gitHub);
    });
});

describe("getRole", () => {
    it("Displays Engineers Role", () => {
        const role = "Engineer";
        const engineer = new Engineer("manoj", 1, "manoj@email.com", "github.com/manoj");
        expect(engineer.getRole()).toBe(role);
    });
});