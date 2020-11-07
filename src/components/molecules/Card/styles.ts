import styled from '@emotion/styled'
import {
   backgrounds,
   breakpoints,
   colors,
   shadows,
   transitions
} from '@src/styles/theme'

interface ContainerTheme {
   padding: boolean
   background: backgrounds
}

interface GridTheme {
   columns: number
   mount: boolean
}

export const Container = styled.div`
   position: relative;
   padding: ${({ theme }) => (theme.padding ? '2rem' : 0)};
   background: ${({ theme }: { theme: ContainerTheme }) => theme.background};
   box-shadow: inset ${shadows.NORMAL};
   color: ${colors.WHITE};
   text-align: left;
   transition: all ${transitions.NORMAL};

   &:hover {
      box-shadow: inset ${shadows.LG}, ${shadows.NORMAL};
   }

   @media (max-width: ${breakpoints.MD}) {
      padding: 2rem 1rem;
      text-align: center;
   }
`

export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(
      ${({ theme }: { theme: GridTheme }) => theme.columns},
      1fr
   );

   ${({ theme }) => {
   if (theme.mount) {
   return `
   position: relative;
   margin-top: -100px;
   `
   }
   }}

   @media (max-width: ${breakpoints.MD}) {
      grid-template-columns: repeat(1, 1fr);

      & ${Container}:nth-of-type(2) {
         display: none;
      }
   }
`

export const Title = styled.h3`
   margin: 0;
   font-size: 2rem;
`
export const Description = styled.div`
   padding: 2rem 0;
`
