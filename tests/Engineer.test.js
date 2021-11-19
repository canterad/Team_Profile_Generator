const Engineer = require('../lib/Engineer.js');

describe("Engineer Class", () =>
{
    it("Should return an object containing a 'string' data type for the 'name' property.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(typeof obj.name).toEqual("string");
    });

    it("Should return an object containing a 'number' data type for the 'id' property.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(typeof obj.id).toEqual("number");
    });
    
    it("Should return an object containing a 'string' data type for the 'email' property.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(typeof obj.email).toEqual("string");
    });   
    
    it("Should return an object containing a 'string' data type for the 'githubUsername' property.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(typeof obj.githubUsername).toEqual("string");
    });

    it("The getRole prototype should return the string 'Engineer'.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(obj.getRole()).toBe("Engineer");
    });

    it("The getName prototype should return the string 'Duane'.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(obj.getName()).toBe("Duane");
    });    

    it("The getId prototype should return the number 1.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(obj.getId()).toBe(1);
    }); 
    
    it("The getEmail prototype should return the string 'duane.cantera@comcast.net'.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(obj.getEmail()).toBe("duane.cantera@comcast.net");
    });
    
    it("The getGitHubUsername prototype should return the string 'canterad'.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(obj.getGitHubUsername()).toBe("canterad");
    });    

    it("Test if Engineer Class exists.", () =>
    {
        const obj = new Engineer("Duane", 1, "duane.cantera@comcast.net", "canterad");
        expect(obj instanceof Engineer).toBeTruthy();
    });          
});