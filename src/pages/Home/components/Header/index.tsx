import { useContext } from "react"
import { CircleContext } from "../../../../contexts/CirclesContext"
import { ArrowArcLeft, ArrowArcRight, Circle, Trash } from "phosphor-react"
import { Button } from "../../../../components/Button"
import { HeaderContainer } from "./styles"

export function Header() {
    const { isDisableRedoButton, isDisableUndoButton, onChangeColorCircles, onRedoCircle, onUndoCircle, onClearWhiteboard } = useContext(CircleContext)
    return (
        <HeaderContainer>
            <Button onClick={onUndoCircle} disabled={isDisableUndoButton}>
                <ArrowArcLeft size={20} />
            </Button>
            <Button onClick={onRedoCircle} disabled={isDisableRedoButton}>
                <ArrowArcRight size={20} />
            </Button>
            <Button onClick={onClearWhiteboard} color="red">
                <Trash size={20} />
            </Button>
            <Button onClick={() => onChangeColorCircles('red')} color="red">
                <Circle weight="fill" size={14} />
            </Button>
            <Button onClick={() => onChangeColorCircles('blue')} color="blue">
                <Circle weight="fill" size={14} />
            </Button>
            <Button onClick={() => onChangeColorCircles('purple')} color="purple">
                <Circle weight="fill" size={14} />
            </Button>
        </HeaderContainer>
    )
}