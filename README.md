# Sample App

To run this app:
- npm install
* npm start

## Requirements

The goal is to create an application that will work exactly the same as the application in this repository, the sample-app.

The idea is to split the code into a main repository that communicates with secondary repositories. These secondary repositories contain the code for each module.

You should create a public github project for this application.

### Create main repository
Create a repository that will contain the main structure of our application
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/a61948f9-4130-4bdc-b890-4738651885ce)


In this main repository, the AllRoutes.js file should import the contents of each module's repository.

### Create repository for each module
Create a repository to contain the code of each module, removing the code from the main repository.

Based on the structure of our application, five repositories should be created:

- Module1
* Module2
+ Module3
- CommonModule1
* CommonModule2

The import of each module must be done in the AllRoutes.js file.
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/9ed280ad-6e09-40af-890f-e6971ac58b62)


Each module will have the possibility to be developed individually. But must be able to access the main repository's AppContext.

We would like each module's repository to act in a similar way to an npm package. 
So that with each commit to the module's repository, through a command similar to npm install, we could update our main application hosted in the main repository.

### Create repository for data related functions 
Create a repository for api connection functions.
The functionalities inside this repository must be able to be used in any of the repositories.
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/2b55048c-6d2c-492a-b4ba-4a6447b08c86)


### Create repository for helper functions 
Create a repository for helper functions.
The functionalities inside this repository must be able to be used in any of the repositories.
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/ebbc79fc-f51c-4764-a46a-c6765d5e20f4)


### Communication with main repository
Ensure that each module's repository:
- can access the AppContext present in the main repository;
