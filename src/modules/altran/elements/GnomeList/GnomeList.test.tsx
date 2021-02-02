import React from 'react'
import { render } from '@testing-library/react'

import GnomeList from './GnomeList';


test('It Renders without crashing', () => {
  const { container } = render(<GnomeList data={[]} loading={false} />)
  expect(container.firstChild).toBeInTheDocument(); 
})
