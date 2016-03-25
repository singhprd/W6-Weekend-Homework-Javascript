var RecordStore = require('../record_store');
var Record = require('../record');
var RecordCollector = require('../record_collector');
var assert = require('chai').assert;

describe( 'Record Collector', function() {
  jim = new RecordCollector( "Jim" );
  record1 = new Record( "The 1975", "The 1975 Album", 15, 10 );
  record2 = new Record( "Boyzone", "Wings", 1, 100 );
  recordStore1 = new RecordStore( [record1, record2], "Keith's Music Store", "Edinburgh" );

  it('should have a name', function() {
    assert.equal( "Jim", jim.name );
  }),

  it('should be able to buy a record', function() {
    jim.buyRecord( record1, recordStore1 );
    assert.equal( 85, jim.money );
  } ),

  it('should be able to sell a record', function() {
    jim.sellRecord( record1, recordStore1 );
    assert.equal( 100, jim.money );
  })

});