import { FC, useState, FormEvent, useRef } from 'react';
import PickerModal from './PickerModal';
import html2pdf from 'html2pdf.js';
import { AccountCircle } from '@mui/icons-material';

import { Wrapper } from './styles/Wrapper.styled';
import { PdfContent } from './styles/PdfContent.styled';
import { Form } from './styles/Form.styled';

const PickerColumn: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const pdfContentRef = useRef<HTMLDivElement>(null)

    const handleIconClick = () => setShowModal(!showModal);

    const save = (e: FormEvent) => {
        e.preventDefault();
        const element = pdfContentRef.current;
        const options = {
            filename: 'slide.pdf',
            margin: 10,
            jsPDF: { format: 'a4', orientation: 'portrait' },
        };


        html2pdf()
            .set(options)
            .from(element)
            .save()

    };

    return (
        <Wrapper>
            <Form  onSubmit={save}>
                <PdfContent ref={pdfContentRef}>
                    <div onClick={handleIconClick}>
                        <AccountCircle />
                    </div>
                    <input type="text" />
                    <input type="text" />
                </PdfContent>
                <button>Save as PDF</button>
            </Form>

            {showModal && <PickerModal />}
        </Wrapper>
    );
};

export default PickerColumn;
