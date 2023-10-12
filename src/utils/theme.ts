import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Oswald', sans-serif`,
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
});

export { theme };
