export interface IInputProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export interface IInputStyleProps {
  haveIcon?: boolean
  isFocused?: boolean
}
