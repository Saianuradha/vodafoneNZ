Feature: Login Functionality
	
Scenario Outline:
Given User is on My Vodafone login page
When user tries to login with <username> and <password>
Then user should get an error "<message>"

Examples:
|username|password|message|
|Invalid Username|Password|Your email address is not registered for My Vodafone.|
|Invalid Phone number|Password|Your mobile number is not registered for My Vodafone.|
|Valid Username|Invalid Password|The password you've entered is incorrect.|
