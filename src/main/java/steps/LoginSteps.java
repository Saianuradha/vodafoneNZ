package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverUtil;

public class LoginSteps extends DriverUtil{
	
	@Given("^User is on My Vodafone login page$")
	public void user_is_on_My_Vodafone_login_page(){
		setupDriver();
		launchHomePage();
		getHomePage().navigateToMyVodafone();
		getMyVodafonePage().navigateToLoginPage();
	}
	@When("^user tries to login with Invalid Username and Password$")
	public void user_tries_to_login_with_Invalid_Username_and_Password() throws Throwable {
		getSignInPage().enterInvalidUsernameAndPassword();
		getSignInPage().signIn();
	}
	@When("^user tries to login with Invalid Phone number and Password$")
	public void user_tries_to_login_with_Invalid_Phone_number_and_Password(){
		getSignInPage().enterInvalidPhoneNumberAndPassword();
		getSignInPage().signIn();
	}
	@When("^user tries to login with Valid Username and Invalid Password$")
	public void user_tries_to_login_with_Valid_Username_and_Invalid_Password(){
		getSignInPage().enterValidPhoneNumberAndInvalidPassword();
		getSignInPage().signIn();
	}
	@Then("^user should get an error \"([^\"]*)\"$")
	public void user_should_get_an_error_The_password_you_ve_entered_is_incorrect(String expectedMessage){
		getSignInPage().assertError(expectedMessage);
	}
	@After
	public void tearDown(){
		exit();
	}

}
