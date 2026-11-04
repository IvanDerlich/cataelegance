/**
 * Contact configuration for Cata Elegance
 */

export const CONTACT = {
  whatsapp: {
    // WhatsApp number: +54 9 2617 77-6394
    number: '5492617776394',
    // Pre-filled message in Spanish
    defaultMessage: '¡Hola! Me interesa conocer más sobre los productos de Cata Elegance.',
  },
  email: 'hola@cataelegance.com',
  instagram: '@cataelegance',
} as const;

/**
 * Get WhatsApp URL with optional custom message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || CONTACT.whatsapp.defaultMessage;
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
