import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import type { contentModalProps } from './types'
import { normalize } from '../../theme/normalize'

export const Container = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`

export const Content = styled.View<contentModalProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${normalize(20)}px;
  border-top-right-radius: ${normalize(20)}px;
  max-height: ${({ heightPercentage }) => heightPercentage ?? 70}%;
  padding: ${normalize(30)}px ${normalize(24)}px 0px ${normalize(24)}px;
  align-items: center;
`
