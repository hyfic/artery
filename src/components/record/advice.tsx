import React, { useContext, useEffect, useState } from 'react';
import { AdviceMedicines } from './adviceMedicines';
import { PatientMedicine } from '../../utils/types';
import { RecordContext, RecordContextType } from '.';
import { TextInput } from '../common/textInput';

export const Advice: React.FC = () => {
  const { patientRecord, setPatientRecord } = useContext(
    RecordContext
  ) as RecordContextType;

  const [medicines, setMedicines] = useState<PatientMedicine[]>(
    patientRecord.advice?.medicines || []
  );
  const [advice, setAdvice] = useState(patientRecord.advice?.advice || '');
  const [investigationToDo, setInvestigationToDo] = useState(
    patientRecord.advice?.investigationToDo || ''
  );

  useEffect(() => {
    setPatientRecord({
      ...patientRecord,
      advice: {
        medicines,
        advice,
        investigationToDo,
      },
    });
  }, [advice, medicines, investigationToDo]);

  return (
    <div className='mt-5'>
      <h2 className='mt-3 text-2xl font-medium'>Advice</h2>
      <AdviceMedicines medicines={medicines} setMedicines={setMedicines} />
      <TextInput
        title='Advice'
        value={advice}
        setValue={setAdvice}
        textArea
        className='mt-2'
      />
      <TextInput
        title='Investigation to do'
        value={investigationToDo}
        setValue={setInvestigationToDo}
        textArea
        className='mt-2'
      />
    </div>
  );
};
