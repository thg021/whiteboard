import { CircleContextProvider } from './contexts/CirclesContext'
import { Home } from './pages/Home'
import { globalStyles } from './styles/global'

globalStyles()
export function App() {
  return (
    <CircleContextProvider>
      <Home />
    </CircleContextProvider>
  )
}
