import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'
import MapView from 'react-native-maps'

export const Container = styled.View`
  flex: 1;
  padding: 0px ${normalize(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: flex-start;
  justify-content: flex-start;
`
export const Map = styled(MapView)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Company = styled.View`
  padding: ${normalize(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
`
