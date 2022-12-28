import styled, { keyframes } from "styled-components";

const entranceAnimation = keyframes`
from{
    opacity:0;  
    transform :rotateY(30deg) ;
}
to{
    opacity:1;
    transform :rotateY(0deg) ;
}
`;

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .table_header {
    display: flex;
    justify-content: space-between;

    .right-side {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    h1 {
      line-height: 1em;
      font-size: 26px;
      color: #4d4d4d;
    }
  }

  .main-list {
    display: flex;
    flex-direction: column;
    padding: 0;

    li {
      list-style: none;
      animation: 0.5s ${entranceAnimation};

      button {
        width: 100%;
        display: grid;
        color: unset;
        padding: 0;
      }
    }
    ul {
      display: flex;
      gap: 10px;
      align-items: center;
      min-height: 40px;
      padding: 10px 20px;
      background-color: white;
      transition: 0.3s;
      cursor: pointer;

      border-style: solid;
      border-color: #e8e8e8;
      border-width: 0 0 1px;

      &:hover {
        background-color: #f5f5f5;
      }

      li {
        flex: 1;
        list-style: none;
      }
    }
  }
`;
