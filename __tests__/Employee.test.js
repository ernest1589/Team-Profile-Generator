const Employee = require("../lib/Employee");
describe("Employee methods", () => {
  it("should return the name of the employee", () => {
    const name = "Ernest";
    const employee = new Employee(name);

    test = employee.getName();

    expect(test).toEqual("Ernest");
  });
  it("should return the id of the employee", () => {
    const name = "Ernest";
    const id = 1;
    const employee = new Employee(name, id);

    test = employee.getId();

    expect(test).toEqual(1);
  });
  it("should return the email of the employee", () => {
    const name = "Ernest";
    const id = 1;
    const email = "test@test.com";
    const employee = new Employee(name, id, email);

    test = employee.getEmail();

    expect(test).toEqual("test@test.com");
  });
  it("should return the name of the class", () => {
    const employee = new Employee();

    test = employee.getRole();

    expect(test).toEqual("Employee");
  });
});
