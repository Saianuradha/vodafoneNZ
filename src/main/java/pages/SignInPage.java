package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import static org.junit.Assert.assertTrue;
public class SignInPage {
	
	@FindBy(id = "myvfLoginOnlineId")
	private WebElement userName;
	
	@FindBy(id = "myvfLoginPassword")
	private WebElement password;
	
	@FindBy(id = "sign-in-button")
	private WebElement signIn;
	
	@FindBy(xpath = "//*[@id='loginHandler']/label")
	private WebElement errorMessage;
	
	public void enterInvalidUsernameAndPassword(){
		userName.sendKeys("vodafone");
		password.sendKeys("password");
	}
	public void enterInvalidPhoneNumberAndPassword(){
		userName.sendKeys("1234567");
		password.sendKeys("password");
	}
	public void enterValidPhoneNumberAndInvalidPassword(){
		userName.sendKeys("02102323457");
		password.sendKeys("password");
	}
	public void signIn(){
		signIn.click();	
	}
	public void assertError(String errorMessageExpected){
		assertTrue("Error Message", errorMessageExpected.matches(errorMessage.getText()));
	}
}
 