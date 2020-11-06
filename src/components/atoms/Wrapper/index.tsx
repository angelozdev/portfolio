import React from 'react'

/* Styles */
import { WrapperStyled } from './styles'

/* Types */
import { MaxWidth } from '@src/interfaces/styles'
interface Props {
   children: React.ReactNode
   maxWidth?: MaxWidth
   padding?: boolean
}

function Wrapper({
   children,
   maxWidth = '1024px',
   padding = true
}: Props): JSX.Element {
   return (
      <WrapperStyled theme={{ maxWidth, padding }}>{children}</WrapperStyled>
   )
}

export default Wrapper
