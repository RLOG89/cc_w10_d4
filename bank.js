var Bank = function(){
  this.bankAccounts = [];
};

Bank.prototype = {
  addAccount: function(account){
    this.bankAccounts.push(account);
  },

  findByName: function(name){
    this.bankAccounts.find(account.name)
  }
};

module.exports = Bank;