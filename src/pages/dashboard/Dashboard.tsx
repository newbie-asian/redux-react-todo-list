import { Box, Button, Container } from '@mui/material'
import React from 'react'
import UseTodoGrid from '../../components/grid/UseTodoGrid'

const Dashboard = () => {
  return (
    <Container>
      <Box>
      <Button variant="contained">Add New Todo</Button>
      </Box>

      <Box>
        <UseTodoGrid />
      </Box>
    </Container>
  )
}

export default Dashboard