import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Link,
  useColorMode,
  Select,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

export const Settings: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  const [savedDoctorName, setSavedDoctorName] = useState(
    localStorage.getItem('doctorName') || ''
  );
  const [savedDoctorDetails, setSavedDoctorDetails] = useState(
    localStorage.getItem('doctorDetails') || ''
  );

  const [doctorName, setDoctorName] = useState(savedDoctorName);
  const [doctorDetails, setDoctorDetails] = useState(savedDoctorDetails);

  return (
    <>
      <IconButton
        aria-label='settings'
        icon={<AiOutlineMenu className='text-xl' />}
        variant='ghost'
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>

          <DrawerBody>
            <div className='w-fit'>
              <h2 className='font-medium text-lg'>Appearance</h2>
              <Select
                mt={3}
                variant='filled'
                value={colorMode}
                onChange={(e) => setColorMode(e.target.value)}
              >
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
              </Select>
            </div>
            <div className='mt-5'>
              <h2 className='font-medium text-lg'>Doctor details</h2>
              <Input
                type='text'
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                variant='filled'
                mt={3}
                placeholder='Doctor name'
              />
              <Textarea
                value={doctorDetails}
                onChange={(e) => setDoctorDetails(e.target.value)}
                variant='filled'
                mt={3}
                placeholder='Doctor details'
              />
              <Button
                mt={3}
                colorScheme='blue'
                disabled={
                  doctorName === savedDoctorName &&
                  doctorDetails === savedDoctorDetails
                }
                onClick={() => {
                  localStorage.setItem('doctorName', doctorName);
                  localStorage.setItem('doctorDetails', doctorDetails);

                  setSavedDoctorName(doctorName);
                  setSavedDoctorDetails(doctorDetails);
                }}
              >
                Save details
              </Button>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Link className='mr-1' href='https://octoi.github.io/heartbeat'>
              HeartBeat
            </Link>
            Artery v1.0.0
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
