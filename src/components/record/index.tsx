import React, { createContext, useState } from 'react';
import { PatientRecord, SetState } from '../../utils/types';
import { Advice } from './advice';
import { BioData } from './bioData';
import { Examination } from './examination';
import { MedicalBioData } from './medicalBioData';
import { PreviewContent } from '../preview';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export interface RecordContextType {
  patientRecord: PatientRecord;
  setPatientRecord: SetState<PatientRecord>;
}

export const RecordContext = createContext<RecordContextType | null>(null);

export const RecordForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [patientRecord, setPatientRecord] = useState<PatientRecord>({});

  return (
    <RecordContext.Provider value={{ patientRecord, setPatientRecord }}>
      <BioData />
      <MedicalBioData />
      <Examination />
      <Advice />
      <Button onClick={onOpen} mt={3} colorScheme='blue'>
        Preview
      </Button>
      <Modal size='full' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className='mt-5' />
            <PreviewContent
              patientBioData={patientRecord.bioData || {}}
              patientRecord={patientRecord}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </RecordContext.Provider>
  );
};
