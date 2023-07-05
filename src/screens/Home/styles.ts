import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: space-around;
  padding: ${normalize(20)}px;
`

export const Content = styled.View`
  width: 100%;
  height: 50%;
`
