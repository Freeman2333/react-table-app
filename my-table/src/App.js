import React from 'react';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { ColumnHiding } from './components/ColumnHiding';
import { ColumnOrder } from './components/CoumnOrder';
import { PaginationTable } from './components/PaginationTable';
import { RowSelection } from './components/RowSelectComponent';

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      <ColumnHiding />
    </div>
  );
}

export default App;
