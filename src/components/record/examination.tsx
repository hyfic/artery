import React, { useContext, useEffect, useState } from 'react';
import { Diagnosis } from './diagnosis';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { TextInput } from '../common/textInput';
import { NumberInput } from '../common/numberInput';
import { RecordContext, RecordContextType } from '.';

export const Examination: React.FC = () => {
  const { patientRecord, setPatientRecord } = useContext(
    RecordContext
  ) as RecordContextType;

  let patientExamination = patientRecord.examination;

  const [generalExamination, setGeneralExamination] = useState(
    patientExamination?.generalExamination || ''
  );
  const [pulseRate, setPulseRate] = useState(
    patientExamination?.vitals?.pulseRate || ''
  );
  const [systolic, setSystolic] = useState(
    patientExamination?.vitals?.bloodPressure?.systolic || ''
  );
  const [diastolic, setDiastolic] = useState(
    patientExamination?.vitals?.bloodPressure?.diastolic || ''
  );
  const [temperature, setTemperature] = useState(
    patientExamination?.vitals?.temperature || ''
  );
  const [respiratoryRate, setRespiratoryRate] = useState(
    patientExamination?.vitals?.respiratoryRate || ''
  );
  const [oxygenSaturation, setOxygenSaturation] = useState(
    patientExamination?.vitals?.oxygenSaturation || ''
  );
  const [rs, setRs] = useState(
    patientExamination?.systemicExamination?.rs || ''
  );
  const [cvs, setCvs] = useState(
    patientExamination?.systemicExamination?.cvs || ''
  );
  const [git, setGit] = useState(
    patientExamination?.systemicExamination?.git || ''
  );
  const [cns, setCns] = useState(
    patientExamination?.systemicExamination?.cns || ''
  );
  const [musculoskeletal, setMusculoskeletal] = useState(
    patientExamination?.systemicExamination?.musculoskeletal || ''
  );
  const [ddsIfAny, setDdsIfAny] = useState(
    patientExamination?.systemicExamination?.ddsIfAny || ''
  );
  const [diagnosis, setDiagnosis] = useState<string[]>(
    patientExamination?.systemicExamination?.diagnosis || []
  );

  useEffect(() => {
    setPatientRecord({
      ...patientRecord,
      examination: {
        generalExamination,
        vitals: {
          pulseRate,
          bloodPressure: {
            systolic,
            diastolic,
          },
          oxygenSaturation,
          temperature,
          respiratoryRate,
        },
        systemicExamination: {
          rs,
          cvs,
          git,
          cns,
          musculoskeletal,
          ddsIfAny,
          diagnosis,
        },
      },
    });
  }, [
    generalExamination,
    pulseRate,
    systolic,
    diastolic,
    respiratoryRate,
    oxygenSaturation,
    temperature,
    rs,
    cvs,
    git,
    cns,
    musculoskeletal,
    ddsIfAny,
    diagnosis,
  ]);

  return (
    <div className='mt-5'>
      <h2 className='mt-3 text-2xl font-medium'>Examination</h2>
      <TextInput
        title='General examination'
        value={generalExamination}
        setValue={setGeneralExamination}
        textArea
        className='mt-5'
      />
      <h2 className='mt-3 text-lg font-medium'>Vitals</h2>
      <SimpleGrid mt={2} columns={{ sm: 1, md: 2, lg: 3 }} gap={2}>
        <NumberInput
          title='Pulse rate (/min)'
          value={pulseRate}
          setValue={setPulseRate}
        />
        <div>
          <h2 className='mb-2 text-md'>Blood pressure (mmHg)</h2>
          <Flex alignItems='center'>
            <TextInput
              title='Systolic'
              value={systolic}
              setValue={setSystolic}
              disableTitle
            />
            <p className='mx-2 text-2xl'>/</p>
            <TextInput
              title='Diastolic'
              value={diastolic}
              setValue={setDiastolic}
              disableTitle
            />
          </Flex>
        </div>
        <NumberInput
          title='Respiratory rate (/min)'
          value={respiratoryRate}
          setValue={setRespiratoryRate}
        />
        <NumberInput
          title='Temperature (°F)'
          value={temperature}
          setValue={setTemperature}
        />
        <NumberInput
          title='SpO2 (%)'
          value={oxygenSaturation}
          setValue={setOxygenSaturation}
        />
      </SimpleGrid>
      <h2 className='mt-3 text-lg font-medium'>Systemic examination</h2>
      <SimpleGrid mt={2} columns={{ sm: 1, md: 2, lg: 3 }} gap={2}>
        <TextInput title='R.S' value={rs} setValue={setRs} textArea />
        <TextInput title='C.V.S' value={cvs} setValue={setCvs} textArea />
        <TextInput title='G.I.T' value={git} setValue={setGit} textArea />
        <TextInput title='C.N.S' value={cns} setValue={setCns} textArea />
        <TextInput
          title='Musculoskeletal'
          value={musculoskeletal}
          setValue={setMusculoskeletal}
          textArea
        />
        <TextInput
          title='DDs if any'
          value={ddsIfAny}
          setValue={setDdsIfAny}
          textArea
        />
      </SimpleGrid>
      <h2 className='mt-3 text-lg font-medium'>Provisional/Find diagnosis</h2>
      <Diagnosis diagnosis={diagnosis} setDiagnosis={setDiagnosis} />
    </div>
  );
};
