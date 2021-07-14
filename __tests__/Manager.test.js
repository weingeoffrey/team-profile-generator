const Manager = require("../lib/Manager");

test("create manager object", () => {
    const manager = new Manager("Sam", "sam@gmail.com", 4, 1);

    expect(manager.name).toBe("Sam");
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe("sam@gmail.com");
    expect(manager.officeNumber).toEqual(1);
})

test('create an manager object and verify getName(), getId(), getEmail(), getRole() and getSchool() return correctly', () => {
    const managerTwo = new Manager("Bill", "bill@gmail.com", 3, 2);

    expect(managerTwo.getName()).toBe('Bill');
    expect(managerTwo.getId()).toEqual(3);
    expect(managerTwo.getEmail()).toBe('bill@gmail.com');
    expect(managerTwo.getRole()).toBe("Manager");

})