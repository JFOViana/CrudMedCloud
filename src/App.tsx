import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home";
import "@inovua/reactdatagrid-community/index.css";
import StyleGlobal from "./style/styleGlobal";
import { PatientProvider } from "./hooks/patientHooks";

const queryClient = new QueryClient();

function App() {
  return (
    <PatientProvider>
      <QueryClientProvider client={queryClient}>
        <StyleGlobal />
        <Home />
      </QueryClientProvider>
    </PatientProvider>
  );
}

export default App;
