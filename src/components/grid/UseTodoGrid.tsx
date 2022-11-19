import React, { useState } from 'react'
import TodoGrid from './TodoGrid'

const UseTodoGrid = () => {
  // this states are for the action buttons
  const [showModal, setShowModal] = useState(false);
  
  const [rowData, setRowData] = useState("")
  // this handler will get the unique ID of a todo
  const handleGetRowData = (evt: React.SyntheticEvent, params: any) => {
    console.log("%c Line:11 🥪 params", "color:#fca650", params);
    console.log("%c Line:11 🍊 evt", "color:#f5ce50", evt);
    setRowData(params.todo_id)
  }

  const handleShowModal = (isOpen: boolean) => {
    setShowModal(isOpen);
  }

  return (
    <TodoGrid handleShowModal={handleShowModal} showModal={showModal} handleGetRowData={handleGetRowData} rowData={rowData} />
  )
}

export default UseTodoGrid