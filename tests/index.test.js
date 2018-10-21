import { AddNumbers } from '../src/'

describe('Sanity Test', () => {
    it('Should add two numbers', () => {
        expect(AddNumbers(5,6)).toEqual(11);
    })
})