import { When } from "@wdio/cucumber-framework";
import search from "../../support/actions/search";

When(/^the user searches for "(.*)"$/, keyword => {
  search(keyword);
});