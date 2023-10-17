import { nanoid } from 'nanoid';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Heading,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Carousel from './Carousel';
import { PROJECTS_TABS, PROJECTS_TAB_PANELS } from 'utils';
import { ProjectTabPanel } from 'utils/types';

const ProjectsTabs = () => {
  const renderItem = (data: string) => {
    return (
      <Image
        src={data}
        maxW={{ sm: '79vw', md: '50vw', lg: '54vw' }}
        objectFit="cover"
        alt={data}
        borderRadius={16}
      />
    );
  };
  return (
    <Tabs mt={20} isFitted maxW={{ sm: '90vw', md: '54vw', lg: '56vw' }}>
      <TabList>
        {PROJECTS_TABS.map(el => (
          <Tab key={nanoid()}>{el}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {PROJECTS_TAB_PANELS.map(
          ({
            images,
            description,
            link,
            project,
            techStack,
          }: ProjectTabPanel) => (
            <TabPanel key={nanoid()}>
              {typeof images === 'object' ? (
                <Box maxW={{ sm: '79vw', md: '50vw', lg: '54vw' }} mb={6}>
                  <Carousel data={images} func={renderItem} />
                </Box>
              ) : (
                <Image
                  src={images}
                  maxW={{ sm: '79vw', md: '50vw', lg: '54vw' }}
                  objectFit="cover"
                  alt={images}
                  borderRadius={16}
                  mb={4}
                />
              )}
              <Heading as="h4" size="xs">
                Description :
              </Heading>
              <Text>{description}</Text>
              {link && (
                <>
                  <Heading as="h4" size="xs">
                    Link :
                  </Heading>
                  <Text>
                    You may see the project on the{' '}
                    <Link href={link} color="purple">
                      link
                    </Link>
                  </Text>
                </>
              )}
              <Heading as="h4" size="xs">
                Project :
              </Heading>
              <Text>{project}</Text>
              <Heading as="h4" size="xs">
                Tech Stack :
              </Heading>
              <Text>{techStack}</Text>
            </TabPanel>
          )
        )}
      </TabPanels>
    </Tabs>
  );
};

export default ProjectsTabs;
