import { When } from "@wdio/cucumber-framework";
import googleSearch from "../../support/actions/search";

When(/^the user enters "(.*)" into the search bar$/, (keyword) => {
    googleSearch(keyword);
});
