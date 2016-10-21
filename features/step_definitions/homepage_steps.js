module.exports = function() {
    this.When(/^I am on the home page$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var self = this;
        this.browser.get('http://localhost:3000')
        this.browser.getCurrentUrl().then(function(url) {
            self.expect(url).to.equal('http://localhost:3000/');
            callback();
        });
    });

    this.Then(/^I should see a home page title$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var self = this;
        var title = this.browser.findElement({css: '#banner h1'});
        title.getText().then(function(text) {
            self.expect(text).to.equal("'Allo, 'Allo!");
            callback();
        });
    });
}
