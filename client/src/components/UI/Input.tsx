interface InputProps {
  labelText: string;
  inputId: string;
  type: string;
  value?: string;
  errors: string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ labelText, inputId, type, value, errors, onChange }: InputProps) => {
  return (
    <div className='text-white relative'>
      <label htmlFor={inputId} className={errors ? 'text-(--error-clr)' : 'text-white'}>
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        className={`border-b-2 ${errors ? 'border-(--error-clr)' : 'border-white'} w-full`}
        onChange={onChange}
      />
      {errors &&
        errors.map(error => (
          <p key={error} className='text-(--error-clr) text-xs'>
            {error}
          </p>
        ))}
    </div>
  );
};

export default Input;
