# Team Profile Generator
This repository was created for the Homework Assignment dealing with Object-Oriented Programming.<br><br>

Developer: Duane Cantera<br>
Date: Nov. 20, 2021<br>
Assignment: #10 - Object-Oriented Programming - Team Profile Generator<br><br>

I created two Screencastify recordings because there is a time limit of 5 minutes and it took me longer than 5 minutes to input all of my team members, to run the npm test operation and to test the input entered.
These recordings are stored up on google drive and they are shared and the links to these recordings are listed below.

The file created by the application is called: "generated_index.html"  
Located in the "dist" folder.<br><br>


### DESIGN INFORMATION:

The inquirer package was used to ask the user questions and to get the response entered in the console.  The file system module of NODEJS is used to create the HTML file by calling the function writeFile.

The test system Jest was used for unit test development.  I wrote test cases for all of the classes that
were created.  An Employee, Engineer, Intern and Manager.

When the user input is entered I am validating what is entered:<br>
**First Name** - Only the Characters a-z and A-Z are allowed.<br>
**id** - Only the numbers 0-9 are allowed.<br>
**email** - Only an email formatted correctly is allowed.<br>
**Office Number** - Only the numbers 0-9 are allowed.<br>
**GitHub Username** - Only the numbers 0-9, the characters a-z and A-Z are allowed.<br>
**School** - Only the numbers 0-9, the charaters a-z and A-Z and spaces allowed.<br><br>

The flow logic of the code is diagramed below:

<img src="images/CodeFlowLogic.jpg" height="400">

The Manager is entered and then selects a team member and they are added.  It loops back to the team member selection until the "Exit" option is selected, then the file is written and the program exits.<br><br>

### LINKS:

Git Hub Link To Code For Project:<br> 
https://github.com/canterad/Team_Profile_Generator.git

Links to Screencastify recordings on Google Drive:<br>
https://drive.google.com/file/d/1lKy768L_Nv2VyyzGVOEjwhgUTUplu8R7/view?usp=sharing<br>
https://drive.google.com/file/d/1jyucNhmVG2E1POM7kv4o9Ca5-SMGXWnA/view?usp=sharing

