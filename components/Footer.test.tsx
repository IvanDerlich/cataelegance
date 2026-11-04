import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('contains the mandatory "Diseño por Roldar" credit', () => {
    render(<Footer />);
    
    expect(screen.getByText('Diseño por Roldar')).toBeInTheDocument();
  });

  it('renders Cata Elegance branding', () => {
    render(<Footer />);
    
    expect(screen.getByText('Cata Elegance')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2026 Cata Elegance · cataelegance.com/)).toBeInTheDocument();
  });
});
