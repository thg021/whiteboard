import { useState, MouseEvent } from 'react'
import { Container, ButtonContainer } from './styles';
import { ArrowArcLeft, ArrowArcRight, Trash } from 'phosphor-react';
import { Whiteboard } from '../../components/Whiteboard';

export interface ICirclePosition {
    id: string
    x: number
    y: number
}

export function Home() {
    const [circles, setCircles] = useState<ICirclePosition[]>([]);
    const [undoStack, setUndoStack] = useState<ICirclePosition[]>([]);
    const [redoStack, setRedoStack] = useState<ICirclePosition[]>([]);
    console.log(undoStack)

    const isDisableUndoButton = undoStack.length === 0 ? true : false
    const isDisableRedoButton = redoStack.length > 0 ? false : true

    const handleAddCircle = (event: MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;

        const newCircle = {
            id: crypto.randomUUID(),
            x: offsetX,
            y: offsetY,
        };

        setCircles((prevCircles) => [...prevCircles, newCircle]);
        setUndoStack((prevStack) => [...prevStack, newCircle]);
        setRedoStack([]);
    };

    const handleUndo = () => {
        if (undoStack.length === 0) return;

        const lastCircle = undoStack[undoStack.length - 1];
        setUndoStack((prevStack) => prevStack.slice(0, -1));
        setRedoStack((prevStack) => [...prevStack, lastCircle]);

        setCircles((prevCircles) =>
            prevCircles.filter((circle) => circle !== lastCircle)
        );
    };

    const handleRedo = () => {
        if (redoStack.length === 0) return;

        const lastCircle = redoStack[redoStack.length - 1];
        setRedoStack((prevStack) => prevStack.slice(0, -1));
        setUndoStack((prevStack) => [...prevStack, lastCircle]);

        setCircles((prevCircles) => [...prevCircles, lastCircle]);
    };

    const handleClearAll = () => {
        setUndoStack([])
        setCircles([])
        setRedoStack([])

    }

    return (
        <Container>
            <Whiteboard circles={circles} onAddCircle={handleAddCircle} />
            <ButtonContainer>
                <button onClick={handleUndo} disabled={isDisableUndoButton}>
                    <ArrowArcLeft size={20} />
                </button>
                <button onClick={handleRedo} disabled={isDisableRedoButton}>
                    <ArrowArcRight size={20} />
                </button>
                <button onClick={handleClearAll}>
                    <Trash size={20} />
                </button>
            </ButtonContainer>

        </Container>
    )
}

