import React, { FC } from 'react';
import { Modal } from "./styles/Modal.styled";

type PickerModalProps = {
    icons: string[];
    handleModalVisibility: (visibility: boolean) => void;
    setIcon: (icon: string) => void;
}

const PickerModal: FC<PickerModalProps> = ({icons, handleModalVisibility, setIcon}) => {
    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) =>{
        console.log(e.target)
        setIcon((e.target as Element).innerHTML)
        handleModalVisibility(false)
    }
    return (
        <Modal>
            <h2>Choose an icon</h2>
            {icons.map((icon, idx)=>(
                <span
                    key={idx}
                    onClick={e=>handleClick(e)}
                    className="material-symbols-outlined">
                    {icon}
                </span>
            ))}

        </Modal>
    );
}

export default PickerModal;