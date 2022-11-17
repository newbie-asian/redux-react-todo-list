import { InitialState } from "./types";

export const initialState: InitialState = {
    todos: [
        {
            id: "",
            title: "",
            description: "",
            created_date: new Date().toISOString().slice (0, 10),
            deadline: "",
            status: "Pending"
        }
    ]
}