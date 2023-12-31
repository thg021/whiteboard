import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IButtonProps {
  onClick: () => void
  disabled?: boolean
  children?: ReactNode
  color?: 'red' | 'blue' | 'purple'
}

export function Button({ children, ...props }: IButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
