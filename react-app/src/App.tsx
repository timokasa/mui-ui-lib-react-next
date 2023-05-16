import  * as React from 'react';
import { BgDataGrid } from 'ui-library';
import {GridToolbar} from "@mui/x-data-grid-pro";

function App() {

  const users = [
    { id: '1', firstname: 'Bob', lastname: 'Mustermann' },
    { id: '2', firstname: 'Alice', lastname: 'Musterfrau' },
    { id: '3', firstname: 'Ellen', lastname: 'Taylor' },
    { id: '4', firstname: 'Theodore', lastname: 'Fink' },
    { id: '5', firstname: 'Alisson', lastname: 'Burns' }
  ];

  const columns = [
    { field: 'firstname', headerName: 'Vorname', flex: 1 },
    { field: 'lastname', headerName: 'Nachname', flex: 1 },
  ];

  return (
      <div className="App">

          <p>Adding GridToolbar causes: Uncaught Error: MUI: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.</p>

         <BgDataGrid
              initialState={{
                  pagination: {
                      paginationModel: {
                          pageSize: 2,
                          page: 0,
                      },
                  },
              }}
              autoHeight={true}
              rows={users}
              columns={columns}
              pageSizeOptions={[2, 3, 5]}
              /*slots={{
                  toolbar: GridToolbar
              }}*/
          />
      </div>
  );
}

export default App;
