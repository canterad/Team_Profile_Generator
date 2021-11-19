///////////////////////////////////////////
// Packages needed for this application.
///////////////////////////////////////////
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

///////////////////////////////////////////
// Declared string to hold the file data.
///////////////////////////////////////////
let fileData = "";

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: ValidateCharsAllowed - This function returns true if the is only the a-z and A-Z chars,
// the numbers 0-9 and spaces, otherwise it returns a message about what is wrong.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function ValidateCharsAllowed(input)
{
  let szTemp = input.trim();

  if (szTemp.length === 0)
  {
    return "You must enter a value.";
  }
  
  let regex = /^[0-9a-zA-Z\s]*$/;
  if(szTemp.match(regex))
  {
    return true;
  }
  else
  {
    return "Only letters, numbers and spaces are allowed.";
  }  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: ValidateGitHubChars - This function returns true if the 
// input is only the a-z and A-Z chars, and the numbers 0-9, otherwise it returns a message about what 
// is wrong.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function ValidateGitHubChars(input)
{
  let szTemp = input.trim();

  if (szTemp.length === 0)
  {
    return "You must enter a value.";
  }
  
  let regex = /^[0-9a-zA-Z]*$/;
  if(szTemp.match(regex))
  {
    return true;
  }
  else
  {
    return "Only letters and numbers are allowed.";
  }  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: ValidateNumericInput - This function tests if the user entered a numeric value.  It returns
// true if the numeric values 0-9 has been entered, otherwise it returns a message about what is wrong.
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function ValidateNumericInput(input)
{
  let szTemp = input.trim();

  if (szTemp.length === 0)
  {
    return "You must enter a value.";
  }

  let regex = /^[0-9]+$/;
  if(szTemp.match(regex))
  {
      return true;
  }
  else
  {
    return "Please enter a numeric value.";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: ValidateCharInput - This function validates if only characters have been entered.  It returns
// true if the characters a-z and A-Z have been entered, otherwise it returns a message about what is
// wrong.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function ValidateCharInput(input)
{
  let szTemp = input.trim();

  if (szTemp.length === 0)
  {
    return "You must enter a value.";
  }

  let regex = /^[a-zA-Z]+$/;
  if(szTemp.match(regex))
  {
      return true;
  }
  else
  {
    return "Please enter letters only.";
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: ValidateEmail - This function validates the email address entered.  It returns true if the
// email address is formatted correctly, otherwise it returns a message about what is wrong.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function ValidateEmail(input)
{
  let szTemp = input.trim();

  if (szTemp.length === 0)
  {
    return "You must enter a value.";
  }

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (szTemp.match(regex))
  {
    return true;
  }
  else
  {
    return "Please enter a valid email address.";
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: init - This function uses the inquirer module to allow the user to enter the manager
// data and then creates the Manager class passing in the data entered.  The function AddFileHeader
// is called passing in the Manager class.  It then calls the function GetTeamMember to allow the user
// to choose the next team member that should be added.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() 
{
  let manager = null;

  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter Your First Name: ",
      validate: ValidateCharInput,
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter Your Identification Number: ",
      validate: ValidateNumericInput,
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Your Email Address: ",
      validate: ValidateEmail, 
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter Your Office Number: ",
      validate: ValidateNumericInput,  
    },
  ])
  .then(function(data)  
  {
    manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    fileData += AddFileHeader(manager); 
  
    GetTeamMember();
  });
}  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: GetTeamMember - This function allows the user to select the type of team member that 
// should be entered next.  If an Engineer or Intern were entered then the AddEngineer and AddIntern
// functions are called.  Otherwise we add the file footer data to the file buffer, write the file
// and tell the user if the file was created successfully or not.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function GetTeamMember()
{
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Select The Employee Type To Add To Your Team.  Select "Exit" To Stop The Add Team Member Operation.',
      name: 'employee_type',
      choices: ['Engineer', 'Intern', 'Exit'],
    },
  ])
  .then(function(data)  
  {
    if (data.employee_type != 'Exit')
    {
      // Call the routine to add either an engineer or intern.
      if (data.employee_type == 'Engineer')
      {
        AddEngineer();
      }
      else if (data.employee_type == 'Intern')
      {
        AddIntern();
      }
    }
    else
    {
      fileData += AddFileFooter();
      
      //Create an HTML File and write the data.
      // Call the writeFile function of the file system module.
      fs.writeFile("./dist/generated_index.html", fileData, (err) =>
      {
        // If error occurred then console log the error info.
        if (err)
        {
          console.log(err);
        } 
        // Otherwise tell the user the generated readme file was created successfully.
        else
        {
          console.log('File: ./dist/genterated_index.html, The Generated Index File Was Created Successfully!')
        } 
      });      
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AddEngineer - This function will ask the user to enter the values for the Engineer Team
// member.  It will then create an instance of the Engineer class using the data entered.  It calls
// the AddEngineerToFileData function and then calls the GetTeamMember so the user can either add
// another team member or exit the application.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddEngineer()
{
  let engineer = null;
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter The Engineer's First Name: ",
      validate: ValidateCharInput, 
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter The Engineer's Identification Number: ",
      validate: ValidateNumericInput, 
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter The Engineer's Email Address: ",
      validate: ValidateEmail, 
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: "Enter The Engineer's Git Hub Username: ",
      validate: ValidateGitHubChars, 
    },

  ])
  .then(function(data)  
  {
    engineer = new Engineer(data.name, data.id, data.email, data.githubUsername);
    fileData += AddEngineerToFileData(engineer); 

    // Call this method again to get another team member.
    GetTeamMember();        
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AddIntern - This function will ask the user to enter input values for the Intern team
// member.  It then creates an instance of the Intern class using the data entered.  It then calls the
// function AddInternToFileData.  It calls the function GetTeamMember so the user can either enter
// another member or exit the application.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddIntern()
{
  let intern = null;
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter The Intern's First Name: ",
      validate: ValidateCharInput, 
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter The Intern's Identification Number: ",
      validate: ValidateNumericInput, 
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter The Intern's Email Address: ",
      validate: ValidateEmail, 
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter The School That The Intern Is Attending: ",
      validate: ValidateCharsAllowed, 
    },
  ])
  .then(function(data)  
  {
    intern = new Intern(data.name, data.id, data.email, data.school);
    fileData += AddInternToFileData(intern); 

    // Call this method again to get another team member.
    GetTeamMember();        
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AddInternToFileData - This function will create a string that is returned that contains
// the Intern HTML data that will be added to the file.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddInternToFileData(intern)
{
  let szReturnData = `    
  <!-- Intern Member -->
  <div class="TeamMember">
    <div class="MemberHead">
      <h1 class="MemberName">${intern.getName()}</h1>
      <i class="fas fa-user-graduate MemberIcon"></i>
      <h3 class="MemberTitle">${intern.getRole()}</h3>
    </div>
    <div>
      <h4 class="MemberData1">ID: ${intern.getId()}</h4>
      <h4 class="MemberData2">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h4>
      <h4 class="MemberData2">School: ${intern.getSchool()}</h4>
    </div>                       
  </div>`;

  return(szReturnData);  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AddEngineerToFileData - This function will create a string that is returned that will contain
// the HTML data for the Engineer.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddEngineerToFileData(engineer)
{
  let szReturnData = `
  <!-- Engineer Member -->
  <div class="TeamMember">
    <div class="MemberHead">
      <h1 class="MemberName">${engineer.getName()}</h1>
      <i class="fas fa-glasses MemberIcon"></i>
      <h3 class="MemberTitle">${engineer.getRole()}</h3>
    </div>
    <div>
      <h4 class="MemberData1">ID: ${engineer.getId()}</h4>
      <h4 class="MemberData2">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
      <h4 class="MemberData2">GitHub: <a href="https://github.com/${engineer.getGitHubUsername()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHubUsername()}</a></h4>
    </div>              
  </div> `;

  return(szReturnData);    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AddFileHeader - This function will create a string that is returned that will contain the
// HTML file header info along with the Manager data.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddFileHeader(manager)
{
  let szReturnData = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />    
      <link rel="stylesheet" href="./style.css" />    
      <title>My Team</title>
  </head>
  <body>
      <!-- This is the Header Section that displays the My Team Title. -->
      <header>
          <h1>My Team</h1>
      </header>
  
           <!-- This is the team section.  It contains the team items. -->
          <section class="TeamRow">
  
              <!-- Manager Member -->
              <div class="TeamMember">
                <div class="MemberHead">
                  <h1 class="MemberName">${manager.getName()}</h1>
                  <i class="fas fa-mug-hot MemberIcon"></i>
                  <h3 class="MemberTitle">${manager.getRole()}</h3>
                </div>
                <div>
                  <h4 class="MemberData1">ID: ${manager.getId()}</h4>
                  <h4 class="MemberData2">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
                  <h4 class="MemberData2">Office number: ${manager.getOfficeNumber()}</h4>
                </div>
              </div>`;

  return(szReturnData);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function: AddFileFooter - This function will careate a string that is returned that contains the
// HTML footer data that will be added to the file.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AddFileFooter()
{
  let szReturnData = `
  </section>

</body>
</html>`;

  return(szReturnData);
}

////////////////////////////////////////////////
// Call function to initialize the application.
////////////////////////////////////////////////
init();     