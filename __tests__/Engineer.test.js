const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test("create an engineer object", () => {
    const engineer = new Engineer("Bob", "bob@gmail.com", 1, "bobbobbers");

    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe("bob@gmail.com");
    expect(engineer.github).toBe("bobbobbers");
})

test('create an engineer object and verify getName(), getId(), getEmail() and getRole() return correctly', () => {
    const engineerTwo = new Engineer("Bill", "bill@gmail.com", 3);

    expect(engineerTwo.getName()).toBe('Bill');
    expect(engineerTwo.getId()).toEqual(3);
    expect(engineerTwo.getEmail()).toBe('bill@gmail.com');
    expect(engineerTwo.getRole()).toBe("Engineer");
})