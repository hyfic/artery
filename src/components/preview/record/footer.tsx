import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Text>
        Printed using{' '}
        <span className='font-medium'>
          Heart<span className='text-teal-400'>Beat</span>
        </span>
      </Text>
      <img
        src='https://raw.githubusercontent.com/octoi/heartbeat/main/website/assets/logo.svg'
        alt='HeartBeat'
        className='w-6 h-6'
      />
    </Flex>
  );
};
