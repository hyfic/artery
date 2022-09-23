import React from 'react';
import moment from 'moment';
import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

export const WaterMark: React.FC = () => {
  const doctorName = localStorage.getItem('doctorName');
  const doctorDetails = localStorage.getItem('doctorDetails');

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      {doctorName || doctorDetails ? (
        <Flex direction='column'>
          <Text fontSize='lg' fontWeight='medium'>
            {doctorName}
          </Text>
          <Text>{doctorDetails}</Text>
        </Flex>
      ) : (
        <Flex alignItems='center'>
          <Avatar src='https://raw.githubusercontent.com/octoi/heartbeat/main/website/assets/logo.svg' />
          <Flex ml={2} alignItems='center'>
            <Heading className='text-2xl'>Heart</Heading>
            <Heading className='text-2xl' color='teal.400'>
              Beat
            </Heading>
          </Flex>
        </Flex>
      )}
      <Flex direction='column' alignItems='end'>
        <Text>{moment(Date.now()).format('DD/MM/YYYY')}</Text>
        <Text>{moment(Date.now()).format('h:mm A')}</Text>
      </Flex>
    </Flex>
  );
};
