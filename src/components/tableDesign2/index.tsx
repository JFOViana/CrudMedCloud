import { format } from "date-fns";
import React from "react";
import AddNewPatient from "../table/components/addnew";
import { Container } from "./styles";

interface tableProps {
  dataSource: any[];
  title: string;
  onRowClick?(data): void;
}

const MinimalistTable = ({ dataSource, onRowClick, title }: tableProps) => {
  return (
    <Container>
      <div className="table_header">
        <h1>{title}</h1>

        <div className="right-side">
          <AddNewPatient />
        </div>
      </div>

      <ul className="main-list">
        {dataSource.map((e, i) => (
          <li key={i} style={{ animationDelay: i * 0.2 + "s" }}>
            <button onClick={() => onRowClick?.(e)}>
              <ul>
                <li>{e?.name}</li>
                <li>{e?.email}</li>
                <li>{format(new Date(e.birth_date), "dd/MM/yyyy")}</li>
                <li>{e?.address}</li>
              </ul>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MinimalistTable;
