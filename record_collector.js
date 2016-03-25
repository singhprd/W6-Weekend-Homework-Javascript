// - Create a RecordCollector (or customer) constructor who can buy and sell records.
// - If you choose to, you can use lodash for enumerable functionality.
// - Use TDD all the way through!

var RecordCollector = function( name ) {
  this.name = name;
  this.inventory = [];
  this.money = 100;
}

RecordCollector.prototype = {
  buyRecord: function( recordToBuy, shop) {
    this.inventory.push(recordToBuy);
    this.money = this.money - recordToBuy.price;
    shop.sellRecord(recordToBuy);
  },
  sellRecord: function( recordToSell, shop ) {
    index = this.inventory.indexOf(recordToSell);
    if (index > -1) {
        this.inventory.splice(index, 1);
    }
    this.money = recordToSell.price + this.money;
    shop.buyRecord( recordToSell );
  }
}


module.exports = RecordCollector