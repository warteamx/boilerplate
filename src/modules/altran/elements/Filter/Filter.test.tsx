import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Filter from './Filter';


const setup = () => {
  const utils = render(<Filter filterBy={()=>{} } />)
  const input = utils.getByLabelText('search-name') as HTMLInputElement
  return {
    input,
    ...utils,
  }
}

test('It Renders without crashing', () => {
  const { container } = render(<Filter filterBy={()=>{} } />)
  expect(container.firstChild).toBeInTheDocument(); 

})

test('It allows to enter the name of gnomes', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'gnomes' } })
  expect(input.value).toBe('gnomes')
})
