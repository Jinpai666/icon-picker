import React ,{ FC } from 'react';

interface PickerProps {
    icon: string;
    title: string;
    message: string;
}

const PickerColumn: FC<PickerProps> = ({ message,icon,title }) => {
    return (
        <div>
            <div>{icon}</div>
            <div>{title}</div>
            <div>{message}</div>
        </div>
    );
}

export default PickerColumn;