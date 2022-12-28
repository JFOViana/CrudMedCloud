import styled from "styled-components";

export const MainContainer = styled.div`
  .call-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: white;
    background-color: #1888d9;
    transition: 0.3s;
    &:hover {
      background-color: #127ac4;
    }
  }
`;

export const FormContainer = styled.form`
  .error-message {
    color: #800617;
    font-size: 10px;
    line-height: 1em;
  }

  .delete-btn {
    border: 1px solid #800617 !important;
    color: #800617 !important;
    transition: 0.3s;
    background-color: transparent;

    &:hover {
      color: white !important;
      background-color: #800617 !important;
    }
  }

  .inputContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .inputdiv {
    display: flex;
    flex-direction: column;

    label {
      color: #748089;
      font-size: 16px;
    }

    input {
      border: 1px rgba(216, 215, 215, 1) solid;
      padding: 10px;
      border-radius: 9px;
      color: #748089;
      font-size: 14px;
      min-width: 300px;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;

    button {
      color: rgba(116, 128, 137, 1);
      border: 1px rgba(216, 215, 215, 1) solid;
      transition: 0.3s;

      &:hover {
        color: white;
        background-color: #0b6eb5;
        border: 1px #0b6eb5 solid;
      }
    }
  }

  .buttonBlue {
    background-color: #009adf;
    color: white !important;
    border: 1px #009adf solid !important;
  }
`;
