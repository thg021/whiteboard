import { useState, MouseEvent } from 'react'
import { Container, Circle, Whiteboard, ButtonContainer } from './styles';
import { ArrowArcLeft, ArrowArcRight } from 'phosphor-react';

interface ICyclePosition {
    id: string
    x: number
    y: number
}

export function Home() {
    const [circles, setCircles] = useState<ICyclePosition[]>([]);
    const [undoStack, setUndoStack] = useState<ICyclePosition[]>([]);
    const [redoStack, setRedoStack] = useState<ICyclePosition[]>([]);

    const handleCircleClick = (event: MouseEvent<HTMLDivElement>) => {
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
    return (
        <Container>
            <Whiteboard
                onClick={handleCircleClick}
            >
                {circles.map((circle) => (
                    <Circle
                        key={circle.id}
                        css={{ top: circle.y, left: circle.x }}
                    />
                ))}
            </Whiteboard>
            <ButtonContainer>
                <button onClick={handleUndo}>
                    <ArrowArcLeft size={20} />
                </button>
                <button onClick={handleRedo}>
                    <ArrowArcRight size={20} />
                </button>
            </ButtonContainer>

        </Container>
    )
}

