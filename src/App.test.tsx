import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('<App> renders correctly without crashing', () => {
 render(<App />);
});
