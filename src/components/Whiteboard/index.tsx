import { useContext } from 'react'
import { Circle, WhiteboardContainer } from './styles'
import { CircleContext } from '../../contexts/CirclesContext'

export function Whiteboard() {
  const { onAddCircle, circles } = useContext(CircleContext)
  return (
    <WhiteboardContainer onClick={onAddCircle}>
      {circles.map((circle) => (
        <Circle
          key={circle.id}
          css={{ top: circle.y, left: circle.x }}
          color={circle.color}
        />
      ))}
    </WhiteboardContainer>
  )
}
