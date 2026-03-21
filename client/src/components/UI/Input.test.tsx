import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/vitest';

import Input from './Input';

afterEach(() => {
  cleanup();
});

describe('Input', () => {
  it('renders input element', () => {
    render(<Input labelText='username' inputId='test-input' type='text' />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<Input labelText='username' inputId='test-input' type='text' />);
    expect(screen.getByText('username')).toBeInTheDocument();
  });

  it('sets the correct input type', () => {
    render(<Input labelText='password' inputId='test-input' type='password' />);
    expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
  });

  it('passes value to the input', () => {
    render(<Input labelText='username' inputId='test-input' type='text' value='test-value' />);
    expect(screen.getByRole('textbox')).toHaveValue('test-value');
  });

  it('sets data-type attribute when dataType is provided', () => {
    render(<Input labelText='username' inputId='test-input' type='text' dataType='type' />);
    expect(screen.getByRole('textbox')).toHaveAttribute('data-type', 'type');
  });

  it('calls onChange when input value changes', async () => {
    const handleChange = vi.fn();

    render(<Input labelText='username' inputId='test-input' type='text' onChange={handleChange} />);

    await userEvent.type(screen.getByRole('textbox'), 'abc');
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not render errors when errors is undefined', () => {
    render(<Input labelText='username' inputId='test-input' type='text' />);
    expect(screen.queryByText('Required')).not.toBeInTheDocument();
  });

  it('does not render errors when errors array is empty', () => {
    render(<Input labelText='username' inputId='test-input' type='text' errors={[]} />);
    expect(screen.queryByText('Required')).not.toBeInTheDocument();
  });

  it('renders a single error message', () => {
    const errorMock = ['Required!'];
    render(<Input labelText='username' inputId='test-input' type='text' errors={errorMock} />);

    const errorMsg = screen.getByText('Required!');
    expect(errorMsg).toBeInTheDocument();
  });

  it('renders multiple error messages', () => {
    const errorsMock = ['Required!', 'Too short!'];
    render(<Input labelText='username' inputId='test-input' type='text' errors={errorsMock} />);

    expect(screen.getByText('Required!')).toBeInTheDocument();
    expect(screen.getByText('Too short!')).toBeInTheDocument();
  });

  it('applies error styles when errors are present', () => {
    const errorMock = ['Required!'];
    render(<Input labelText='username' inputId='test-input' type='text' errors={errorMock} />);

    expect(screen.getByLabelText('username')).toHaveClass('text-(--error-clr)');
    expect(screen.getByRole('textbox')).toHaveClass('text-(--error-clr)');
  });

  it('applies error styles when noLabelError is true', () => {
    render(<Input labelText='username' inputId='test-input' type='text' noLabelError />);

    expect(screen.getByLabelText('username')).toHaveClass('text-(--error-clr)');
    expect(screen.getByRole('textbox')).toHaveClass('text-(--error-clr)');
  });

  it('does not apply error styles when there are no errors and noLabelError is false', () => {
    render(<Input labelText='username' inputId='test-input' type='text' />);

    expect(screen.getByLabelText('username')).not.toHaveClass('text-(--error-clr)');
    expect(screen.getByRole('textbox')).not.toHaveClass('text-(--error-clr)');
  });
});
