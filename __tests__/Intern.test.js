const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("create Intern object", () => {
    const intern = new Intern("Sam", "sam@gmail.com", 4, "Potsdam");

    expect(intern.name).toBe("Sam");
    expect(intern.id).toEqual(4);
    expect(intern.email).toBe("sam@gmail.com");
    expect(intern.school).toBe("Potsdam");
})

test('create an intern object and verify getName(), getId(), getEmail(), getRole() and getSchool() return correctly', () => {
    const internTwo = new Intern("Bill", "bill@gmail.com", 3, "Georgetown");

    expect(internTwo.getName()).toBe('Bill');
    expect(internTwo.getId()).toEqual(3);
    expect(internTwo.getEmail()).toBe('bill@gmail.com');
    expect(internTwo.getRole()).toBe("Intern");
    expect(internTwo.getSchool()).toBe("Georgetown");

})