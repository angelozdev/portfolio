import styled from '@emotion/styled'
import { transitions } from '@src/styles/theme'

interface Theme {
   color: string
}

export const DividerStyled = styled.span`
   display: inline-block;
   width: 6rem;
   height: 0.2rem;
   background-color: ${({ theme }: { theme: Theme }) => theme.color};
   transition: all ${transitions.FAST};
`
