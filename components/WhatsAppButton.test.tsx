import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhatsAppButton from './WhatsAppButton';
import { CONTACT } from '@/config/contact';

describe('WhatsAppButton', () => {
  it('renders with correct WhatsApp link', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByLabelText('Escribinos por WhatsApp');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('A');
  });

  it('has correct href with Cata number', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByLabelText('Escribinos por WhatsApp');
    const href = button.getAttribute('href') || '';
    
    expect(href).toContain('wa.me/' + CONTACT.whatsapp.number);
    expect(href).toContain('5492617776394');
  });

  it('has Spanish aria-label', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByLabelText('Escribinos por WhatsApp');
    expect(button).toHaveAttribute('aria-label', 'Escribinos por WhatsApp');
  });

  it('opens in new tab', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByLabelText('Escribinos por WhatsApp');
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has WhatsApp icon SVG', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByLabelText('Escribinos por WhatsApp');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
