import {FC, useState, FormEvent, useRef} from 'react';
import PickerModal from './PickerModal';
import html2pdf from 'html2pdf.js';

import {Wrapper} from './styles/Wrapper.styled';
import {Form} from './styles/Form.styled';
import {Row} from './styles/Row';
import PickerColumn from "./PickerColumn";
import {PdfContent} from "./styles/PdfContent.styled";

const Picker: FC = () => {
    const arrows = ["arrow_back", "arrow_forward", "arrow_downward", "arrow_upward"]
    const faces = ["mood", "mood_bad", "sentiment_neutral", "sentiment_very_dissatisfied"]
    const sports = ["hiking", "sports_martial_arts", "kitesurfing", "sprint"]


    const [showModal, setShowModal] = useState<boolean>(false);
    const [icons, setIcons] = useState(arrows)
    const [targetId, setTargetId] = useState("")
    const [iconA, setIconA] = useState(arrows[0])
    const [iconB, setIconB] = useState(faces[0])
    const [iconC, setIconC] = useState(sports[0])
    const pdfContentRef = useRef<HTMLDivElement | null>(null);


    const handleModal = (e) => {
        setTargetId(e.target.id);
        setShowModal(!showModal);
    }
    const handleEditClick = (iconType: string[]) => {
        setIcons(iconType)
    }
    const handleModalIconClick = (e, targetId) => {
        if  (targetId === "A"){
            setIconA(e.target.innerHTML);
            setShowModal(false);
            console.log('done')
            }
        if  (targetId === "B"){
            setIconB(e.target.innerHTML);
            setShowModal(false);
            console.log('done')

        }
        if  (targetId === "C"){
            setIconC(e.target.innerHTML);
            setShowModal(false);
            console.log('done')

        }
        return

    }


    const save = (e: FormEvent) => {
        e.preventDefault();
        const element = pdfContentRef.current;
        const options = {
            filename: 'slide.pdf',
            margin: 10,
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
                        <PickerColumn
                            iconName={iconA}
                            handleModal={handleModal}
                            handleEdit={handleEditClick}
                            icons={arrows}
                            columnId="A"
                        />
                        <PickerColumn
                            iconName={iconB}
                            handleModal={handleModal}
                            handleEdit={handleEditClick}
                            icons={faces}
                            columnId="B"
                        />
                        <PickerColumn
                            iconName={iconC}
                            handleModal={handleModal}
                            handleEdit={handleEditClick}
                            icons={sports}
                            columnId="C"
                        />
                    </Row>
                </PdfContent>
                <button>Save as PDF</button>
            </Form>
            {showModal && <PickerModal
                icons={icons}
                handleClick={handleModalIconClick}
                targetId={targetId}
            />}

        </Wrapper>
    );
};

export default Picker;
