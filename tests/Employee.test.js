//--------------------Const for Emplayee File:
const Employee = require('../lib/Employee');

//Initializing "Employee":
describe('Employee', () => {
    it('Correctly displays a new Employee', () => {
        const emp = new Employee ();
        expect(typeof(emp)).toBe("object");
    });
});
//Test  name:
describe("getName", () => {
    it(" Displays Employee name", () => {
        const Name = "Manoj";
        const emp = new Employee(Name);
        expect(emp.getName()).toBe(Name);
    });
});
//Test  ID:
describe('getId', () => {
    it('Displays Employee ID', () => {
        const id = 1;
        const emp = new Employee("Manoj", id);
        expect(emp.getId()).toBe(id);
    });
});
//Test  email:
describe('getEmail', () => {
    it('Displays Employee email', () => {
        const email = "manojadee@gmail.com";
        const emp = new Employee("Manoj", 1, email);
        expect(emp.getEmail()).toBe(email);
    });
});
//Test Role:
describe('getRole', () => {
    it('Displays Employee Role', () => {
        const role = "Employee";
        const emp = new Employee("Manoj", 1, "manojadee@gmail.com");
        expect(emp.getRole()).toBe(role);
    });
});