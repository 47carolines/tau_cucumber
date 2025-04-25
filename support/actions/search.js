import homePage from "../../pages/Home";

/**
 * Search for a keyword
 * 
 * @param {string} keyword - The keyword to search for
 * @param {object} inputField - WebdriverIO input field
 * @param {object} submitButton - WebdriverIO submit button
 */

export default keyword => {
    homePage.search(keyword);
};