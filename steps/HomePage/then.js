import { Then } from "@wdio/cucumber-framework";
import verifyLinksContain from "../../support/actions/verifyLinksContain";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
  verifyLinksContain(keyword);
});
