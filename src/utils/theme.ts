import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Oswald', sans-serif`,
  },
  textStyles: {
    h1: {
      textTransform: 'uppercase',
    },
    h2: {
      textTransform: 'uppercase',
    },
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    background: '#F2F4F5',
    text: '#040506',
    cardBackground: '#EFEFEF',
    accentBackground: '#CCCCCC',
    test: 'green',
  },
  breakpoints: {
    base: '0px',
    sm: '320px',
    md: '768px',
    lg: '1280px',
  },
});

export { theme };
