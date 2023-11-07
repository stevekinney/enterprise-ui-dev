import userEvent from '@testing-library/user-event';
import React, { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

//Custom Render - testing-library.com/docs/react-testing-library/setup#custom-render
// import { ThemeProvider } from 'my-ui-lib';
// import { TranslationProvider } from 'my-i18n-lib';
// import defaultStrings from 'i18n/en-x-default';

// const AllProviders = ({ children }: { children: React.ReactNode}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   );
// };
export const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions,
) => {
  const user = userEvent.setup();
  const result = render(ui, options);
  return {
    ...result,
    user,
  };
};
export * from '@testing-library/react';

export { customRender as render };
