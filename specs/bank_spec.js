var Bank = require('../bank');
var assert = require('assert');
var Account = require('../account');

var bank = new Bank;
var ross = new Account("Ross Loggie", "Current", 20000);
var kyle = new Account("Kyle G.", "Business", 20);

describe ("Bank", function() {

  it("should push account to array",function() {
    bank.addAccount( ross );
    bank.addAccount( kyle );
    assert.equal(2, bank.bankAccounts.length);
  });

  it("should find account by name", function() {
    assert.equal(tsb, bank.findByName("TSB"));
  })


});