export interface RobotoTextProps {
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  value?: string
  children?: React.ReactNode
  font?: 'light' | 'regular' | 'medium' | 'bold'
  align?: 'left' | 'center' | 'right'
  color?: string
  size?: '8xxSmall' | '10xSmall' | '12small' | '14medium' | '20large' | '24big'
  lineHeight?: number
}

export interface RobotoTextStyledProps {
  font: 'light' | 'regular' | 'medium' | 'bold'
  align: 'left' | 'center' | 'right'
  color: string
  size: '8xxSmall' | '10xSmall' | '12small' | '14medium' | '20large' | '24big'
  marginTop: number
  marginBottom: number
  marginLeft: number
  marginRight: number
  lineHeight: number
}
