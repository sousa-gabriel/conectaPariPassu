import styled from 'styled-components/native'
import { handleFontFamily, handleSize } from './utils'
import { RobotoTextStyledProps } from './types'
import { normalize } from '../../theme/normalize'

export const Text = styled.Text<RobotoTextStyledProps>`
  text-align: ${({ align }) => align};
  font-family: ${({ font }) => handleFontFamily(font)};
  font-size: ${({ size }) => handleSize(size)}px;
  color: ${({ color }) => color};
  margin-top: ${({ marginTop }) => normalize(marginTop) || 0}px;
  margin-bottom: ${({ marginBottom }) => normalize(marginBottom) || 0}px;
  margin-left: ${({ marginLeft }) => normalize(marginLeft) || 0}px;
  margin-right: ${({ marginRight }) => normalize(marginRight) || 0}px;
`
