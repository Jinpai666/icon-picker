import React, { FC, FormEvent, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { icons } from '../assets/icons';
import { Wrapper } from './styles/Wrapper.styled';
import { Form } from './styles/Form.styled';
import { Row } from './styles/Row';
import PickerColumn from './PickerColumn';
import { PdfContent } from './styles/PdfContent.styled';

type DragItem = {
    index: number;
}

const Picker: FC = () => {
    const pdfContentRef = useRef<HTMLDivElement | null>(null);
    const [columnOrder, setColumnOrder] = useState(icons);

    const save = (e: FormEvent) => {
        e.preventDefault();
        const element = pdfContentRef.current;
        const options = {
            filename: 'slide.pdf',
            margin: 2,
            jsPDF: {
                orientation: 'p',
                putOnlyUsedFonts: true,
                precision: 3,
            },
        };

        html2pdf().set(options).from(element).save();
    };

    const PickerColumnWithDrag: FC<{ icons: string[]; index: number }> = ({ icons, index }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: 'PICKER_COLUMN',
            item: { index } as DragItem,
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));

        const [{ canDrop, isOver }, drop] = useDrop(() => ({
            accept: 'PICKER_COLUMN',
            drop: (item: DragItem) => {
                const draggedIndex = item.index;
                const droppedIndex = index;

                const newColumnOrder = [...columnOrder];
                newColumnOrder.splice(droppedIndex, 0, newColumnOrder.splice(draggedIndex, 1)[0]);

                setColumnOrder(newColumnOrder);
            },
            collect: (monitor) => ({
                canDrop: monitor.canDrop(),
                isOver: monitor.isOver(),
            }),
        }));

        const isActive = canDrop && isOver;

        return (
            <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
                <PickerColumn isActive={isActive} icons={icons} />
            </div>
        );
    };
    return (
        <Wrapper>
            <Form onSubmit={save}>
                <PdfContent ref={pdfContentRef}>
                    <input name="title" placeholder="Insert a title here" />
                    <Row>
                        <DndProvider backend={HTML5Backend}>
                            {columnOrder.map((icons, idx) => (
                                <PickerColumnWithDrag key={idx} icons={icons} index={idx} />
                            ))}
                        </DndProvider>
                    </Row>
                </PdfContent>
                <button>Save as PDF</button>
            </Form>
        </Wrapper>
    );
};

export default Picker;
