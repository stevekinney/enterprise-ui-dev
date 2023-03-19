import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export const NumberItem = (props: ComponentPropsWithoutRef<'article'>) => {
  return (
    <article
      className={clsx(
        'border-2 border-cyan-400 bg-cyan-50 text-center font-semibold',
        {
          'border-yellow-400 bg-yellow-50': props.children === 'Fizz',
          'border-purple-400 bg-purple-50': props.children === 'Buzz',
          'border-red-400 bg-red-50': props.children === 'FizzBuzz',
        },
      )}
      {...props}
    />
  );
};
