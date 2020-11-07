import styled from '@emotion/styled'
import { backgrounds, breakpoints, colors } from '@src/styles/theme'

interface ContainerTheme {
   background: backgrounds
}

interface GridTheme {
   columns: number
   mount: boolean
}

export const Container = styled.div`
   padding: 2rem;
   background: ${({ theme }: { theme: ContainerTheme }) => theme.background};
   color: ${colors.WHITE};
   text-align: left;

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
