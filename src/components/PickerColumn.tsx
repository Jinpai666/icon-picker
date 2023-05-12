import React, { FC, useState } from 'react';
import Modal from './PickerModal';
import html2pdf from 'html2pdf.js';
import { AccountCircle } from '@mui/icons-material';

import { Wrapper } from './styled/Wrapper.styled'
import {Form} from "./styled/Form.styled";

const PickerColumn: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const pickerColumnRef: React.RefObject<HTMLDivElement> = React.createRef();
    const buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

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
        <Wrapper ref={pickerColumnRef}>
            <Form>
            <div onClick={handleIconClick}>
                <AccountCircle />
            </div>
                <input type="text"/>
                <input type="text"/>
                <button ref={buttonRef} onClick={save}>
                    Save as PDF
                </button>
            </Form>
            {showModal && <Modal />}
            <div>

            </div>
        </Wrapper>
    );
};

export default PickerColumn;
