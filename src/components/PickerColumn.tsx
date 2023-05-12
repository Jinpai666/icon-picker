import { FC, useState, RefObject, createRef } from 'react';
import Modal from './PickerModal';
import html2pdf from 'html2pdf.js';

import { AccountCircle } from '@mui/icons-material';

type PickerProps = {
    title: string;
    message: string;
}


const PickerColumn: FC<PickerProps> = ({ message, title }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const pickerColumnRef: RefObject<HTMLDivElement> = createRef();
    const buttonRef: RefObject<HTMLButtonElement> = createRef();

    const handleIconClick = () => setShowModal(!showModal);

    const save = () => {
        const element = pickerColumnRef.current;
        const button = buttonRef.current;
        const options = {
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
                    button.style.display = 'block';
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
