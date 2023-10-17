import { Box, Container, Heading } from '@chakra-ui/layout';
import { ProjectsTabs } from 'components';

const ProjectsSection = () => {
  return (
    <Box as="section" py={10} bg="cardBackground">
      <Container centerContent maxW="2xl" my={10}>
        <Heading
          as="h2"
          size={{ sm: '2xl', md: '3xl' }}
          color="text"
          textAlign="center"
          textStyle="h2"
        >
          Projects
        </Heading>
        <ProjectsTabs />
      </Container>
    </Box>
  );
};

export default ProjectsSection;
