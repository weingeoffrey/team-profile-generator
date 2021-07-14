const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test("create an engineer object", () => {
    const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobbobbers");

    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe("bob@gmail.com");
    expect(engineer.github).toBe("bobbobbers");
})