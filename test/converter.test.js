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
        const result = converter.convertNumberToWord('0');
        assert.deepEqual(result, 'zero');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('3');
        assert.deepEqual(result, 'three');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('10');
        assert.deepEqual(result, 'ten');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('13');
        assert.deepEqual(result, 'thirteen');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('20');
        assert.deepEqual(result, 'twenty');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('42');
        assert.deepEqual(result, 'fourty two');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('99');
        assert.deepEqual(result, 'ninety nine');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('102');
        assert.deepEqual(result, 'one hundred two');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('112');
        assert.deepEqual(result, 'one hundred twelve');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('100');
        assert.deepEqual(result, 'one hundred');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('1000');
        assert.deepEqual(result, 'one thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('1000000');
        assert.deepEqual(result, 'one million');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('100000');
        assert.deepEqual(result, 'one hundred thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('10000');
        assert.deepEqual(result, 'ten thousand');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('999999999');
        assert.deepEqual(result, 'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
    });

    it('should return number using words', function () {
        const result = converter.convertNumberToWord('000000001');
        assert.deepEqual(result, 'one');
    });

});
