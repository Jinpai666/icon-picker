import { FC } from 'react';
import { Modal } from "./styles/Modal.styled";


const PickerModal: FC = ({onClick}) => {
    return (
        <Modal onClick={onClick}>
            modal
        </Modal>
    );
}

export default PickerModal;