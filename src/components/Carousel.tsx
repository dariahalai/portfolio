import Slider from 'react-slick';
import { useState } from 'react';
import { Avatar, Box, Heading, IconButton, Text } from '@chakra-ui/react';
import {
  SlUserFemale,
  SlUser,
  SlArrowLeft,
  SlArrowRight,
} from 'react-icons/sl';
import { RECOMENDATIONS } from 'utils/recomendations';
import { Recomendation } from 'utils/types';

const Carousel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      position={'relative'}
      maxW={{ sm: '90vw', md: '70vw', lg: '42vw' }}
      my={20}
      p={6}
      borderRadius={16}
      bg="accentBackground"
    >
      <IconButton
        visibility={{ sm: 'hidden', md: 'visible' }}
        aria-label="left-arrow"
        variant="unstyled"
        position="absolute"
        left={'-8%'}
        top={'50%'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <SlArrowLeft size="24px" />
      </IconButton>
      <IconButton
        visibility={{ sm: 'hidden', md: 'visible' }}
        aria-label="right-arrow"
        variant="unstyled"
        position="absolute"
        right={'-10%'}
        top={'50%'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <SlArrowRight size="24px" />
      </IconButton>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {RECOMENDATIONS.map(
          ({ id, gender, name, position, text }: Recomendation) => (
            <Box key={id}>
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
            </Box>
          )
        )}
      </Slider>
    </Box>
  );
};

export default Carousel;
