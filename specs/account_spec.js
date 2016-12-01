var Account = require("../account");
var assert = require("assert");

var account = new Account("Nationwide", "Current", 10000);

describe("Account", function(){

  beforeEach(function(){
    
  })

  it("Should have a name", function(){
    assert.equal("Nationwide", account.name);
  })

  it("Should have a type", function(){
    assert.equal("Current", account.type);
  })

  it("Should have funds", function(){
    assert.equal(10000, account.amount);
  })


});