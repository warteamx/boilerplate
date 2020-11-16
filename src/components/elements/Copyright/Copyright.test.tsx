import React from 'react';
import {render } from '@testing-library/react';
import Copyright from './Copyright';

describe('<Copyright> ', () => {
    const { getByText} = render(<Copyright />);

    // const RealDate = Date.now

    // beforeAll(() => {
    //     jest.useFakeTimers('modern');

    //     jest.setSystemTime(new Date('04 Dec 1995 00:12:00 GMT').getTime())
    // })

    // afterAll(() => {
    //     jest.useRealTimers();
    // })

    test('renders correct text', () => {
        const text = getByText(/No Copyright ©/i);
        expect(text).toBeInTheDocument();
    });

    // test('renders correct date with the right format', () => {
    //     /**
    //      * Testing Dates Docs:
    //      * https://dev.to/maxpou/how-to-mock-date-with-jest-3k4b
    //      * https://github.com/testing-library/dom-testing-library/issues/410
    //      * https://dev.to/maxpou/how-to-mock-date-with-jest-3k4b
    //      */

    //     const { getByTestId } = render(<Copyright />);
    //     const date = getByTestId('date');

    //     expect(date).toBeInTheDocument();
    //     expect(date).toHaveTextContent('1995')
    // });

})

