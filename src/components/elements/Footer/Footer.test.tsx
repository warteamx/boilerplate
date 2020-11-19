import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe( ' <Footer> ', ()=>{
    test('renders Footer with title and description', () => {
        const { getByText } = render(<Footer title="foo" subtitle="bar" />);
        const TitleElement = getByText(/foo/i);
        const SubTitleElement = getByText(/bar/i);
        expect(TitleElement).toBeInTheDocument();
        expect(SubTitleElement).toBeInTheDocument();    
      });
      


} )

