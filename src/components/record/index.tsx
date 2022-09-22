import React, { createContext, useState } from 'react';
import { PatientRecord, SetState } from '../../utils/types';
import { BioData } from './bioData';
import { MedicalBioData } from './medicalBioData';

export interface RecordContextType {
  patientRecord: PatientRecord;
  setPatientRecord: SetState<PatientRecord>;
}

export const RecordContext = createContext<RecordContextType | null>(null);

export const RecordForm: React.FC = () => {
  const [patientRecord, setPatientRecord] = useState({});

  return (
    <RecordContext.Provider value={{ patientRecord, setPatientRecord }}>
      <BioData />
      <MedicalBioData />
    </RecordContext.Provider>
  );
};
