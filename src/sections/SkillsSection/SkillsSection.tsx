import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  //   FaFigma,
} from 'react-icons/fa';
import {
  SiSass,
  SiJavascript,
  SiTypescript,
  SiRedux,
  //   SiNestjs,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  //   SiPostgresql,
  SiPostman,
  SiReacthookform,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
} from '@chakra-ui/react';

const skillsArray = [
  FaHtml5,
  FaCss3Alt,
  SiSass,
  SiJavascript,
  SiTypescript,
  FaReact,
  TbBrandNextjs,
  SiRedux,
  SiReacthookform,
  SiStyledcomponents,
  FaNodeJs,
  SiExpress,
  //   SiNestjs,
  SiMongodb,
  //   SiPostgresql,
  SiPostman,
  FaGit,
  //   FaFigma,
];

const SkillsSection = () => {
  return (
    <Box as="section" py={10} bg="cardBackground">
      <Container centerContent maxW="xl" my={10}>
        <Heading
          as="h2"
          size={{ sm: '2xl', md: '3xl' }}
          color="text"
          textAlign="center"
          textStyle="h1"
        >
          Tech skills
        </Heading>
        <Grid
          templateColumns={{
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={10}
          my={20}
        >
          {skillsArray.map((el: any) => (
            <GridItem
              key={nanoid()}
              w={100}
              h={100}
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              border="4px"
              borderColor="black"
            >
              <Box
                w={85}
                h={85}
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="black"
              >
                <Icon as={el} boxSize={50} color="white" />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
