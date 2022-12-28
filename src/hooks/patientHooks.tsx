/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import React, { createContext, useContext, useEffect, useState } from "react";

type PatientType = {
  id: string;
  name: string;
  email: string;
  birth_date: Date;
  address: string;
};

interface PatientState {
  patient: PatientType[];
}

export interface PatientContextData {
  patient: PatientType[];
  onAddPatient(data: PatientType): void;
  onRemovePatient(id: string): void;
  onUpdatePatient(data: PatientType): void;
}

export const PatientContext = createContext<PatientContextData>(
  {} as PatientContextData
);

export const PatientProvider = ({ children }: any) => {
  const [patient, setPatient] = useState<PatientType[]>([]);

  useEffect(() => {
    const patientList = localStorage.getItem("patientData");

    if (patientList) {
      setPatient(JSON.parse(patientList));
    }
  }, []);

  const onAddPatient = (data: PatientType) => {
    setPatient((old) => {
      const addNew = [...old, data];

      localStorage.setItem("patientData", JSON.stringify(addNew));
      return addNew;
    });
  };

  const onRemovePatient = (id: string) => {
    setPatient((old) => {
      const removed = old?.filter((e) => e.id !== id);
      console.log(removed);
      localStorage.setItem("patientData", JSON.stringify(removed));
      return removed;
    });
  };

  const onUpdatePatient = (data: PatientType) => {
    setPatient((old: any) => {
      const findArray = old?.map((e) => {
        if (e.id === data.id) {
          return data;
        }
        return e;
      });

      const updated = findArray;
      console.log(updated);
      localStorage.setItem("patientData", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <PatientContext.Provider
      value={{
        patient,
        onAddPatient,
        onRemovePatient,
        onUpdatePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export function usePatient(): PatientContextData {
  const context = useContext(PatientContext);
  return context;
}
