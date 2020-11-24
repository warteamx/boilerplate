import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe(' <Header> ', () => {
    test('renders Header with title, link and linkText', () => {
        const { getByText } = render(<Header title="foo" linkText="bar" link="goo" />);
        const TitleElement = getByText(/foo/i);
        const linkTextElement = getByText(/bar/i);
        const linkElement = getByText(/goo/i);

        expect(TitleElement).toBeInTheDocument();
        expect(linkTextElement).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();
    });

    // TODO: Test for validate link is valid link / path ? 

})