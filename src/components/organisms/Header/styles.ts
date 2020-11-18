import styled from '@emotion/styled'
import { breakpoints, shadows } from '@src/styles/theme'

export const Container = styled.header`
   box-shadow: ${shadows.NORMAL};
`

export const Grid = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Logo = styled.h3`
   position: absolute;
   left: 1rem;

   @media (max-width: ${breakpoints.SM}) {
      display: none;
   }
`

export const Anchor = styled.a`
   cursor: pointer;
`
