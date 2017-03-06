package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@CucumberOptions(
		features = "feature"
		,glue={"steps"}
		,plugin = {"pretty", "html:target/Destination"}
		)
@RunWith(Cucumber.class)
public class TestRunner {

}
