When using DataGrid slots via ui-library which uses DataGrid causes this problem:
```MUI: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.```

Steps to reproduce:

#### UI-library:

0 - Resolve Licence Key

1 - npm install

2 - npm run rollup

3 - npm pack


#### React APP:

1 - install ui-library

2 - npm run start

In App.tsx adding GridToolbar reproduces the problem

```
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
      /*slots={{    // uncomment this to reproduce the Error
          toolbar: GridToolbar
      }}*/
  />
```




