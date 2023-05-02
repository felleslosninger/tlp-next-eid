import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { Footer } from './Footer';
import type { FooterProps } from './Footer';

describe('Footer', () => {
  it('should have the footer class', () => {
    render();
    const header = screen.getByRole('contentinfo');
    expect(header.classList).toContain('footer');
  });
});

const render = (props?: FooterProps) => renderRtl(<Footer {...props} />);
