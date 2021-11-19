class Employee 
{
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email) 
  {
      // Declare and set property values to the values passed in.
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
  }
  
  // getName method - Returns the name property value.
  getName()
  {
    return(this.name);
  }

  // getId method - Returns the id property value.
  getId()
  {
      return(this.id);
  }

  // getEmail method - Returns the email property value.
  getEmail()
  {
      return(this.email);
  }

  getRole()
  {
      return(this.role);
  }
}

module.exports = Employee;