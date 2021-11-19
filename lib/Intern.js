const Employee = require('./Employee');

class Intern extends Employee 
{
  constructor(name, id, email, school) 
  {
    // Call the extended super class Employee and pass in the values passed in.
    super(name, id, email);

    this.school = school;
    this.role = "Intern";
  }

  getRole()
  {
      return(this.role);
  }

  getSchool()
  {
      return(this.school);
  }
}

module.exports = Intern;