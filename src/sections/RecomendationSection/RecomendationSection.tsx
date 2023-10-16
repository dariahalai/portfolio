import { Avatar, Box, Container, Heading, Text } from '@chakra-ui/react';
import { SlUserFemale, SlUser } from 'react-icons/sl';
import { Carousel } from 'components';
import { Recomendation } from 'utils/types';
import { RECOMENDATIONS, SECTIONS } from 'utils';

const RecomendationSection = () => {
  const renderItem = ({ gender, name, position, text }: Recomendation) => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
          mb={10}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="58px"
            borderRadius="50%"
            border="2px"
            borderColor="black"
            bg="cardBackground"
            mb={4}
          >
            <Avatar
              icon={
                gender === 'male' ? (
                  <SlUser size={32} color="white" />
                ) : (
                  <SlUserFemale size={32} color="white" />
                )
              }
              boxSize={50}
              bg="black"
              border="2px"
              color="black"
            />
          </Box>
          <Heading as="h4" size="xs" color="text">
            {name}
          </Heading>
          <Heading as="h4" size="xs" color="text">
            {position}
          </Heading>
        </Box>
        <Text
          size="md"
          p={4}
          mx={2}
          color="text"
          bg="cardBackground"
          borderRadius={16}
        >
          {text}
        </Text>
      </>
    );
  };
  return (
    <Box as="section" py={10} bg="background" id={SECTIONS.recommendations}>
      <Container centerContent maxW="md" my={10}>
        <Heading
          as="h2"
          size={{ sm: '2xl', md: '3xl' }}
          color="text"
          textAlign="center"
          textStyle="h2"
        >
          Recomendations
        </Heading>
        <Box
          maxW={{ sm: '90vw', md: '54vw', lg: '56vw' }}
          my={20}
          p={6}
          borderRadius={16}
          bg="accentBackground"
        >
          <Carousel data={RECOMENDATIONS} func={renderItem} />
        </Box>
      </Container>
    </Box>
  );
};
export default RecomendationSection;
