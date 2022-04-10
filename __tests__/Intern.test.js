const Intern = require("../lib/Intern");
const intern = new Intern("Ernest", "1234567", "test@test.com", "ITESM");

test("test if we can get the constructor values for the engineer object", () => {
  expect(intern.name).toBe("Ernest");
  expect(intern.id).toBe("1234567");
  expect(intern.email).toBe("test@test.com");
  expect(intern.school).toBe("ITESM");
});

test("test if we can get the name from the getName() method", () => {
  expect(intern.getName()).toBe("Ernest");
});

test("test if we can get the id from the getId() method", () => {
  expect(intern.getId()).toBe("1234567");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(intern.getEmail()).toBe("test@test.com");
});

test("test if we can get the school name from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("ITESM");
});

test("test if we can get the role from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
