const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Ernest",
  "1234567",
  "test@test.com",
  "ernest1589"
);

test("test if we can get the constructor values for the engineer object", () => {
  expect(engineer.name).toBe("Ernest");
  expect(engineer.id).toBe("1234567");
  expect(engineer.email).toBe("test@test.com");
  expect(engineer.githubUsername).toBe("ernest1589");
});

test("test if we can get the name from the getName() method", () => {
  expect(engineer.getName()).toBe("Ernest");
});

test("test if we can get the id from the getId() method", () => {
  expect(engineer.getId()).toBe("1234567");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(engineer.getEmail()).toBe("test@test.com");
});

test("test if we can get the github username from the getGithub() method", () => {
  expect(engineer.getGithub()).toBe("ernest1589");
});

test("test if we can get the role from the getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
