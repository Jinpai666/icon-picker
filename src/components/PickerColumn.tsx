import {FC, useState} from 'react';
import Modal from "./PickerModal";

interface PickerProps {
    icon: string;
    title: string;
    message: string;
}

const PickerColumn: FC<PickerProps> = ({ message,icon,title }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleIconClick = (): void => setShowModal(!showModal);
    return (
        <div>
            <div onClick={handleIconClick}>{icon}</div>
            <div>{title}</div>
            <div>{message}</div>
            {showModal && <Modal/>}
        </div>
    );
}

export default PickerColumn;