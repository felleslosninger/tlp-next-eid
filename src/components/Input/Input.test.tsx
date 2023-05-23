import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from './Input';

test('Render input-element with correct placeholder', () => {
  render(<Input />);
  const inputElement = screen.getByPlaceholderText('Søk her...');
  expect(inputElement).toBeInTheDocument();
});
