import { FC } from 'react';
import { Modal } from "./styles/Modal.styled";


const PickerModal: FC = ({icons, handleClick, targetId}) => {

    return (
        <Modal>
            <h2>Choose an icon</h2>
            {icons.map((icon, idx)=>(
                <span
                    key={idx}
                    onClick={e=>handleClick(e, targetId)}
                    className="material-symbols-outlined">
                    {icon}
                </span>
            ))}

        </Modal>
    );
}

export default PickerModal;