// - Create a RecordStore that has a name, city and multiple records in it's inventory
// - Give the RecordStore a balance i.e. cash in bank.
// - Add some records to your RecordStore.
// - Create a method that lists the inventory.

var _ = require('lodash');

var RecordStore = function( inventory, name, city ) {
  this.inventory = inventory;
  this.name = name;
  this.city = city;
  this.balance = 0;
}

// - Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// - Create a method that reports on the financial situation of the store. Cash and value of inventory.
// - Create a RecordCollector (or customer) constructor who can buy and sell records.
// - If you choose to, you can use lodash for enumerable functionality.
// - Use TDD all the way through!

RecordStore.prototype = {
  listInventory: function() {
    toReturn = []
    
    this.inventory.map( function( each ) {
      toReturn.push(each.title);
    })
    return toReturn;
  },
  sellRecord: function( recordToSell ) {
    this.balance = recordToSell.price + this.balance;
  },

  buyRecord: function( recordToBuy ) { 
    this.balance = recordToBuy + this.balance;
  },

  finSit: function() {
    stockValue = 0;
    _.forEach (this.inventory, function( each ) {
      stockValue = (each.amount * each.price) + stockValue;
    })
    return stockValue + this.balance;
  }

};

module.exports = RecordStore;