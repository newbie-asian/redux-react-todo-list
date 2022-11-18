import React from 'react';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineOutlined } from '@mui/icons-material';

const columns = [
  {
    field: "id",
    flex: 1,
    headerName: "ID"
  },
  {
    field: "title",
    flex: 1,
    headerName: "Title"
  },
  {
    field: "description",
    flex: 2,
    headerName: "Description"
  },
  {
    field: "created_date",
    flex: 1,
    headerName: "Created Date"
  },
  {
    field: "deadline",
    flex: 1,
    headerName: "Deadline"
  },
  {
    field: "status",
    flex: 1,
    headerName: "Status"
  },
  {
    field: "actions",
    flex: 1,
    headerName: "Actions",
    renderCell: (params: any) => {
        console.log(params);

        return  (
          <>
          <Button color="error" onClick={() => {}}><DeleteOutlineOutlined /></Button>
          <Button color="error" onClick={() => {}}><DeleteOutlineOutlined /></Button>
          <Button color="error" onClick={() => {}}><DeleteOutlineOutlined /></Button>
          </>
        )

    }
  },
]

const rows = [
  {
    id: "001",
    title: "Buy Buwad",
    description: "Buy buwad in Carbon",
    created_date: "11-18-22",
    deadline: "11-19-22",
    status: "Pending",
    
  }
]

const TodoGrid = () => {
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  )
}

export default TodoGrid