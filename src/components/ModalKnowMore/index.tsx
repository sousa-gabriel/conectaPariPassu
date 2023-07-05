import React from 'react'
import * as S from './styles'
import { RobotoText } from '../RobotoText'
import { ModalKnowMoreProps } from './types'
import theme from '../../theme'
import { Carousel } from '../Carousel'

export function ModalKnowMore({
  address,
  NF,
  inscription,
  images,
  description,
}: ModalKnowMoreProps) {
  return (
    <S.Container>
      <RobotoText
        align="center"
        font="regular"
        size="12small"
        value={address}
        color={theme.colors.gray_500}
        marginTop={20}
      />
      <RobotoText
        align="center"
        font="regular"
        size="12small"
        value={`Inscrição Rural/Estadual: ${inscription ?? 'Não informado'}`}
        color={theme.colors.gray_500}
        marginTop={5}
      />
      {NF && (
        <RobotoText
          align="center"
          font="regular"
          size="12small"
          value={`Nota Fiscal: ${NF}`}
          color={theme.colors.gray_500}
          marginTop={5}
          marginBottom={20}
        />
      )}
      {description && (
        <RobotoText
          align="left"
          font="regular"
          size="12small"
          value={description}
          color={theme.colors.gray_500}
          marginTop={20}
          marginBottom={20}
        />
      )}
      {images.length > 1 && <Carousel images={images} />}
    </S.Container>
  )
}
