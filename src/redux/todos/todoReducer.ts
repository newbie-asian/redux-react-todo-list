import { ADD_NEW_TODO, DELETE_TODO, TODO_COMPLETED, UPDATE_TODO } from './todoTypes'
import { initialState } from '../../services/intialState';
import { InitialState } from '../../services/types';

const todoReducer = (state: InitialState = initialState, action: any): InitialState => {
    switch (action.type) {
        case ADD_NEW_TODO: 
            const newTodo = action.payload;
            return {todos: [...state.todos, newTodo]}

        case DELETE_TODO:
            const filteredTodos = state.todos.filter(todo => {
                return todo.id !== action.payload
            })
            return {todos: [...filteredTodos]}
        
        case TODO_COMPLETED:
            const newMappedTodos = state.todos.map(todo => {
                return todo.id === action.payload ? {...todo, status: "Completed"} : {...todo}
            })

            return {todos: [...newMappedTodos]};

        case UPDATE_TODO:
            const updatedMappedTodos = state.todos.map(todo => {
                return  todo.id === action.payload.id ? {...action.payload} : {...todo}
            })

            return {todos: [...updatedMappedTodos]}

        default: return state;
    }
}

export default todoReducer