package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import pages.HomePage;
import pages.MyVodafonePage;
import pages.SignInPage;

public class DriverUtil {
	private WebDriver driver;
	private HomePage homePage;
	private MyVodafonePage myVodafonePage;
	private SignInPage signInPage;
	public WebDriver setupDriver(){
		initDriver(Utilities.getConfigValue("browser"));
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Long.parseLong(Utilities.getConfigValue("loadingTime")), TimeUnit.SECONDS);
		
		homePage = PageFactory.initElements(driver, HomePage.class);
		myVodafonePage = PageFactory.initElements(driver, MyVodafonePage.class);
		signInPage = PageFactory.initElements(driver,  SignInPage.class);
		return driver;
	}
	private void initDriver(String browserType){
		if(driver == null){
			switch(browserType){
			case "chrome":
				String exePath = System.getProperty("user.dir") + "\\drivers\\chromedriver.exe";
				System.setProperty("webdriver.chrome.driver", exePath);
				driver = new ChromeDriver();
				break;
			default:
				driver = new ChromeDriver();
			}
		}
	}
	public void exit(){
		driver.quit();
	}
	public void launchHomePage(){
		driver.get(Utilities.getConfigValue("vodafoneUrl"));
	}
	public HomePage getHomePage() {
		return homePage;
	}
	public MyVodafonePage getMyVodafonePage() {
		return myVodafonePage;
	}
	public SignInPage getSignInPage() {
		return signInPage;
	}
	
}
