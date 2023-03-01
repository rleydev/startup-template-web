import { expect } from 'chai';
import  { validate, validateAsync,  validateWithLog} from '../email-validator.js'
import sinon from 'sinon';

const assert = require('assert');

describe('first test', () => {
    it('should return 2', () => {
        expect(2).to.equal(2);
    })
})

describe('test validate function', () => {
    
    it('shouldnt start with @', () => {
        const expected = false
        const actual = validate('@email.com');
        expect(actual).to.deep.equal(expected);
    })

    it('should not be empty', () => {
        const expected = false
        const actual = validate('')
        expect(actual).to.deep.equal(expected)
    })

    it('should consist @gmail.com', () => {
        const expected = true
        const actual = validate('some@gmail.com');
        assert.equal(expected, actual)
    })

    it('should consist @hotmail.com', () => {
        const expected = true
        const actual = validate('some@hotmail.com');
        assert.equal(expected, actual)
    })

    it('should end with @gmail.com', () => {
        const expected = false
        const actual = validate('some@email.com');
        expect(actual).to.deep.equal(expected);
    })

    it('should end with @hotmail.com', () => {
        const expected = false
        const actual = validate('some@email.com');
        expect(actual).to.deep.equal(expected);
    })

    it('should not be number', () => {
        const expected = false
        const actual = validate(2);
        expect(actual).to.deep.equal(expected);
    })

    it('should not be bool', () => {
        const expected = false
        const actual = validate(true)
        expect(actual).to.deep.equal(expected);
    })

    it('should not be undefined', () => {
        const expected = false
        const actual = validate(undefined)
        expect(actual).to.deep.equal(expected);
    })

})


describe ('test Async validate function', () => {

    it('Async should not start with @', async () => {
        const email = '@email.com';
        const expected = false;
        const actual = await validateAsync(email);
        assert.equal(expected, actual, 'Async starts with @')
    });

    it('Async should not be empty', async () => {
        const expected = false
        const actual = await validateAsync('');
        assert.equal(expected, actual, 'Async value is empty')
    })

    it('Async should end with @gmail.com', async () => {
        const expected = false
        const actual = await validateAsync('some@email.com');
        assert.equal(expected, actual, "Async does not have @hotmail.com and @gmail.com in the end")
    })

    it('Async should end with @hotmail.com', async () => {
        const expected = false
        const actual = await validateAsync('some@email.com');
        assert.equal(expected, actual, 'Async does not have @hotmail.com and @gmail.com in the end')
    })

    it('Async should consist @gmail.com', async () => {
        const expected = true
        const actual = await validateAsync('some@gmail.com');
        assert.equal(expected, actual, 'Async does not consist @gmail.com')
    })

    it('Async should consist @hotmail.com', async () => {
        const expected = true
        const actual = await validateAsync('some@hotmail.com');
        assert.equal(expected, actual, 'Async does not consist @hotmail.com')
    })

    it('Async should not be number', async () => {
        const expected = false
        const actual = await validateAsync(2);
        assert.equal(expected, actual, 'Async value is number')
    })

    it('Async should not be bool', async () => {
        const expected = false
        const actual = await validateAsync(true);
        assert.equal(expected, actual, 'Async value is bool')
    })

    it('Async should not be undefined', async () => {

        const expected = false
        const actual = await validateAsync(undefined);
        assert.equal(expected, actual, 'Async value is undefined')
    })

})

describe ('test validateWithLog', () => {

    it('validateWithLog should not start with @', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog('@email.com');
        expect(actual).to.deep.equal(expected);
        stub.restore()
        
    })

    it('validateWithLog should not be empty', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog('')
        expect(actual).to.deep.equal(expected)
        stub.restore()
    })

    it('validateWithLog should end with @gmail.com', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog('some@email.com');
        expect(actual).to.deep.equal(expected);
        stub.restore()
    })

    it('validateWithLog should end with @hotmail.com', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog('some@email.com');
        expect(actual).to.deep.equal(expected);
        stub.restore()
    })


    it('validateWithLog should consist @gmail.com', () => {
        const stub = sinon.stub(console, 'log');
        const expected = true
        const actual = validateWithLog('some@gmail.com');
        assert.equal(expected, actual)
        stub.restore()
    })

    it('validateWithLog should consist @hotmail.com', () => {
        const stub = sinon.stub(console, 'log');
        const expected = true
        const actual = validateWithLog('some@hotmail.com');
        assert.equal(expected, actual)
        stub.restore()
    })


    it('validateWithLog should not be number', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog(2);
        expect(actual).to.deep.equal(expected);
        stub.restore()
    })

    it('validateWithLog should not be bool', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog(true)
        expect(actual).to.deep.equal(expected);
        stub.restore()
    })

    it('validateWithLog should not be undefined', () => {
        const stub = sinon.stub(console, 'log');
        const expected = false
        const actual = validateWithLog(undefined)
        expect(actual).to.deep.equal(expected);
        stub.restore()
    })
})