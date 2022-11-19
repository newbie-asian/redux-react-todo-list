import React from 'react';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineOutlined, CheckCircleOutlineOutlined, ModeEditOutlineOutlined, PanoramaFishEyeRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { IPropsTodoGrid } from './types';
import UseEditForm from '../editForm/UseEditForm';

const TodoGrid = (props: IPropsTodoGrid) => {
  const { handleShowModal, showModal, handleGetRowData, rowData } = props;

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
            <IconButton id='complete' color="success"><CheckCircleOutlineOutlined /></IconButton>
            <IconButton id='edit' color="warning" onClick={(evt) => {
              handleGetRowData(evt, params)
              handleShowModal(true);
            }}><ModeEditOutlineOutlined /></IconButton>
            <IconButton id='delete' color="error"><DeleteOutlineOutlined /></IconButton>
            </>
          )
  
      }
    },
  ]

  const rows = [
    {
      todo_id: "001123",
      title: "Buy Buwad",
      description: "Buy buwad in Carbon",
      created_date: "11-18-22",
      deadline: "11-19-22",
      status: "Pending",
      
    }
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows.map((row, index)=> {
            return {...row, id: `0${index + 1}`}
          })} columns={columns} />
          {showModal && (
            <UseEditForm showModal={showModal} handleShowModal={handleShowModal} handleGetRowData={handleGetRowData} rowData={rowData}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoGrid