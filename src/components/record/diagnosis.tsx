import React, { useState } from 'react';
import { SetState } from '../../utils/types';
import { TextInput } from '../common/textInput';
import { BiTrash } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';
import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface Props {
  diagnosis: string[];
  setDiagnosis: SetState<string[]>;
}

export const Diagnosis: React.FC<Props> = ({ diagnosis, setDiagnosis }) => {
  const [diagnosisValue, setDiagnosisValue] = useState('');

  return (
    <TableContainer mt={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>Index</Th>
            <Th>Diagnosis</Th>
            <Th>Option</Th>
          </Tr>
        </Thead>
        <Tbody>
          <>
            {diagnosis.map((diagnosisItem, idx) => (
              <Tr key={idx}>
                <Td>{idx + 1}</Td>
                <Td>{diagnosisItem}</Td>
                <Td>
                  <IconButton
                    colorScheme='red'
                    variant='ghost'
                    aria-label='Delete medicine'
                    icon={<BiTrash size={20} />}
                    onClick={() => {
                      let tempDiagnosis = [...diagnosis];
                      tempDiagnosis.splice(idx, 1);
                      setDiagnosis(tempDiagnosis);
                    }}
                  />
                </Td>
              </Tr>
            ))}
            <Tr>
              <Td>{diagnosis.length + 1}</Td>
              <Td>
                <TextInput
                  disableTitle
                  title='Diagnosis'
                  value={diagnosisValue}
                  setValue={setDiagnosisValue}
                />
              </Td>
              <Td>
                <IconButton
                  aria-label='Add diagnosis'
                  variant='ghost'
                  colorScheme='teal'
                  icon={<HiPlus size={20} />}
                  onClick={() => {
                    setDiagnosis([...diagnosis, diagnosisValue]);
                    setDiagnosisValue('');
                  }}
                />
              </Td>
            </Tr>
          </>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
