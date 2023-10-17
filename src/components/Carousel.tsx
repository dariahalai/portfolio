import { FC } from 'react';
import Slider from 'react-slick';
import { useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { nanoid } from 'nanoid';

const Carousel: FC<{ data: any; func: any }> = ({ data, func }) => {
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
    <Box position={'relative'}>
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
        {data.map((el: any) => (
          <Box as="li" key={nanoid()}>
            {func(el)}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
