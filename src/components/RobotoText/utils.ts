import theme from '../../theme'

export function handleFontFamily(font) {
  switch (font) {
    case 'light':
      return theme.fonts.light
    case 'regular':
      return theme.fonts.regular
    case 'medium':
      return theme.fonts.medium
    case 'bold':
      return theme.fonts.bold
  }
}

export function handleSize(size) {
  switch (size) {
    case '8xxSmall':
      return theme.fonts.sizes.xxSmall
    case '10xSmall':
      return theme.fonts.sizes.xSmall
    case '12small':
      return theme.fonts.sizes.small
    case '14medium':
      return theme.fonts.sizes.medium
    case '20large':
      return theme.fonts.sizes.Large
    case '24big':
      return theme.fonts.sizes.big
  }
}
