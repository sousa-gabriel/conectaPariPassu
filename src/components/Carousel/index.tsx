import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { CarouselProps } from './types'
import { FlatList } from 'react-native'

export function Carousel({ images }: CarouselProps) {
  const carouselRef = useRef(null)
  const [alterImage, setAlterImage] = useState(0)

  function alterPosition() {
    if (alterImage < images.length - 1) {
      setAlterImage(alterImage + 1)
    } else {
      setAlterImage(0)
    }
  }

  useEffect(() => {
    carouselRef.current.scrollToIndex({ index: alterImage })

    const interval = setInterval(() => {
      alterPosition()
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [alterImage])

  return (
    <S.Container>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator
        keyExtractor={(item, index) => index.toString()}
        ref={carouselRef}
        renderItem={({ item: midia, index }) => (
          <S.ProductPhoto
            key={index}
            source={{
              uri: midia,
            }}
            resizeMode="cover"
          />
        )}
      />
    </S.Container>
  )
}
