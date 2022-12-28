import React, { useState } from "react";
import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { HomeContainer } from "./styles";
import { Modal, ModalContent } from "../../components/radixModalComponent";
import AddNewPatient from "../../components/table/components/addnew";
import MinimalistTable from "../../components/tableDesign2";
import { usePatient } from "../../hooks/patientHooks";

interface todosProps {
  modifyStatusTodo(value): void;
  handleWithEditButtonClick(value): void;
  deleteTodos(value): void;
  todos: any;
}

const columns: TypeColumn[] = [
  {
    name: "name",
    header: "Nome do Paciente",
    minWidth: 100,
    flex: 1,
    headerAlign: "center",
  },

  {
    name: "birth_date",
    header: "Data de Nascimento",
    minWidth: 100,
    flex: 1,
    headerAlign: "center",
  },

  {
    name: "email",
    header: "Email",
    minWidth: 100,
    flex: 1,
    headerAlign: "center",
  },
  {
    name: "address",
    header: "Endereço",
    minWidth: 100,
    flex: 1,
    headerAlign: "center",
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const { patient } = usePatient();

  const handleRowClick = (data) => {
    setModalData(data);
    setOpen(true);
  };

  return (
    <>
      <Modal open={open} onOpenChange={() => setOpen(!open)}>
        <ModalContent title={modalData?.name}>
          <AddNewPatient data={modalData} isOpen={open} onClose={setOpen} />
        </ModalContent>
      </Modal>
      <HomeContainer>
        <MinimalistTable
          title="Registro de Pacientes"
          dataSource={patient}
          onRowClick={(data) => handleRowClick(data)}
        />
        {/* <TableComponent
          title="Registro de Pacientes"
          api={{
            url: "/todos",
            query: ["todos"],
          }}
          onRowClick={({ data }) => handleRowClick(data)}
          columns={columns}
        /> */}
      </HomeContainer>
    </>
  );
};

export default Home;
