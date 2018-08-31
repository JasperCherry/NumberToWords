const assert = require('assert');
const converter = require("../converter.js");

describe('Converter / converting string to number', function () {
    it('should return false, number is too small', function(){
        const result = converter.convertStringToNumber('-1');
        assert.deepEqual(result, false);
    });
    it('should return false, number is too large', function(){
        const result = converter.convertStringToNumber('1000000000');
        assert.deepEqual(result, false);
    });
    it('should return false, number is not an integer', function(){
        const result = converter.convertStringToNumber('2.3');
        assert.deepEqual(result, false);
    });
    it('should return false, data is not a number', function(){
        const result = converter.convertStringToNumber('asdf');
        assert.deepEqual(result, false);
    });
    it('should return false, data is not a number', function(){
        const result = converter.convertStringToNumber('34 44');
        assert.deepEqual(result, false);
    });
    it('should return false, data is not a number', function(){
        const result = converter.convertStringToNumber('asd56');
        assert.deepEqual(result, false);
    });
});

describe('Converter / converting number to words', function () {
    it('should return false, number is too small', function(){
        const result = converter.convertNumberToWord('0');
        assert.deepEqual(result, 'zero');
    });
});
