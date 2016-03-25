var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('chai').assert;

describe('Record Store', function() {

  record1 = new Record( "The 1975", "The 1975 Album", 15 );
  record2 = new Record( "Boyzone", "Wings", 1 );
  recordStore1 = new RecordStore( [record1, record2], "Keith's Music Store", "Edinburgh" );

  it('should have a city', function() {
    assert.equal( "Edinburgh", recordStore1.city );
  }),

  it('should have a name', function() {
    assert.equal( "Keith's Music Store", recordStore1.name );
  }),

  it('should have inventory', function() {
    assert.equal( 2, recordStore1.inventory.length );
  }),

  it('should return list of titles', function() {
    result = recordStore1.listInventory();
    assert.deepEqual([record1.title, record2.title], result)
    }),

  it('should be able to sell a record', function() {
    recordStore1.sellRecord( record1 );
    assert.equal( 15, recordStore1.balance )
  })

})