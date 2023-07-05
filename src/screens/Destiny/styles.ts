import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.View`
  flex: 1;
  padding: 0px ${normalize(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: flex-start;
  justify-content: flex-start;
`
