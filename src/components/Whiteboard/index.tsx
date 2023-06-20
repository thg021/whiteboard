import { MouseEvent } from 'react'
import { Circle, WhiteboardContainer } from "./styles";
import { ICirclePosition } from '../../pages/Home'

interface IWhiteboardProps {
    onAddCircle: (event: MouseEvent<HTMLDivElement>) => void
    circles: ICirclePosition[]
}

export function Whiteboard({ onAddCircle, circles }: IWhiteboardProps) {
    return (
        <WhiteboardContainer
            onClick={onAddCircle}
        >
            {circles.map((circle) => (
                <Circle
                    key={circle.id}
                    css={{ top: circle.y, left: circle.x, '--circle-color': '#e25858' }}
                />
            ))}
        </WhiteboardContainer>
    )
}