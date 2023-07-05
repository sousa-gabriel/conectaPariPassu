import React, { useState } from 'react'
import * as S from './styles'
import { Header, ModalBottomUp, ModalKnowMore } from '../../components'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { IPinItem, useProduct } from '../../context/ProductDetails'

export function Path() {
  const { listPinItem } = useProduct()
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({} as IPinItem)

  function colorGenerate() {
    const hex = '0123456789ABCDEF'
    let newColor = '#'

    for (let i = 0; i < 6; i++) {
      const color = Math.floor(Math.random() * 16)
      newColor += hex[color]
    }

    return newColor
  }

  function handleClickPin(item: IPinItem) {
    setModalVisible(true)
    setItemSelected(item)
  }

  return (
    <S.Container>
      <Header />
      <S.Map
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        initialRegion={{
          latitude: listPinItem[0].latitude,
          longitude: listPinItem[0].longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {listPinItem.map(item => (
          <Marker
            key={item.idElo}
            pinColor={colorGenerate()}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            onPress={() => handleClickPin(item)}
          />
        ))}
      </S.Map>
      <ModalBottomUp
        title={itemSelected.nome}
        children={
          <ModalKnowMore
            images={itemSelected.midias}
            description={itemSelected.descricao}
          />
        }
        isVisible={modalVisible}
        heightPercentage={80}
        handleClosed={() => setModalVisible(false)}
      />
    </S.Container>
  )
}
