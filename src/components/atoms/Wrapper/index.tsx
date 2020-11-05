import React from 'react'

/* Styles */
import { WrapperStyled } from './styles'

/* Types */
import { MaxWidth } from '@src/interfaces/styles'
interface Props {
   children: React.ReactNode
   maxWidth?: MaxWidth
}

function Wrapper({ children, maxWidth = '1024px' }: Props): JSX.Element {
   return <WrapperStyled theme={{ maxWidth }}>{children}</WrapperStyled>
}

export default Wrapper
