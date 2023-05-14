import { FC, useState } from 'react';
import { Column } from './styles/Column.styled';
import { Icon } from './styles/Icon.styled';
import PickerModal from './PickerModal';

type PickerColumnProps = {
    active: boolean;
    icons: string[];
};

const PickerColumn: FC<PickerColumnProps> = ({ icons, active }) => {
    const handleModalClick = () => {
        setShowModal(true);
    };
    const [showModal, setShowModal] = useState<boolean>(false);
    const [iconToPrint, setIconToPrint] = useState<string>(icons[0]);

    return (
        <Column active={active ? 1 : 0}>
            <Icon onClick={handleModalClick}>
                <span className="material-symbols-outlined">{iconToPrint}</span>
            </Icon>
            <input
                maxLength={20}
                placeholder="Insert text here"
                type="text" />
            <input
                maxLength={20}
                placeholder="Add here your additional text"
                type="text" />
            {showModal && (
                <PickerModal handleModalVisibility={setShowModal} setIcon={setIconToPrint} icons={icons} />
            )}
        </Column>
    );
};

export default PickerColumn;
