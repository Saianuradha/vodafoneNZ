#vodafoneNZ

Framework being developed to perform testing of Vodafone NZ website and can also be extended to perform Behaviour Driven Development while adding new functionalities to the website.

#Repository

This repository consists of the framework with a feature file to test the login functionality of Vodafone NewZealand website. Login.feature file is written in Gherkin language and placed in the ‘feature' folder. Report will be generated in target/Destination folder as index.html file after running the tests.

Project structure:
- drivers folder
    * chromedriver.exe
- feature folder
    - Login.feature
- src folder
    - main/java folder
        -  pages
          * HomePage.java
          * MyVodafonePage.java
          * SignInPage.java
        -  steps
          * LoginSteps.java
        -  utils
          * DriverUtil.java
          * Utilities.java   
    - test/java folder
        - runner
          * TestRunner.java
- target folder
    - Destination
          * formatter.js
          * index.html
          * jquery-1.8.2.min.js
          * report.js
          * style.css
- pom.xml 

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

- Run the project as Maven test (Right click on pom.xml and Run as men clean test).
- Report can be viewed by accessing the index.html file (Path: target/Destination/index.html).
