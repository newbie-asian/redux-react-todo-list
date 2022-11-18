import { Box, Button, Container } from '@mui/material'
import React from 'react'
import UseAddForm from '../../components/addForm/UseAddForm'
import UseTodoGrid from '../../components/grid/UseTodoGrid'

const Dashboard = () => {
  return (
    <Container maxWidth="xl"  sx={{ p: 4, }}>
      <Box>
        <UseAddForm />
      </Box>

      <Box>
        <UseTodoGrid />
      </Box>
    </Container>
  )
}

export default Dashboard