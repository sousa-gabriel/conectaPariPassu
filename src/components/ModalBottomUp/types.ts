export interface ModalBottomUpProps {
  handleClosed: () => void
  children: React.ReactNode
  title: string
  isVisible: boolean
  heightPercentage?: number
  colorTitle?: string
}

export interface contentModalProps {
  heightPercentage?: number
}
