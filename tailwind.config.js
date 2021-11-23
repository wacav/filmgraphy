module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        filmgraphy: {
           'primary' : '#ffd43b',           /* Primary color */
           'primary-focus' : '#fab005',     /* Primary color - focused */
           'primary-content' : '#495057',   /* Foreground content color to use on primary color */

           'secondary' : '#748ffc',         /* Secondary color */
           'secondary-focus' : '#4c6ef5',   /* Secondary color - focused */
           'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

           'accent' : '#37cdbe',            /* Accent color */
           'accent-focus' : '#2aa79b',      /* Accent color - focused */
           'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

           'neutral' : '#868e96',           /* Neutral color */
           'neutral-focus' : '#ced4da',     /* Neutral color - focused */
           'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

           'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
           'base-200' : '#f9fafb',          /* Base color, a little darker */
           'base-300' : '#d1d5db',          /* Base color, even more darker */
           'base-content' : '#e9ecef',      /* Foreground content color to use on base color */

           'info' : '#2094f3',              /* Info */
           'success' : '#009485',           /* Success */
           'warning' : '#ff9900',           /* Warning */
           'error' : '#ff5724',             /* Error */
        },
      },
    ],
  },
};
