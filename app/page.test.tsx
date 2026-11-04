import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';
import { products } from '@/data/products';

describe('Home Page', () => {
  it('renders all products from the data', () => {
    render(<Home />);
    
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('renders product prices correctly', () => {
    render(<Home />);
    
    expect(screen.getByText(/38\.900/)).toBeInTheDocument();
    expect(screen.getByText(/45\.500/)).toBeInTheDocument();
    expect(screen.getByText(/52\.000/)).toBeInTheDocument();
  });

  it('renders the header with logo', () => {
    render(<Home />);
    
    expect(screen.getByText('Cata')).toBeInTheDocument();
  });

  it('renders the hero section', () => {
    render(<Home />);
    
    expect(screen.getAllByText('Nueva colección').length).toBeGreaterThan(0);
    expect(screen.getByText('Prendas suaves para sentirte elegante')).toBeInTheDocument();
  });
});
