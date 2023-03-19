import { ComponentPropsWithoutRef, FormEventHandler, useRef } from 'react';
import clsx from 'clsx';
import Input from '$components/input';

const SignUpForm = ({
  onSubmit = () => {},
  onInvalid,
  className,
  ...props
}: ComponentPropsWithoutRef<'form'>) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  const showErrors: FormEventHandler<HTMLFormElement> = (event) => {
    if (onInvalid) {
      onInvalid(event);
    } else {
      if (ref?.current?.dataset) {
        ref.current.dataset.validate = 'true';
      }
    }
  };

  return (
    <form
      {...props}
      className={clsx('flex flex-col gap-4', className)}
      onSubmit={handleSubmit}
      onInvalid={showErrors}
      ref={ref}
    >
      <Input
        id="sign-up-username"
        type="text"
        label="Username"
        placeholder="Username"
        required
      />
      <Input
        id="sign-up-password"
        placeholder="Password"
        type="password"
        label="Password"
        required
      />
      <Input
        id="sign-up-password-confirmation"
        type="password"
        placeholder="Password (Again)"
        label="Password (Again)"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
