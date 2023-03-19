const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
  const button = (color) => ({
    display: 'inline-flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': theme('borderRadius.md'),
    'border-width': theme('borderWidth.2'),
    'padding-left': theme('spacing.4'),
    'padding-right': theme('spacing.4'),
    'padding-top': theme('spacing.2'),
    'padding-bottom': theme('spacing.2'),
    'transition-property': theme('transitionProperty.colors'),
    'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
    'transition-duration': theme('transitionDuration.DEFAULT'),
    'transition-timing-function': theme('transitionTimingFunction.DEFAULT'),
    'border-color': theme(`colors.${color}.700`, 'currentColor'),
    'background-color': theme(`colors.${color}.200`, 'white'),
    '&:hover': {
      'background-color': theme(`colors.${color}.300`, 'currentColor'),
    },
    '&:active': {
      'background-color': theme(`colors.${color}.400`, 'currentColor'),
    },
    '&:disabled': {
      'background-color': theme(`colors.slate.50`, 'currentColor'),
      color: theme(`colors.slate.500`, 'currentColor'),
      cursor: 'not-allowed',
    },
  });

  addComponents({
    '.btn': button('secondary'),
    '.btn-primary': button('primary'),
    '.btn-secondary': button('secondary'),
    '.btn-danger': button('error'),
    '.btn-success': button('success'),
  });
});
