module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: process.env.NODE_ENV === 'production' && [
    '.src/components/**/*.{js,ts,jsx,tsx}',
    '.src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
