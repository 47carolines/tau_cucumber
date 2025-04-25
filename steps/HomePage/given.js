import { Given } from "@wdio/cucumber-framework";
import goToURL from "../../support/actions/goToURL";
import homePage from "../../pages/Home";

Given("a web browser is at the Google home page", () => {
  goToURL(homePage.url);
});
