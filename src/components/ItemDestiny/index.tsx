import React, { useState } from 'react'
import * as S from './styles'
import { RobotoText } from '../RobotoText'
import { ItemDestinyProps } from './types'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import theme from '../../theme'
import { normalize } from '../../theme/normalize'
import { ModalBottomUp } from '../ModalBottomUp'
import { ModalKnowMore } from '../ModalKnowMore'

export function ItemDestiny({
  NF,
  city,
  country,
  inscriptionRural,
  inscriptionState,
  nameCompany,
  images,
  state,
  hasDistribution = false,
  description,
}: ItemDestinyProps) {
  const address = `${city}, ${state}, ${country}`
  const inscription = inscriptionRural ? inscriptionRural : inscriptionState
  const [modalVisible, setModalVisible] = useState(false)
  const NFFormatted = NF === undefined || NF[0] === null ? '' : NF[0]

  return (
    <S.Container onPress={() => setModalVisible(true)}>
      <MaterialCommunityIcons
        name="map-marker"
        size={normalize(30)}
        color={hasDistribution ? theme.colors.blue_100 : theme.colors.green_100}
      />
      <S.Content>
        <RobotoText
          align="center"
          font="bold"
          size="12small"
          value={nameCompany}
        />
        <RobotoText
          align="center"
          font="bold"
          size="10xSmall"
          value={address}
          color={theme.colors.gray_500}
        />
      </S.Content>
      <ModalBottomUp
        title={nameCompany}
        colorTitle={
          hasDistribution ? theme.colors.blue_100 : theme.colors.green_100
        }
        children={
          <ModalKnowMore
            address={address}
            NF={NFFormatted}
            inscription={inscription}
            images={images}
            description={description}
          />
        }
        isVisible={modalVisible}
        heightPercentage={70}
        handleClosed={() => setModalVisible(false)}
      />
    </S.Container>
  )
}
