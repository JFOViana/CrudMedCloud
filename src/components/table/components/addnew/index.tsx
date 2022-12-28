import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal, ModalContent } from "../../../radixModalComponent";
import { MdControlPoint } from "react-icons/md";
import { FormContainer, MainContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useMutationQuery } from "../../../../services/hooks/useMutationQuery";
import { format } from "date-fns";
import { usePatient } from "../../../../hooks/patientHooks";

interface inputProps {
  name: string;
  birth_date: Date;
  email: string;
  address: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("O Nome é obrigatório"),
  birth_date: Yup.string().required("A Data de Nascimento é obrigatória"),
  email: Yup.string().required("O E-mail é obrigatório"),
  address: Yup.string().required("O Endereço é obrigatório"),
});

interface addNewProps {
  refetch?(): void;
  data?: any;
  isOpen?: boolean;
  onClose?(value: boolean): void;
}

const AddNewPatient = ({ refetch, data, isOpen, onClose }: addNewProps) => {
  const [open, setOpen] = useState(false);
  const { onAddPatient, onRemovePatient, onUpdatePatient } = usePatient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      ...data,
      birth_date: data?.birth_date
        ? format(new Date(data?.birth_date), "yyyy-MM-dd")
        : "",
    },
  });

  const { mutate } = useMutationQuery("todos");

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    }
  }, [isOpen]);

  const onSubmit = (formData: any) => {
    if (data) {
      onUpdatePatient(formData);
      setOpen(false);
      onClose?.(!open);
      reset();
      return;
    }

    onAddPatient({ id: Math.floor(Math.random() * 10000 + 1), ...formData });
    setOpen(false);
    onClose?.(!open);
    reset();
  };

  const onRemove = () => {
    onRemovePatient(data?.id);
    setOpen(false);
    onClose?.(!open);
    reset();
  };

  const handleOpenchange = () => {
    setOpen(!open);
    onClose?.(!open);
  };

  return (
    <MainContainer>
      <Modal open={open} onOpenChange={handleOpenchange}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="call-btn"
        >
          <MdControlPoint /> Adicionar Pacientes
        </button>
        <ModalContent title="Adicionar Pacientes">
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <div className="inputContainer">
              <div className="inputdiv">
                <label>Nome</label>
                <input placeholder="Nome" {...register("name")} />
                {errors.name?.message && (
                  <p className="error-message">{errors.name?.message}</p>
                )}
              </div>
              <div className="inputdiv">
                <label>Data de Nascimento</label>
                <input type="date" {...register("birth_date")} />
                {errors.birth_date?.message && (
                  <p className="error-message">{errors.birth_date?.message}</p>
                )}
              </div>
              <div className="inputdiv">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="error-message">{errors.email?.message}</p>
                )}
              </div>
              <div className="inputdiv">
                <label>Endereço</label>
                <input placeholder="Endereço" {...register("address")} />
                {errors.address?.message && (
                  <p className="error-message">{errors.address?.message}</p>
                )}
              </div>
            </div>
            <div className="buttonContainer">
              {data ? (
                <button type="button" onClick={onRemove} className="delete-btn">
                  Deletar
                </button>
              ) : (
                <button type="button" onClick={() => setOpen(false)}>
                  Cancelar
                </button>
              )}
              <button className="buttonBlue" type="submit">
                {data ? "Salvar" : "Confirmar"}
              </button>
            </div>
          </FormContainer>
        </ModalContent>
      </Modal>
    </MainContainer>
  );
};

export default AddNewPatient;
