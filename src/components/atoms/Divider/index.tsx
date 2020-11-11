import React from 'react'

/* Styles */
import { DividerStyled } from './styles'
import { colors } from '@src/styles/theme'

/* Types */
interface Props {
   color?: string
}

function Divider({ color = colors.WHITE }: Props): JSX.Element {
   return <DividerStyled theme={{ color }} />
}

export default Divider
