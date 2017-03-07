#vodafoneNZ

Framework being developed to perform testing of Vodafone NZ website and can also be extended to perform Behaviour Driven Development while adding new functionalities to the website.

#Repository

This repository consists of the framework with a feature file to test the login functionality of Vodafone NewZealand website. Login.feature file is written in Gherkin language and placed in the ‘feature' folder. Report will be generated in target/Destination folder as index.html file after running the tests.

Project structure:

![alt tag](https://cloud.githubusercontent.com/assets/26199027/23644738/a6b6e7ca-036d-11e7-8210-cff22567cd2e.png)

Tools and practices used while developing framework:
- Editor: Eclipse IDE
- Programming Language: Java
- Process/Methodologies: Behaviour Driven Development, Page Object Model, Page Factory
- Framework: Cucumber
- APIs: Selenium WebDriver
- Project Management Tool: Maven

#Prerequisite

- Java 1.7+ installed
- Eclipse IDE installed
- Selenium WebDriver configured with Eclipse 
- Maven installed

#Running Tests and Report accessing

- Run the project as Maven test (Right click on pom.xml and Run as Maven test).

![alt tag](https://cloud.githubusercontent.com/assets/26199027/23644386/fdb12b14-036b-11e7-9c14-cb49bcfe9357.png)
- Report can be viewed by accessing the index.html file (Path: target/Destination/index.html). By opening index.html file with browser, you will get a formatted web page with test report like below.

![alt tag](https://cloud.githubusercontent.com/assets/26199027/23644385/fdb1166a-036b-11e7-8a40-fa2dc8a67b09.png)
