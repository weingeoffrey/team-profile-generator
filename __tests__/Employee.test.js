const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee("Dave", 1, "dave@gmail.com");

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe("dave@gmail.com");
});

test('creates a second employee object', () => {
    const employeeTwo = new Employee("Greg", 2, "greg@gmail.com");

    expect(employeeTwo.name).toBe('Greg');
    expect(employeeTwo.email).toBe("greg@gmail.com");
    expect(employeeTwo.id).toEqual(2);
});

test('create an employee object and verify getName(), getId(), getEmail() and getRole() return correctly', () => {
    const employeeThree = new Employee("Bill", 3, "bill@gmail.com");

    expect(employeeThree.getName()).toBe('Bill');
    expect(employeeThree.getId()).toEqual(3);
    expect(employeeThree.getEmail()).toBe('bill@gmail.com');
    expect(employeeThree.getRole()).toBe("Employee");
})