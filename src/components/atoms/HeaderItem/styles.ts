import styled from '@emotion/styled'
import { breakpoints, colors } from '@src/styles/theme'

export const Item = styled.li`
   height: 100%;
   padding: 1rem;

   @media (max-width: ${breakpoints.SM}) {
      padding: 0.5rem 1rem;
   }
`

export const Anchor = styled.a`
   color: ${colors.FONT};
`
