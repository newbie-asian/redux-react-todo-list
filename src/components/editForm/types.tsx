export interface IPropsUseTodoGrid extends IPropsUseEditForm {
    handleGetRowData: (evt: React.SyntheticEvent, params: any) => void;
}

export interface IPropsUseEditForm {
    handleShowModal: (isOpen: boolean) => void;
    handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputDateChange: (newValue: Date | null) => void;
    showModal: boolean;
    rowData: string;
}

export interface IStateTodo {
    id: string;
    title: string;
    description: string;
    created_date: Date | null;
    deadline: Date | null;
    status: string;
}

export interface IStateUseEditForm {
    handleShowModal: (isOpen: boolean) => void;
    showModal: boolean;
    rowData: string;
}
