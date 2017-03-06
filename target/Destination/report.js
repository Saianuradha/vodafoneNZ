$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "login-functionality;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on My Vodafone login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user tries to login with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should get an error \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-functionality;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 9,
      "id": "login-functionality;;;1"
    },
    {
      "cells": [
        "Invalid Username",
        "Password",
        "Your email address is not registered for My Vodafone."
      ],
      "line": 10,
      "id": "login-functionality;;;2"
    },
    {
      "cells": [
        "Invalid Phone number",
        "Password",
        "Your mobile number is not registered for My Vodafone."
      ],
      "line": 11,
      "id": "login-functionality;;;3"
    },
    {
      "cells": [
        "Valid Username",
        "Invalid Password",
        "The password you\u0027ve entered is incorrect."
      ],
      "line": 12,
      "id": "login-functionality;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-functionality;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on My Vodafone login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user tries to login with Invalid Username and Password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should get an error \"Your email address is not registered for My Vodafone.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_My_Vodafone_login_page()"
});
formatter.result({
  "duration": 24907889454,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_tries_to_login_with_Invalid_Username_and_Password()"
});
formatter.result({
  "duration": 4277275897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your email address is not registered for My Vodafone.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.user_should_get_an_error_The_password_you_ve_entered_is_incorrect(String)"
});
formatter.result({
  "duration": 510935354,
  "status": "passed"
});
formatter.after({
  "duration": 2365106485,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-functionality;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on My Vodafone login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user tries to login with Invalid Phone number and Password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should get an error \"Your mobile number is not registered for My Vodafone.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_My_Vodafone_login_page()"
});
formatter.result({
  "duration": 15454792386,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_tries_to_login_with_Invalid_Phone_number_and_Password()"
});
formatter.result({
  "duration": 3168120990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your mobile number is not registered for My Vodafone.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.user_should_get_an_error_The_password_you_ve_entered_is_incorrect(String)"
});
formatter.result({
  "duration": 1155714005,
  "status": "passed"
});
formatter.after({
  "duration": 1494142756,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-functionality;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on My Vodafone login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user tries to login with Valid Username and Invalid Password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should get an error \"The password you\u0027ve entered is incorrect.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_My_Vodafone_login_page()"
});
formatter.result({
  "duration": 16122448191,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_tries_to_login_with_Valid_Username_and_Invalid_Password()"
});
formatter.result({
  "duration": 4266604078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The password you\u0027ve entered is incorrect.",
      "offset": 26
    }
  ],
  "location": "LoginSteps.user_should_get_an_error_The_password_you_ve_entered_is_incorrect(String)"
});
formatter.result({
  "duration": 816152023,
  "status": "passed"
});
formatter.after({
  "duration": 1535521108,
  "status": "passed"
});
});