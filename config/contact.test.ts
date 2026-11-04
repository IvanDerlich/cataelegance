import { describe, it, expect } from 'vitest';
import { CONTACT, getWhatsAppUrl } from './contact';

describe('Contact Configuration', () => {
  it('has correct WhatsApp number', () => {
    expect(CONTACT.whatsapp.number).toBe('5492617776394');
  });

  it('generates correct WhatsApp URL with default message', () => {
    const url = getWhatsAppUrl();
    
    expect(url).toContain('https://wa.me/5492617776394');
    expect(url).toContain('text=');
    expect(url).toContain(encodeURIComponent(CONTACT.whatsapp.defaultMessage));
  });

  it('generates correct WhatsApp URL with custom message', () => {
    const customMessage = 'Hola, quiero información';
    const url = getWhatsAppUrl(customMessage);
    
    expect(url).toBe(`https://wa.me/5492617776394?text=${encodeURIComponent(customMessage)}`);
  });

  it('has Spanish default message', () => {
    expect(CONTACT.whatsapp.defaultMessage).toContain('Hola');
    expect(CONTACT.whatsapp.defaultMessage).toBeTruthy();
  });
});
