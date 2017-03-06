package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage {
	
	@FindBy(xpath = "//*[@id='menu']/li[6]/a")
	private WebElement myVodafoneMenuItem;
	
	public void navigateToMyVodafone(){
		myVodafoneMenuItem.click();
	}
}
