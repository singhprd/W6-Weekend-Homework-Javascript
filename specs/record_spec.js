var Record = require('../record');
var assert = require('chai').assert;


describe ('Record', function() {
  testRecord = new Record( "Artist", "Title", 15 )
  it('should have a artist', function( ) {
    assert.equal( "Artist", testRecord.artist );
  }),
  it('should have a title', function( ) {
    assert.equal( "Title", testRecord.title );
  }),
  it('should have a price', function( ) {
    assert.equal( 15, testRecord.price );
  })

})