import {
  useState,
  ReactNode,
  createContext,
  MouseEvent,
  useEffect,
} from 'react'

export type TColorsCircles = 'blue' | 'purple' | 'red'

export interface ICirclePosition {
  id: string
  x: number
  y: number
  color: TColorsCircles
}

interface ICircleContext {
  circles: ICirclePosition[]
  isDisableUndoButton: boolean
  isDisableRedoButton: boolean
  colorCircles: TColorsCircles
  onAddCircle: (event: MouseEvent<HTMLDivElement>) => void
  onUndoCircle: () => void
  onRedoCircle: () => void
  onClearWhiteboard: () => void
  onChangeColorCircles: (color: TColorsCircles) => void
}

interface ICircleContextProviderProps {
  children: ReactNode
}

export const CircleContext = createContext({} as ICircleContext)

const LOCAL_STORAGE_KEY = 'whiteboard:savedCircles:1.0.0'

function verifyStoredState() {
  const storedStateAsJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  }

  return []
}

export function CircleContextProvider({
  children,
}: ICircleContextProviderProps) {
  const [circles, setCircles] = useState<ICirclePosition[]>(verifyStoredState)
  const [undo, setUndo] = useState<ICirclePosition[]>(verifyStoredState)
  const [redo, setRedo] = useState<ICirclePosition[]>([])
  const [colorCircles, setColorCircles] = useState('red' as TColorsCircles)

  useEffect(() => {
    const stateJSON = JSON.stringify(circles)
    localStorage.setItem(LOCAL_STORAGE_KEY, stateJSON)
  }, [circles])

  const isDisableUndoButton = undo.length === 0
  const isDisableRedoButton = !(redo.length > 0)

  const onAddCircle = (event: MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY } = event.nativeEvent

    const newCircle = {
      id: crypto.randomUUID(),
      x: offsetX,
      y: offsetY,
      color: colorCircles,
    }

    setCircles((prevCircles) => [...prevCircles, newCircle])
    setUndo((prev) => [...prev, newCircle])
    setRedo([])
  }

  const onUndoCircle = () => {
    if (undo.length === 0) return

    const lastCircle = undo[undo.length - 1]
    setUndo((prev) => prev.slice(0, -1))
    setRedo((prev) => [...prev, lastCircle])

    setCircles((prevCircles) =>
      prevCircles.filter((circle) => circle.id !== lastCircle.id),
    )
  }

  const onRedoCircle = () => {
    if (redo.length === 0) return

    const lastCircle = redo[redo.length - 1]
    setRedo((prev) => prev.slice(0, -1))
    setUndo((prev) => [...prev, lastCircle])

    setCircles((prevCircles) => [...prevCircles, lastCircle])
  }

  const onClearWhiteboard = () => {
    setUndo([])
    setCircles([])
    setRedo([])
  }

  const onChangeColorCircles = (color: TColorsCircles) => {
    setColorCircles(color)
  }

  return (
    <CircleContext.Provider
      value={{
        circles,
        colorCircles,
        isDisableRedoButton,
        isDisableUndoButton,
        onAddCircle,
        onUndoCircle,
        onRedoCircle,
        onClearWhiteboard,
        onChangeColorCircles,
      }}
    >
      {children}
    </CircleContext.Provider>
  )
}
