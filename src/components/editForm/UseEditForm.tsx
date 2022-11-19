import React, { useState } from 'react'
import EditForm from './EditForm';
import { IStateTodo, IPropsUseEditForm } from './types';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';

const UseEditForm = (props: IPropsUseEditForm) => {
  const { showModal, handleShowModal, rowData } = props;
  const [todo, setTodo] = useState({

  })

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
    <EditForm showModal={showModal} handleShowModal={handleShowModal} rowData={rowData} handleInputChange={handleInputChange} handleInputDateChange={handleInputDateChange} />
  )
}

const mapStateToProps = (state: any) => {
  return {
      todos: state.todos
  }
}

const mapDispatchToProps = (dispatch: any) => {

  return {
      updateTodo: (payload: IStateTodo) => dispatch(actionCreators.updateTodo(payload))
  }
}

export default UseEditForm