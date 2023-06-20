import { MouseEvent } from 'react'
import { Circle, WhiteboardContainer } from "./styles";
import { ColorsCircles, ICirclePosition } from '../../pages/Home'

interface IWhiteboardProps {
    onAddCircle: (event: MouseEvent<HTMLDivElement>) => void
    circles: ICirclePosition[]
    colorCircles: ColorsCircles
}

export function Whiteboard({ onAddCircle, circles, colorCircles }: IWhiteboardProps) {
    return (
        <WhiteboardContainer
            onClick={onAddCircle}
        >
            {circles.map((circle) => (
                <Circle
                    key={circle.id}
                    css={{ top: circle.y, left: circle.x }}
                    color={colorCircles}
                />
            ))}
        </WhiteboardContainer>
    )
}