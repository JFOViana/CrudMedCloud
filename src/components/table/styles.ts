import styled, { keyframes } from "styled-components";

const entranceAnimation = keyframes`
from{
    opacity:0;    
}
to{
    opacity:1;
}
`;
export const Container = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  .title-container {
    display: flex;
    align-items: center;
    gap: 36px;

    h1 {
      line-height: 1em;
    }
  }

  .actions-container {
    display: flex;
    align-items: center;
    gap: 30px;

    button {
      color: #647582;
      font-size: large;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .refresh-table {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 9px;
      svg {
        font-size: 16px;
      }
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 23px;
  position: relative;

  .table-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .main-table-grid {
    background: none;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    overflow: hidden;
    color: #3f4d58;

    .InovuaReactDataGrid__header-wrapper__fill {
      border: 0;
    }

    .selectedRow-active {
      border-radius: 8px;
    }

    div[data-name="sizer"] {
      min-height: 0px !important;
    }

    .InovuaReactDataGrid__header {
      border-radius: 12px 12px 0px 0px;

      .InovuaReactDataGrid__column-header__content {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        color: white;
      }

      .InovuaReactDataGrid__column-header__resize-wrapper {
        border-left: 0;
        background-color: #009adf;
        border-right: 0;
      }
    }

    .InovuaReactDataGrid__row-cell-wrap {
    }

    .InovuaReactDataGrid__cell {
      border-bottom: 0;
    }

    .InovuaReactDataGrid__row {
      cursor: pointer;

      border: solid rgba(230, 231, 233, 1);
      border-width: 1px 0;
      animation: 0.4s ${entranceAnimation} ease;

      .InovuaReactDataGrid__cell {
        border-left: 0;
        border-right: 0;

        .InovuaReactDataGrid__cell__content {
        }
      }
    }

    .InovuaReactDataGrid__row--last {
      background: none;

      .InovuaReactDataGrid__row-cell-wrap {
        border-radius: 0 0 12px 12px;
        background: #fff;
      }
    }

    .inovua-react-scroll-container__scroller {
      align-items: flex-end;
    }

    .inovua-react-pagination-toolbar.inovua-react-pagination-toolbar {
      border: 0;
      background: none;
    }
  }
`;

export const Paginate = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 31px;
  align-items: center;
  justify-content: flex-end;

  .page-to-go {
    input {
      width: 50px;
      margin-left: 8px;
      border-radius: 4px;
      padding: 1px 7px;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  .pagination-buttons {
    display: flex;
    gap: 10px;

    li {
      border-radius: 4px;
      a {
        width: 100%;
        border-radius: 4px;
        height: 100%;
        padding: 1px 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        cursor: pointer;
      }

      svg {
        height: 12px;
      }
    }

    .pagination-disabled {
      svg {
      }
    }

    .pagination-active {
      a {
      }
    }
  }

  .pagination-break.pagination-break {
    border: 0;

    a {
      background: none;
    }
  }
`;
