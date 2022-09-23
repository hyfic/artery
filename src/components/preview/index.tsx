import React, { useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { Header } from './header';
import { RecordPreview } from './record';
import { useReactToPrint } from 'react-to-print';
import { PatientBioData, PatientRecord } from '../../utils/types';

interface Props {
  patientBioData: PatientBioData;
  patientRecord: PatientRecord;
  onClose: any;
}

export const PreviewContent: React.FC<Props> = ({
  patientBioData,
  patientRecord,
  onClose,
}) => {
  const toast = useToast();
  const printContentRef = useRef<any>();

  const [printLoading, setPrintLoading] = useState(false);
  const [tableVariant, setTableVariant] = useState('striped');

  const handlePrint = useReactToPrint({
    content: () => printContentRef.current,
    documentTitle: `${patientBioData?.name}` || 'patient_details',
    onBeforeGetContent() {
      setPrintLoading(true);
    },
    pageStyle: `
      @page { 
        size: auto;  
        margin: 0;
      }
      
      @media print { 
        body { 
          -webkit-print-color-adjust: exact; 
        } 
      }
      
      @print {
        @page :footer {
            display: none
        }
    
        @page :header {
            display: none
        }
      }

      @media print {
          @page {
              margin-top: 0;
              margin-bottom: 0;
          }
          body {
              padding-top: 72px;
              padding-bottom: 72px;
          }

          @page { 
            margin-top: 30px;
            margin-bottom: 20px;
          }

          @page :first {
            margin-top: 0;
          }
      }
      `,
    onAfterPrint() {
      setPrintLoading(false);
    },
    onPrintError(err) {
      setPrintLoading(false);
      toast({
        title: 'Failed to print',
        description: err,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  return (
    <div>
      <Header
        printContent={handlePrint}
        printLoading={printLoading}
        tableVariant={tableVariant}
        setTableVariant={setTableVariant}
        onClose={onClose}
      />
      <RecordPreview
        patientBioData={patientBioData || {}}
        patientRecord={patientRecord}
        printContentRef={printContentRef}
        tableVariant={tableVariant}
      />
    </div>
  );
};
