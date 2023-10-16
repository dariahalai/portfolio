import { Box, Container, Heading } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box as="section" py={10} bg="background">
      <Container
        maxW="xl"
        border="2px"
        borderColor="black"
        borderRadius={16}
        centerContent
        p={6}
        my={20}
        gap={4}
      >
        <Heading
          as="h1"
          size="2xl"
          color="text"
          textAlign="center"
          textStyle="h2"
        >
          Hi, I'm
        </Heading>
        <Heading
          as="h1"
          size="4xl"
          color="text"
          textAlign="center"
          textStyle="h1"
        >
          Daria Halai
        </Heading>
        <Heading
          as="h1"
          size="2xl"
          color="text"
          textAlign="center"
          textStyle="h2"
        >
          Full Stack developer
        </Heading>
      </Container>
    </Box>
  );
};
export default HeroSection;
