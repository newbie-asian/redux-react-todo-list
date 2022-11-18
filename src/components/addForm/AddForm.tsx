import React from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { IPropsAddForm } from './types';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const AddForm = (props: IPropsAddForm) => {
  const { handleShowModal, showModal, handleInputChange, handleInputDateChange, todo  } = props;

  return (
    <>
      <Button variant="contained" onClick={() => {handleShowModal(true)}} sx={{ mb: 4}}>Add New Todo</Button>
      <Dialog open={showModal} onClose={() => handleShowModal(false)}>
          <DialogTitle>NEW TODO DETAILS</DialogTitle>
            <DialogContent >
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{display: "flex", gap: ".8rem", my: ".5rem"} }>
                  <Box>
                    <DateTimePicker
                        label="Created Date"
                        readOnly
                        value={todo.created_date}
                        onChange={(newValue) => handleInputDateChange(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                  </Box>
                  <Box>
                    <DateTimePicker
                      label="Due Date"
                      value={todo.deadline}
                      onChange={(newValue) => handleInputDateChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Box>
                </Box>
                
              </LocalizationProvider>
            </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={() => handleShowModal(false)}>CANCEL</Button>
            <Button variant="contained" color="success" onClick={() => handleShowModal(false)}>SUBMIT</Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default AddForm