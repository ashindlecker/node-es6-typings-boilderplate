// @flow

//Sample function to ensure that flow and eslint is configured correctly, removing a typing should throw an eslint error.
export function AddNumbers(a: number, b: number): number {
    return a + b;
}

//Call function to ensure flow is configured. Changing any parameters to a non-number should throw a flow error.
const addNumbersResult = AddNumbers(3, 5);