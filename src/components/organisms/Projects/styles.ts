import styled from '@emotion/styled'
import { breakpoints, colors } from '@src/styles/theme'

export const Container = styled.section`
   padding: 2rem 0;
   padding-bottom: 4rem;
`

export const Title = styled.h2`
   margin-bottom: 3rem;
   color: ${colors.FONT};
   font-size: 4rem;
   font-weight: 800;
   text-align: center;

   @media (max-width: ${breakpoints.MD}) {
      font-size: 2.75rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      font-size: 2rem;
   }

   @media (max-width: ${breakpoints.XS}) {
      font-size: 1.75rem;
   }
`
