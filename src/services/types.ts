
export interface Todo {
    id: string,
    title: string,
    description: string,
    created_date: string,
    deadline: string,
    status: string
}

export interface InitialState {
    todos: Todo[]
}

