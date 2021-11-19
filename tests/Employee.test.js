const Employee = require('../lib/Employee.js');

describe("Employee Class", () =>
{
    it("Should return an object containing a 'string' data type for the 'name' property.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(typeof obj.name).toEqual("string");
    });

    it("Should return an object containing a 'number' data type for the 'id' property.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(typeof obj.id).toEqual("number");
    });
    
    it("Should return an object containing a 'string' data type for the 'email' property.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(typeof obj.email).toEqual("string");
    });   
    
    it("The getRole prototype should return the string 'Employee'.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(obj.getRole()).toBe("Employee");
    });

    it("The getName prototype should return the string 'Duane'.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(obj.getName()).toBe("Duane");
    });    

    it("The getId prototype should return the number 1.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(obj.getId()).toBe(1);
    }); 
    
    it("The getEmail prototype should return the string 'duane.cantera@comcast.net'.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(obj.getEmail()).toBe("duane.cantera@comcast.net");
    }); 
    
    it("Test if Employee Class exists.", () =>
    {
        const obj = new Employee("Duane", 1, "duane.cantera@comcast.net");
        expect(obj instanceof Employee).toBeTruthy();
    });          
});