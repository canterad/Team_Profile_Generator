const Intern = require('../lib/Intern.js');

describe("Intern Class", () =>
{
    it("Should return an object containing a 'string' data type for the 'name' property.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(typeof obj.name).toEqual("string");
    });

    it("Should return an object containing a 'number' data type for the 'id' property.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(typeof obj.id).toEqual("number");
    });
    
    it("Should return an object containing a 'string' data type for the 'email' property.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(typeof obj.email).toEqual("string");
    });   
    
    it("Should return an object containing a 'string' data type for the 'school' property.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(typeof obj.school).toEqual("string");
    });

    it("The getRole prototype should return the string 'Manager'.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(obj.getRole()).toBe("Intern");
    });

    it("The getName prototype should return the string 'Duane'.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(obj.getName()).toBe("Duane");
    });    

    it("The getId prototype should return the number 1.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(obj.getId()).toBe(1);
    }); 
    
    it("The getEmail prototype should return the string 'duane.cantera@comcast.net'.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(obj.getEmail()).toBe("duane.cantera@comcast.net");
    });
    
    it("The getSchool prototype should return the string 'Boston College'.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(obj.getSchool()).toBe("Boston College");
    });    

    it("Test if Intern Class exists.", () =>
    {
        const obj = new Intern("Duane", 1, "duane.cantera@comcast.net", "Boston College");
        expect(obj instanceof Intern).toBeTruthy();
    });          
});