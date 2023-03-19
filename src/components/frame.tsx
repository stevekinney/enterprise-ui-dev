import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

const Frame = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'section'>) => {
  return (
    <section
      {...props}
      className={clsx(
        'flex flex-col gap-8 rounded-lg border-4 border-primary-50 p-8',
        className,
      )}
    />
  );
};

export default Frame;
