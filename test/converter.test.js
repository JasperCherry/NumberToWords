const assert = require('assert');
const converter = require("../converter.js");

describe('Converter / converting string to number', function () {

    it('should return false, number is too small', function () {
        const result = converter.convertStringToNumber('-1');
        assert.deepEqual(result, false);
    });

    it('should return false, number is too large', function () {
        const result = converter.convertStringToNumber('1000000000');
        assert.deepEqual(result, false);
    });

    it('should return false, number is not an integer', function () {
        const result = converter.convertStringToNumber('2.3');
        assert.deepEqual(result, false);
    });

    it('should return false, data is not a number', function () {
        const result = converter.convertStringToNumber('asdf');
        assert.deepEqual(result, false);
    });

    it('should return false, data is not a number', function () {
        const result = converter.convertStringToNumber('34 44');
        assert.deepEqual(result, false);
    });

    it('should return false, data is not a number', function () {
        const result = converter.convertStringToNumber('asd56');
        assert.deepEqual(result, false);
    });

});

describe('Converter / converting number to words', function () {

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('0');
        assert.deepEqual(result, 'zero');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('3');
        assert.deepEqual(result, 'three');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('10');
        assert.deepEqual(result, 'ten');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('13');
        assert.deepEqual(result, 'thirteen');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('20');
        assert.deepEqual(result, 'twenty');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('42');
        assert.deepEqual(result, 'fourty two');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('99');
        assert.deepEqual(result, 'ninety nine');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('102');
        assert.deepEqual(result, 'one hundred two');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('112');
        assert.deepEqual(result, 'one hundred twelve');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('100');
        assert.deepEqual(result, 'one hundred');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('1000');
        assert.deepEqual(result, 'one thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000000001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('00000001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('0000001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('00001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('0001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('01');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('1');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('1000000');
        assert.deepEqual(result, 'one million');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('1000001');
        assert.deepEqual(result, 'one million one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('1000010');
        assert.deepEqual(result, 'one million ten');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('100000');
        assert.deepEqual(result, 'one hundred thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('10000');
        assert.deepEqual(result, 'ten thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('999999999');
        assert.deepEqual(result, 'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000000001');
        assert.deepEqual(result, 'one');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000000010');
        assert.deepEqual(result, 'ten');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000000100');
        assert.deepEqual(result, 'one hundred');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000010000');
        assert.deepEqual(result, 'ten thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000000000');
        assert.deepEqual(result, 'zero');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('00000');
        assert.deepEqual(result, 'zero');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000000123');
        assert.deepEqual(result, 'one hundred twenty three');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWords('000123000');
        assert.deepEqual(result, 'one hundred twenty three thousand');
    });

});
