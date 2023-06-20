import { useState, MouseEvent } from 'react'
import { Container, ButtonGrouping } from './styles';
import { ArrowArcLeft, ArrowArcRight, Circle, Trash } from 'phosphor-react';
import { Whiteboard } from '../../components/Whiteboard';
import { Button } from '../../components/Button';

export interface ICirclePosition {
    id: string
    x: number
    y: number
}

export type ColorsCircles = 'blue' | 'purple' | 'red'

export function Home() {
    const [circles, setCircles] = useState<ICirclePosition[]>([]);
    const [undo, setUndo] = useState<ICirclePosition[]>([]);
    const [redo, setRedo] = useState<ICirclePosition[]>([]);
    const [colorCircles, setColorCircles] = useState('red' as ColorsCircles)

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

    const handleChangeColorCircles = (color: ColorsCircles) => {
        setColorCircles(color)
    }

    return (
        <Container>
            <Whiteboard circles={circles} onAddCircle={handleAddCircle} colorCircles={colorCircles} />
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
                <Button onClick={() => handleChangeColorCircles('red')} color="red">
                    <Circle weight="fill" size={14} />
                </Button>
                <Button onClick={() => handleChangeColorCircles('blue')} color="blue">
                    <Circle weight="fill" size={14} />
                </Button>
                <Button onClick={() => handleChangeColorCircles('purple')} color="purple">
                    <Circle weight="fill" size={14} />
                </Button>
            </ButtonGrouping>

        </Container>
    )
}

