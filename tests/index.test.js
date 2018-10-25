//@flow

import { AddNumbers } from '../src/'

//Test to ensure that Jest is configured properly.
describe('Sanity Test', () => {
    it('Should add two numbers', () => {
        expect(AddNumbers(5, 6)).toEqual(11);
    })
})