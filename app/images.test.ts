import { describe, it, expect } from 'vitest';
import { products } from '@/data/products';
import { existsSync } from 'fs';
import { join } from 'path';

describe('Product Images', () => {
  it('all product images exist in public directory', () => {
    products.forEach((product) => {
      const imagePath = join(process.cwd(), 'public', product.image);
      expect(
        existsSync(imagePath),
        `Image for ${product.name} should exist at ${imagePath}`
      ).toBe(true);
    });
  });

  it('hero image exists in public directory', () => {
    const heroImagePath = join(process.cwd(), 'public', 'images', 'hero.jpg');
    expect(
      existsSync(heroImagePath),
      'Hero image should exist at public/images/hero.jpg'
    ).toBe(true);
  });

  it('all product image paths start with /images/', () => {
    products.forEach((product) => {
      expect(
        product.image.startsWith('/images/'),
        `Image path for ${product.name} should start with /images/`
      ).toBe(true);
    });
  });
});
