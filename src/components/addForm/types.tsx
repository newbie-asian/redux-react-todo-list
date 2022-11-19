export interface IStateTodo {
    id: string;
    title: string;
    description: string;
    created_date: Date | null;
    deadline: Date | null;
    status: string;
}

export interface IPropsAddFormAndDialog {
    handleShowModal: (isOpen: boolean) => void;
    handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputDateChange: (newValue: Date | null) => void;
    todo: IStateTodo;
    showModal: boolean;
}
