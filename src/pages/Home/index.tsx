import { useState, MouseEvent } from 'react'
import { Container, ButtonGrouping } from './styles';
import { ArrowArcLeft, ArrowArcRight, Trash } from 'phosphor-react';
import { Whiteboard } from '../../components/Whiteboard';
import { Button } from '../../components/Button';

export interface ICirclePosition {
    id: string
    x: number
    y: number
}

export function Home() {
    const [circles, setCircles] = useState<ICirclePosition[]>([]);
    const [undo, setUndo] = useState<ICirclePosition[]>([]);
    const [redo, setRedo] = useState<ICirclePosition[]>([]);

    const isDisableUndoButton = undo.length === 0 ? true : false
    const isDisableRedoButton = redo.length > 0 ? false : true

    const handleAddCircle = (event: MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY } = event.nativeEvent;

        const newCircle = {
            id: crypto.randomUUID(),
            x: offsetX,
            y: offsetY,
        };

        setCircles((prevCircles) => [...prevCircles, newCircle]);
        setUndo((prev) => [...prev, newCircle]);
        setRedo([]);
    };

    const handleUndo = () => {
        if (undo.length === 0) return;

        const lastCircle = undo[undo.length - 1];
        setUndo((prev) => prev.slice(0, -1));
        setRedo((prev) => [...prev, lastCircle]);

        setCircles((prevCircles) =>
            prevCircles.filter((circle) => circle !== lastCircle)
        );
    };

    const handleRedo = () => {
        if (redo.length === 0) return;

        const lastCircle = redo[redo.length - 1];
        setRedo((prev) => prev.slice(0, -1));
        setUndo((prev) => [...prev, lastCircle]);

        setCircles((prevCircles) => [...prevCircles, lastCircle]);
    };

    const handleClearWhiteboard = () => {
        setUndo([])
        setCircles([])
        setRedo([])

    }

    return (
        <Container>
            <Whiteboard circles={circles} onAddCircle={handleAddCircle} />
            <ButtonGrouping>
                <Button onClick={handleUndo} disabled={isDisableUndoButton}>
                    <ArrowArcLeft size={20} />
                </Button>
                <Button onClick={handleRedo} disabled={isDisableRedoButton}>
                    <ArrowArcRight size={20} />
                </Button>
                <Button onClick={handleClearWhiteboard} color="red">
                    <Trash size={20} />
                </Button>
            </ButtonGrouping>

        </Container>
    )
}

