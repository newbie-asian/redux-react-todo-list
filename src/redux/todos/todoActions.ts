import { FETCH_ALL_TODOS, ADD_NEW_TODO, UPDATE_TODO, DELETE_TODO, TODO_COMPLETED } from "./todoTypes";

export const actionCreators = {
    fetchTodos: (payload: any) => {
        return {
            type: FETCH_ALL_TODOS,
            payload
        }
    },
    
    addTodo: (payload: any) => {
        return {
            type: ADD_NEW_TODO,
            payload
        }
    },
    
    updateTodo: (payload: any) => {
        return {
            type: UPDATE_TODO,
            payload
        }
    },
    
    deleteTodo: (payload: any) => {
        return {
            type: DELETE_TODO,
            payload
        }
    },
    
    completeTodo: (payload: any) => {
        return {
            type: TODO_COMPLETED,
            payload
        }
    }
}