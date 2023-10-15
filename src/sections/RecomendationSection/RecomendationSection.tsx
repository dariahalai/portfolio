import { Box, Container, Heading } from '@chakra-ui/react';
import Carousel from 'components/Carousel';

const RecomendationSection = () => {
  return (
    <Box as="section" py={10} bg="background">
      <Container centerContent maxW="md" my={10}>
        <Heading
          as="h2"
          size={{ sm: '2xl', md: '3xl' }}
          color="text"
          textAlign="center"
          textStyle="h1"
        >
          Recomendations
        </Heading>
        <Carousel />
      </Container>
    </Box>
  );
};
export default RecomendationSection;
