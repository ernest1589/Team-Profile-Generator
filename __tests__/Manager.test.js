const Manager = require("../lib/Manager");
const manager = new Manager("Ernest", "1234567", "test@test.com", "123");

test("test if we can get the constructor values for the manager object", () => {
  expect(manager.name).toBe("Ernest");
  expect(manager.id).toBe("1234567");
  expect(manager.email).toBe("test@test.com");
  expect(manager.officeNumber).toBe("123");
});

test("test if we can get the name from the getName() method", () => {
  expect(manager.getName()).toBe("Ernest");
});

test("test if we can get the id from the getId() method", () => {
  expect(manager.getId()).toBe("1234567");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(manager.getEmail()).toBe("test@test.com");
});

test("test if we can get the office number from the getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("123");
});

test("test if we can get the role from the getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
