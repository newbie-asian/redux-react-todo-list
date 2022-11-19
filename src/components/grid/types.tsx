export interface IPropsTodoGrid {
    handleShowModal: (isOpen: boolean) => void;
    showModal: boolean;
    handleGetRowData: (evt: React.SyntheticEvent, params: any) => void;
    rowData: string;
}