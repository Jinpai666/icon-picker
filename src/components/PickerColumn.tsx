import React, { FC, useState, RefObject } from 'react';
import Modal from './PickerModal';
import html2pdf, { Options } from 'html2pdf.js';

import { AccountCircle } from '@mui/icons-material';

interface PickerProps {
    title: string;
    message: string;
}

const PickerColumn: FC<PickerProps> = ({ message, title }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const pickerColumnRef: RefObject<HTMLDivElement> = React.createRef();
    const buttonRef: RefObject<HTMLButtonElement> = React.createRef();

    const handleIconClick = () => setShowModal(!showModal);

    const save = () => {
        const element = pickerColumnRef.current;
        const button = buttonRef.current;
        const options: Options = {
            filename: 'slide.pdf',
            margin: 10,
            jsPDF: { format: 'a4', orientation: 'portrait' },
        };

        if (button) {
            button.style.display = 'none';
        }

        html2pdf()
            .set(options)
            .from(element)
            .save()
            .then(() => {
                if (button) {
                    button.style.display = 'block'; // Show after PDF generation
                }
            });
    };

    return (
        <div ref={pickerColumnRef}>
            <div onClick={handleIconClick}>
                <AccountCircle />
            </div>
            <div>{title}</div>
            <div>{message}</div>
            {showModal && <Modal />}
            <div>
                <button ref={buttonRef} onClick={save}>
                    Save as PDF
                </button>
            </div>
        </div>
    );
};

export default PickerColumn;
