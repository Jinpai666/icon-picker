import {FC, FormEvent, useRef} from 'react';
import html2pdf from 'html2pdf.js';
import {icons} from "../assets/icons"
import {Wrapper} from './styles/Wrapper.styled';
import {Form} from './styles/Form.styled';
import {Row} from './styles/Row';
import PickerColumn from "./PickerColumn";
import {PdfContent} from "./styles/PdfContent.styled";

const Picker: FC = () => {

    const pdfContentRef = useRef<HTMLDivElement | null>(null);
    const save = (e: FormEvent) => {
        e.preventDefault();
        const element = pdfContentRef.current;
        const options = {
            filename: 'slide.pdf',
            margin: 2,
            jsPDF: {format: 'a4', orientation: 'portrait'},
        };


        html2pdf()
            .set(options)
            .from(element)
            .save()

    };

    return (
        <Wrapper>
            <Form onSubmit={save}>
                <PdfContent ref={pdfContentRef}>
                    <input name="title" placeholder="Insert a title here"/>
                    <Row>
                        {icons.map((icon, idx) => (
                                <PickerColumn
                                    key={idx}
                                    icons={icon}
                                />
                            )
                        )}
                    </Row>
                </PdfContent>
                <button>Save as PDF</button>
            </Form>


        </Wrapper>
    );
};

export default Picker;
