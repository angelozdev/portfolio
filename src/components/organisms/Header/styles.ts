import styled from '@emotion/styled'
import { breakpoints, colors, shadows } from '@src/styles/theme'

export const Container = styled.header`
   box-shadow: ${shadows.NORMAL};
`

export const Grid = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const List = styled.ul`
   display: flex;
   padding-left: 0;
   list-style: none;
`

export const Item = styled.li`
   height: 100%;
   padding: 1rem;
`

export const Logo = styled.h3`
   position: absolute;
   left: 1rem;

   @media (max-width: ${breakpoints.SM}) {
      display: none;
   }
`

export const Anchor = styled.a`
   color: ${colors.FONT};
`
