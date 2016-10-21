
module.exports = function() {
    this.After(function (scenario) {
        // Assuming this.driver is a selenium webdriver
        return this.browser.quit();
    });
};
