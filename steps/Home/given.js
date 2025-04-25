import { Given } from "@wdio/cucumber-framework";
import goToPage from "../../support/actions/goToPage";

Given(/^the browser is at the "(Home)" page$/, page => {
  goToPage(page);
});