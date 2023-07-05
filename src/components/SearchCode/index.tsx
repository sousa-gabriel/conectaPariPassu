import React, { useState } from 'react'
import * as S from './styles'
import { InputSearch } from '../InputSearch'
import theme from '../../theme'
import { home } from '../../mock/data'
import { RobotoText } from '../RobotoText'
import { useProduct } from '../../context/ProductDetails'

export function SearchCode({ isHome = false }: SearchCodeProps) {
  // const [search, setSearch] = useState('DOF033YFG9XBNUUW')
  const [search, setSearch] = useState('PRGEZHMPW74NYBOW')
  const { handleSearch } = useProduct()

  return (
    <>
      <InputSearch
        onChangeText={setSearch}
        placeholder={home.placeHolder}
        value={search}
      />
      <S.Button onPress={() => handleSearch(search, isHome)}>
        <RobotoText
          align="center"
          font="bold"
          size="14medium"
          value={home.button}
          color={theme.colors.white}
        />
      </S.Button>
    </>
  )
}
