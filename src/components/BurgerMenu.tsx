import { FC } from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay,  Link, useBoolean } from '@chakra-ui/react';
import { TbMenu } from 'react-icons/tb';
import { SECTIONS } from 'utils';


const BurgerMenu: FC = () => {
    const [isOpen, setIsOpen] = useBoolean(false)
    const menuItems = Object.values(SECTIONS)
    const onClose = (e: React.MouseEvent<HTMLElement>) => {
      if(e.target instanceof HTMLElement && e.target.nodeName === 'A') setIsOpen.off()
    }
  return (
    <>
      <Button 
        onClick={setIsOpen.on}
        pos='fixed'
        right='4'
        top='4'
        zIndex={10}
        bg='accentBackground'
        color='text'>
        <TbMenu/>
      </Button>
      <Drawer isOpen={isOpen} onClose={setIsOpen.off} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent bg='cardBackground' textStyle="h2">
        <DrawerCloseButton />
        <DrawerBody onClick={onClose}>
          {menuItems.map(item => <Box key={item} py='2'>
            <Link href={`#${item}`}>{item}</Link>
            </Box>)}
        </DrawerBody>
        </DrawerContent>
      </Drawer>
      </>
  );
};

export default BurgerMenu;
