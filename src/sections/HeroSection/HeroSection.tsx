import { Box, Container, Heading, Icon, Link } from '@chakra-ui/react';
import { SiLinkedin, SiGithub, SiTelegram } from 'react-icons/si';
import { GrDocumentText } from 'react-icons/gr';
const HeroSection = () => {
  return (
    <Box as="section" py={10} bg="background">
      <Container maxW="xl" my={20} centerContent>
        <Box
          w={{ sm: '90vw', md: '54vw', lg: '50vw' }}
          border="2px"
          borderColor="black"
          borderRadius={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={6}
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
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={6}
          mt={20}
        >
          <Link href="https://www.linkedin.com/in/daria-halai/">
            <Icon as={SiLinkedin} boxSize={10} color="black" />
          </Link>
          <Link href="https://github.com/dariahalai">
            <Icon as={SiGithub} boxSize={10} color="black" />
          </Link>
          <Link href="https://t.me/halai_daria">
            <Icon as={SiTelegram} boxSize={10} color="black" />
          </Link>
          <Link href="https://www.dropbox.com/scl/fi/7swwc6pvuh54p83fz4h6w/Daria-Halai-Frontend-developer.pdf?rlkey=lpw5csgn143unesexjwq161lv&dl=0">
            <Icon as={GrDocumentText} boxSize={10} color="black" />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
export default HeroSection;
