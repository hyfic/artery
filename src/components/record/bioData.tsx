import React, { useContext, useEffect, useState } from 'react';
import { Select, SimpleGrid } from '@chakra-ui/react';
import { RecordContext, RecordContextType } from '.';
import { TextInput } from '../common/textInput';

export const BioData: React.FC = () => {
  const { patientRecord, setPatientRecord } = useContext(
    RecordContext
  ) as RecordContextType;

  const patientBioData = patientRecord.bioData;

  const [name, setName] = useState(patientBioData?.name || '');
  const [age, setAge] = useState(patientBioData?.age || '');
  const [sex, setSex] = useState(patientBioData?.sex || 'Male');
  const [address, setAddress] = useState(patientBioData?.address || '');

  useEffect(() => {
    setPatientRecord({
      ...patientRecord,
      bioData: {
        name,
        age,
        sex,
        address,
      },
    });
  }, [name, age, sex, address]);

  return (
    <div className='mt-5'>
      <h2 className='mt-3 text-2xl font-medium'>Biodata</h2>
      <SimpleGrid mt={2} columns={{ sm: 1, md: 2, lg: 3 }} gap={2}>
        <TextInput title='Name' value={name} setValue={setName} />
        <TextInput title='Age' value={age} setValue={setAge} />
        <div>
          <h2 className='mb-2 text-md'>Gender</h2>
          <Select
            variant='filled'
            value={sex}
            defaultValue={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </Select>
        </div>
      </SimpleGrid>
      <TextInput
        title='Address'
        value={address}
        setValue={setAddress}
        className='mt-5'
        textArea
      />
    </div>
  );
};
