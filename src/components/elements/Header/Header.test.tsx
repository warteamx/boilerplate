import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe(' <Header> ', () => {
    test('renders Header with title, link and linkText', () => {
        const { getByText } = render(<Router> <Header title="foo" linkText="bar" link="goo" /> </Router>);
        const TitleElement = getByText(/foo/i);

        expect(TitleElement).toBeInTheDocument();

    });

    // TODO: Test for validate link is valid link / path ? 

})