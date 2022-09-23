import React from 'react';
import { Flex, Link, useColorMode, Text, Divider } from '@chakra-ui/react';
import HyficLogoWhite from '../assets/hyfic_logo_white.svg';
import HyficLogoBlack from '../assets/hyfic_logo_black.svg';

export const Footer: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex mt={3} mb={10} direction='column'>
      <Divider my={5} />
      <Text className='opacity-40 text-sm'>Powered by</Text>
      <Link href='https://hyfic.github.io' target='_blank'>
        <img
          src={colorMode === 'dark' ? HyficLogoWhite : HyficLogoBlack}
          alt='Hyfic'
          className='w-14 text-red-500 opacity-40 hover:opacity-100'
        />
      </Link>
    </Flex>
  );
};
