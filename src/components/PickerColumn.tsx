import {FC, useState,} from 'react';
import {Column} from './styles/Column.styled';
import {Icon} from "./styles/Icon.styled";
import PickerModal from "./PickerModal";

type  PickerColumnProps = {
    icons: string[];
}

const PickerColumn: FC<PickerColumnProps> = ({icons}) => {
    const handleModalClick = ()=>{
        setShowModal(true)
    }
    const [showModal, setShowModal] = useState<boolean>(false);
    const [iconToPrint, setIconToPrint] = useState<string>(icons[0]);


    return (
        <Column>
            <Icon  onClick={handleModalClick}>
                <span  className="material-symbols-outlined">
                    {iconToPrint}
                </span>
            </Icon>
            <input placeholder="Insert text here" type="text"/>
            <input placeholder="Add here your additional text" type="text"/>
            {showModal && <PickerModal
                handleModalVisibility={setShowModal}
                setIcon={setIconToPrint}
                icons={icons}
            />}

        </Column>
    );
};

export default PickerColumn;
