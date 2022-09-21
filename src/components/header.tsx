import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Settings } from './settings';
import { Flex, IconButton, Tag, TagLabel } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex mt={8} alignItems='center' justifyContent='space-between'>
      <Flex alignItems='center'>
        <img
          src='https://raw.githubusercontent.com/octoi/heartbeat/main/website/assets/logo.svg'
          alt='HeartBeat'
          className='w-9'
        />
        <Flex direction='column' ml={2}>
          <h3 className='leading-none font-medium'>
            Heart<span className='text-teal-400'>Beat</span>
          </h3>
          <h2 className='text-2xl font-bold leading-none'>Artery</h2>
        </Flex>
        <Tag ml={2} borderRadius='full'>
          <TagLabel>1.0.0</TagLabel>
        </Tag>
      </Flex>
      <Flex alignItems='center'>
        <a href='https://github.com/hyfic/artery'>
          <IconButton
            aria-label='Github'
            icon={<FaGithub className='text-xl' />}
            variant='ghost'
          />
        </a>
        <Settings />
      </Flex>
    </Flex>
  );
};
