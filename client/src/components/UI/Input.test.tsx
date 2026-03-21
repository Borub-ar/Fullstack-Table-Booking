import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';

import '@testing-library/jest-dom/vitest';

import Input from './Input';

afterEach(() => {
  cleanup();
});

describe('Input', () => {
  it('renders input element', () => {
    render(<Input labelText='test' inputId='test-input' type='text' />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<Input labelText='test' inputId='test-input' type='text' />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('sets the correct input type', () => {
    render(<Input labelText='password' inputId='test-input' type='password' />);
    expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
  });

  it('passes value to the input');
  it('sets data-type attribute when dataType is provided');
  it('calls onChange when input value changes');
  it('does not render errors when errors is undefined');
  it('does not render errors when errors array is empty');
  it('renders a single error message');
  it('renders multiple error messages');
  it('applies error styles when errors are present');
  it('applies error styles when noLabelError is true');
  it('does not apply error styles when there are no errors and noLabelError is false');
});
