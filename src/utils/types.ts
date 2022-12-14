import React from 'react';
import { PropsWithChildren } from 'react';

export type ReactComponent<Props = {}> = React.FC<PropsWithChildren<Props>>;

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface PatientBioData {
  name?: string;
  age?: string;
  sex?: string;
  address?: string;
}

export interface PatientMedicalBioData {
  height?: string;
  heightUnit?: 'Centimeter' | 'Metre' | 'Inch';
  weight?: string;
  bmi?: string;
  allergyToMedicine?: {
    status?: boolean;
    medicines?: string;
  };
  remark?: string;
  chiefComplaint?: string;
  pastMedicalHistory?: string;
  personalHistory?: string;
  familyHistory?: string;
  treatmentHistory?: string;
}

export interface PatientVitals {
  pulseRate?: string;
  bloodPressure?: {
    systolic?: string;
    diastolic?: string;
  };
  respiratoryRate?: string;
  oxygenSaturation?: string;
  temperature?: string;
}

export interface PatientSystemicExamination {
  rs?: string;
  cvs?: string;
  git?: string;
  cns?: string;
  musculoskeletal?: string;
  ddsIfAny?: string;
  diagnosis?: string[];
}

export interface PatientExamination {
  generalExamination?: string;
  vitals?: PatientVitals;
  systemicExamination?: PatientSystemicExamination;
}

export interface PatientMedicine {
  medicineName: string;
  frequency: string;
  time: string;
  duration: string;
}

export interface PatientAdvice {
  medicines?: PatientMedicine[];
  advice?: string;
  investigationToDo?: string;
}

export interface PatientRecord {
  bioData?: PatientBioData;
  medicalBioData?: PatientMedicalBioData;
  examination?: PatientExamination;
  advice?: PatientAdvice;
}
