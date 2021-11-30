import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Table } from "./Table";

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Table />
      </div>
    </QueryClientProvider>
  );
}

export default App;
