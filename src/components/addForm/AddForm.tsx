import React from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { IPropsAddFormAndDialog } from './types';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AddDialog from './AddDialog';

const AddForm = (props: IPropsAddFormAndDialog) => {
  const { handleShowModal, showModal, handleInputChange, handleInputDateChange, todo } = props;

  return (
    <>
      <Button variant="contained" onClick={() => {handleShowModal(true)}} sx={{ mb: 4}}>Add New Todo</Button>
      <AddDialog handleShowModal={handleShowModal} showModal={showModal} handleInputChange={handleInputChange} handleInputDateChange={handleInputDateChange} todo={todo} />
    </>
  )
}

export default AddForm