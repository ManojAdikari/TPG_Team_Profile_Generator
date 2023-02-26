
const Manager = require('../lib/Manager');


describe('Manager', () => {
    describe("Initialization", () => {
    it('Displays a new Manager', () => {
        const manager = new Manager ();
        expect(typeof(manager)).toBe("object");
    });
});

describe("get_Office_Number", () => {
    it("Displays Office Number", () => {
        const officeNumber = 123;
        const manager = new Manager("manoj", 1, "manoj@gmail.com", officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
});

describe("getRole", () => {
    it("Displays Role", () => {
        const role = "Manager";
        const manager = new Manager("manoj", 1, "manoj@gmail.com", 123);
        expect(manager.getRole()).toBe(role);
    });
});
});