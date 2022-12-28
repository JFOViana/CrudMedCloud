import React, { useEffect, useState } from "react";
import { MdOutlineRefresh, MdControlPoint } from "react-icons/md";
import {
  TypeColumn,
  TypeRowProps,
} from "@inovua/reactdatagrid-community/types";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { TypeOnSelectionChangeArg } from "@inovua/reactdatagrid-community/types/TypeDataGridProps";
import { getQuery } from "../../services/hooks/getQuery";
import { Container, TableContainer, HeaderContainer } from "./styles";
import AddNewPatient from "./components/addnew";
import { clientsList } from "../../pages/home/fakeData";

interface tableProps {
  title?: string;
  columns: TypeColumn[];
  onSelectionChange?: (selected: TypeOnSelectionChangeArg) => void;
  onRowClick?: (rowProps: TypeRowProps, event: MouseEvent) => void;
  api?: {
    url: string;
    query: any[];
    params?: Object;
  };
}

const i18n = {
  pageText: "Página",
  ofText: "de",
  perPageText: "Por página",
  showingText: "Mostrando",
  clearAll: "Limpar todos",
  clear: "Limpar",
  sortAsc: "Ordenar A-z",
  sortDesc: "Ordenar Z-a",
  unsort: "remover ordenação",
};

const TableComponent = ({
  columns,
  api = {
    url: "",
    query: [],
    params: {},
  },
  ...props
}: tableProps) => {
  const [tableRow, setTableRow] = useState<any[]>([]);
  const [tableHeight, setTableHeight] = useState(200);
  const [page, setPage] = useState(1);

  let pageCount = 0;

  const resizeTable = () => {
    const newHeight = (tableRow?.length + 1) * 56;
    setTableHeight(newHeight);
  };

  const { data, refetch } = getQuery(api?.url, [api?.query.join(",")], {
    onError: (err: any) => console.log(err),
    onSuccess: (data) => {
      setTableRow(data);
      resizeTable();
    },
  });

  useEffect(() => {}, [clientsList]);

  return (
    <Container>
      <HeaderContainer>
        <div className="title-container">
          <h1>{props.title}</h1>
        </div>
        <div className="actions-container">
          <button>
            <MdOutlineRefresh /> Refresh
          </button>
          <AddNewPatient refetch={refetch} />
        </div>
      </HeaderContainer>
      <TableContainer>
        <div className="table-container">
          <ReactDataGrid
            columns={columns}
            dataSource={clientsList}
            style={{ minHeight: tableHeight + 1 }}
            showColumnMenuTool={false}
            showZebraRows={false}
            i18n={i18n}
            pagination
            renderPaginationToolbar={() => null}
            minRowHeight={56}
            headerHeight={56}
            limit={9999}
            className="main-table-grid"
            activeRowIndicatorClassName="selectedRow-active"
            footerCellClassName="table-footer"
            {...props}
          />
        </div>
      </TableContainer>
    </Container>
  );
};

export default TableComponent;
