# Sample App

To run this app:
- npm install
* npm start

## Requirements

The goal is to create a new application that will work exactly as this application.

The idea is to split the code into a main application that communicates with secondary modules. 
Those secondary modules will contain specific functionalities.

You should create a public github project for this new application.

### Create main application
Create a repository that will contain the structure of our main application

![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/c9c1595a-e995-4549-b3eb-9bc55c7657fb)

In this main app, the AllRoutes.js file should import the contents of each dependent modules.

### Create repository for each module
Create a repository for each module. Each new module corresponds to the existing internal module in the current apllication.

Based on the structure of our application, five repositories should be created:

- Module1
* Module2
+ Module3
- CommonModule1
* CommonModule2

The import of each module must be done in the AllRoutes.js file. 

![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/9ed280ad-6e09-40af-890f-e6971ac58b62)


Each module will have the possibility to be developed individually. But must be able to access the information from other modules such as Context Repository, Data Repository, etc.

Each module's repository must be able to be distribuited as an independent npm package.

### Create module for data related functions - Data Repository
Create a repository for api connection functions.
The functionalities inside this repository must be able to be used in any of the repositories.

![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/2b55048c-6d2c-492a-b4ba-4a6447b08c86)


### Create module for helper functions 
Create a repository for helper functions.
The functionalities inside this repository must be able to be used in any of the repositories.

![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/ebbc79fc-f51c-4764-a46a-c6765d5e20f4)


### Create module to store AppContext -  Context Repository
Create a repository to store AppContext.
The functionalities inside this repository must be able to be used in any of the repositories.

![image](https://github.com/carolinaverissimoreis/sample-app/assets/140642257/0e538e3c-297a-4172-b5da-20bd58ca4e63)


### Communication between modules
Ensure that each module can acess information from any other.
