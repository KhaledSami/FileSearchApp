var expect = require('chai').expect;
var tags = require('../lib/tags.js');

describe('Tags', function() {
    describe('#parse()', function() {
        it('should parse long formated tags', function() {
            var args = ['--depth=4', '--hello=world'];
            var results = tags.parse(args);

            expect(results).to.have.a.property('depth', 4);
            expect(results).to.have.a.property('hello', 'world');
        });
    });
});