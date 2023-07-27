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
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/f457caa8-1ac3-40c4-a1ab-030b5b68464b)

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
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/4d2e7325-80af-4eb7-978c-0aa8f1b452db)

Each module will have the possibility to be developed individually. But must be able to access the main repository's AppContext.

We would like each module's repository to act in a similar way to an npm package. 
So that with each commit to the module's repository, through a command similar to npm install, we could update our main application hosted in the main repository.

### Create repository for data related functions 
Create a repository for api connection functions.
The functionalities inside this repository must be able to be used in any of the repositories.
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/edd3514c-181e-415f-93e4-33eb81ef3fee)

### Create repository for helper functions 
Create a repository for helper functions.
The functionalities inside this repository must be able to be used in any of the repositories.
![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/84e1e97c-f42a-4516-8f62-2c28aab943e8)


### Communication with main repository
Ensure that each module's repository:
- can access the AppContext present in the main repository;
