import React, { useContext, useEffect, useState } from 'react';
import { Checkbox, Flex, Select, SimpleGrid } from '@chakra-ui/react';
import { RecordContext, RecordContextType } from '.';
import { NumberInput } from '../common/numberInput';
import { TextInput } from '../common/textInput';

enum HeightUnit {
  Centimeter,
  Metre,
  Inch,
}

export const MedicalBioData: React.FC = () => {
  const { patientRecord, setPatientRecord } = useContext(
    RecordContext
  ) as RecordContextType;

  let medicalBioData = patientRecord.medicalBioData;

  const [heightUnit, setHeightUnit] = useState(HeightUnit['Centimeter']);
  const [height, setHeight] = useState(medicalBioData?.height || '');
  const [weight, setWeight] = useState(medicalBioData?.weight || '');
  const [bmi, setBmi] = useState(medicalBioData?.bmi || '0');
  const [allergyToMedicines, setAllergyToMedicines] = useState(
    medicalBioData?.allergyToMedicine?.status || false
  );
  const [allergyMedicines, setAllergyMedicines] = useState(
    medicalBioData?.allergyToMedicine?.medicines || ''
  );
  const [remark, setRemark] = useState(medicalBioData?.remark || '');
  const [chiefComplaint, setChiefComplaint] = useState(
    medicalBioData?.chiefComplaint || ''
  );
  const [pastMedicalHistory, setPastMedicalHistory] = useState(
    medicalBioData?.pastMedicalHistory || ''
  );
  const [personalHistory, setPersonalHistory] = useState(
    medicalBioData?.personalHistory || ''
  );
  const [familyHistory, setFamilyHistory] = useState(
    medicalBioData?.familyHistory || ''
  );
  const [treatmentHistory, setTreatmentHistory] = useState(
    medicalBioData?.treatmentHistory || ''
  );

  useEffect(() => {
    let heightNumber = Number(height);
    const weightNumber = Number(weight);

    if (heightUnit == HeightUnit.Centimeter) {
      heightNumber = heightNumber * 0.01;
    }

    if (heightUnit == HeightUnit.Inch) {
      heightNumber = heightNumber * 0.0254;
    }

    const bmi = weightNumber / (heightNumber * heightNumber);
    setBmi(bmi.toFixed(2));
  }, [height, weight, heightUnit]);

  useEffect(() => {
    setPatientRecord({
      ...patientRecord,
      medicalBioData: {
        heightUnit: HeightUnit[heightUnit].toString() as any,
        height: height,
        weight: weight,
        bmi,
        allergyToMedicine: {
          status: allergyToMedicines,
          medicines: allergyMedicines,
        },
        remark,
        chiefComplaint,
        pastMedicalHistory,
        personalHistory,
        familyHistory,
        treatmentHistory,
      },
    });
  }, [
    heightUnit,
    height,
    weight,
    bmi,
    allergyToMedicines,
    allergyMedicines,
    remark,
    chiefComplaint,
    pastMedicalHistory,
    personalHistory,
    familyHistory,
    treatmentHistory,
  ]);

  return (
    <div>
      <h2 className='mt-3 text-2xl font-medium'>Medical biodata</h2>
      <SimpleGrid mt={3} columns={{ sm: 1, md: 2, lg: 3 }} gap={2}>
        <div>
          <h2 className='mb-2 text-md'>
            Height (
            {HeightUnit[heightUnit][0] == 'C'
              ? 'CM'
              : HeightUnit[heightUnit][0]}
            )
          </h2>
          <Flex alignItems='center' justifyContent='space-between'>
            <NumberInput disabledTitle value={height} setValue={setHeight} />
            <Select
              variant='filled'
              width='28%'
              ml={2}
              value={heightUnit}
              onChange={(e) => setHeightUnit(parseInt(e.target.value))}
            >
              <option value={HeightUnit.Centimeter}>CM</option>
              <option value={HeightUnit.Metre}>M</option>
              <option value={HeightUnit.Inch}>I</option>
            </Select>
          </Flex>
        </div>
        <NumberInput title='Weight (Kg)' value={weight} setValue={setWeight} />
        <TextInput title='BMI' value={bmi} setValue={() => {}} disabled />
      </SimpleGrid>
      <div className='mt-3'>
        <Checkbox
          isChecked={allergyToMedicines}
          size='lg'
          onChange={(e) => setAllergyToMedicines(e.target.checked)}
        >
          Allergy to medicines
        </Checkbox>
        {allergyToMedicines && (
          <TextInput
            title='Allergic medicines'
            value={allergyMedicines}
            setValue={setAllergyMedicines}
            textArea
            className='mt-5'
          />
        )}
      </div>
      <TextInput
        title='Remarks'
        value={remark}
        setValue={setRemark}
        textArea
        className='mt-5'
      />
      <SimpleGrid mt={3} columns={{ sm: 1, lg: 2 }} gap={2}>
        <TextInput
          title='Chief complaints'
          value={chiefComplaint}
          setValue={setChiefComplaint}
          textArea
        />
        <TextInput
          title='Past medical history'
          value={pastMedicalHistory}
          setValue={setPastMedicalHistory}
          textArea
        />
        <TextInput
          title='Personal history'
          value={personalHistory}
          setValue={setPersonalHistory}
          textArea
        />
        <TextInput
          title='Family history'
          value={familyHistory}
          setValue={setFamilyHistory}
          textArea
        />
        <TextInput
          title='Treatment history'
          value={treatmentHistory}
          setValue={setTreatmentHistory}
          textArea
        />
      </SimpleGrid>
    </div>
  );
};
