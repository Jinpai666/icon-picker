import {FC,} from 'react';
import {Column} from './styles/Column.styled';
import {Icon} from "./styles/Icon.styled";
const PickerColumn: FC = ({iconName, handleModal, handleEdit, icons, columnId}) => {
    const handleClick = (e)=>{
        handleEdit(icons)
        handleModal(e)
    }
    return (
        <Column>
            <Icon  onClick={handleClick}>
                <span id={columnId} className="material-symbols-outlined">
                    {iconName}
                </span>
            </Icon>
            <input placeholder="Insert text here" type="text"/>
            <input placeholder="Add here your additional text" type="text"/>
        </Column>
    );
};

export default PickerColumn;
