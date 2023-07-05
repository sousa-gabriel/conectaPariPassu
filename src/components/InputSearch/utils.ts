import theme from '../../theme'

export function referenceColorInput(isFocused: boolean) {
  return isFocused ? theme.colors.green_100 : theme.colors.gray_100
}
