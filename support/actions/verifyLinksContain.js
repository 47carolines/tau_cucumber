import assert from "assert";
import searchResultsPage from "../../pages/SearchResults";

/**
 * Ensure link text includes keyword
 *
 * @param {Array.Object} links - Array of WebdriverIO link elements
 * @param {string} keyword - The keyword to check for in the link text
 */

export default (links, keyword) => {
    searchResultsPage.searchResultLinks.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link text does not include ${keyword}`
      );
    }
  });
};
