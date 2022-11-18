import React, { useState } from 'react'
import AddForm from './AddForm';
import { IStateTodo } from './types';

const UseAddForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState<IStateTodo>({
    id: "",
    title: "",
    description: "",
    created_date: new Date(),
    deadline: null,
    status: "Pending"
  });

  const handleShowModal = (isOpen: boolean) => {
    setShowModal(isOpen)
  }

  const handleInputDateChange = (newValue: Date | null) => {
    setTodo((prevState: IStateTodo) => {
      return {
        ...prevState,
        deadline: newValue
      }
    })
  }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setTodo((prevState: IStateTodo) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <AddForm handleShowModal={handleShowModal} showModal={showModal} todo={todo} handleInputChange={handleInputChange} handleInputDateChange={handleInputDateChange} />
  )
}

export default UseAddForm