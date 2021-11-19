const Manager = require('../lib/Manager.js');

describe("Manager Class", () =>
{
    it("Should return an object containing a 'string' data type for the 'name' property.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(typeof obj.name).toEqual("string");
    });

    it("Should return an object containing a 'number' data type for the 'id' property.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(typeof obj.id).toEqual("number");
    });
    
    it("Should return an object containing a 'string' data type for the 'email' property.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(typeof obj.email).toEqual("string");
    });   
    
    it("Should return an object containing a 'number' data type for the 'officeNumber' property.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(typeof obj.officeNumber).toEqual("number");
    });

    it("The getRole prototype should return the string 'Manager'.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(obj.getRole()).toBe("Manager");
    });

    it("The getName prototype should return the string 'Duane'.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(obj.getName()).toBe("Duane");
    });    

    it("The getId prototype should return the number 1.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(obj.getId()).toBe(1);
    }); 
    
    it("The getEmail prototype should return the string 'duane.cantera@comcast.net'.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(obj.getEmail()).toBe("duane.cantera@comcast.net");
    });
    
    it("The getOfficeNumber prototype should return the number 1", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(obj.getOfficeNumber()).toBe(1);
    });    

    it("Test if Manager Class exists.", () =>
    {
        const obj = new Manager("Duane", 1, "duane.cantera@comcast.net", 1);
        expect(obj instanceof Manager).toBeTruthy();
    });          
});