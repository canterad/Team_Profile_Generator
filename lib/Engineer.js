const Employee = require('./Employee');

class Engineer extends Employee 
{
  constructor(name, id, email, githubUsername) 
  {
      // Call the extended super class Employee and pass in the values passed in.
      super(name, id, email); 
        
      // Declare and set property values.
      this.githubUsername = githubUsername;
      this.role = "Engineer";
  }

  // getRole prototype function.
  getRole()
  {
      return(this.role);
  }
  
  getGitHubUsername()
  {
      return(this.githubUsername);
  }
}

module.exports = Engineer;