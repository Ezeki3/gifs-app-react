import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomHeader from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Test title';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined()
  });

  test('should render the description when provided', () => {
    const desccription = 'Test description';

    render(<CustomHeader title={title} description={desccription} />);
    expect(screen.getByText(desccription)).toBeDefined()
  });

  test('should not render description when not provided', () => {

    const { container } = render(<CustomHeader title={title} />);
    const divElement = container.querySelector('.content-center');
    const h1 = divElement?.querySelector('h1');

    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector('p');
    expect(p).toBeNull()
  });

})