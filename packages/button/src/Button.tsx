import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import { colours, gridUnits } from '@fui-components/base-styles'

const StyledButton = styled.button`
  color: ${colours.white};
  background-color: ${colours.blue};
  border-radius: ${gridUnits(0.25)}rem;
`

type ButtonProps = {
  text?: string
}
export const Button: React.FC<ButtonProps> = ({ text }) => (
  <StyledButton>{text}</StyledButton>
)

Button.propTypes = {
  text: PropTypes.string
}
