import { Whiteboard } from '../../components/Whiteboard'
import { Header } from './components/Header'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Whiteboard />
    </Container>
  )
}
