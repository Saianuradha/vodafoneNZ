package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MyVodafonePage {
	
	@FindBy(xpath = "//*[@id='module1']/div/div[2]/div/div[2]/div/div/p[1]/a[2]")
	private WebElement login;
	
	public void navigateToLoginPage(){
		login.click();
	}
}
