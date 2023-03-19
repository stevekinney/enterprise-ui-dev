import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type InputWithButtonProps = {
  id: string;
  label: string;
  error?: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = ({
  id,
  label,
  error,
  children,
  className,
  ...props
}: InputWithButtonProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={clsx(
          props.required &&
            'after:pl-1 after:text-primary-300 after:content-["❋"]',
        )}
      >
        {label}
      </label>
      <div className="flex">
        <input
          id={id}
          placeholder={label}
          className={clsx('w-full', className)}
          {...props}
        />
        {children}
      </div>
      {error && <p className="font-semibold text-error-600">{error}</p>}
    </div>
  );
};

export default Input;
