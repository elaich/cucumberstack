var webdriver = require('selenium-webdriver');
var chai = require('chai');
var By = webdriver.By;
var until = webdriver.until;

var used_browser = process.env.BROWSER || 'phantomjs'

function World() {
    this.expect = chai.expect;
    this.browser = new webdriver.Builder()
        .forBrowser(used_browser)
        .build();
    this.By = By;
}

module.exports = function() {
    this.World = World;
};
