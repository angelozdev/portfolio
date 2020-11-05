import styled from '@emotion/styled'
import { breakpoints, colors } from '@src/styles/theme'

export const Container = styled.section`
   display: flex;
   height: calc(100vh - 84px);
   align-items: center;
   border-bottom: 1rem solid ${colors.FONT};
   text-align: center;
`

export const Grid = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: -145px 0;

   @media (max-width: ${breakpoints.MD}) {
      margin: -84px 0;
   }
`

export const Name = styled.h1`
   margin: 0;
   font-size: 4.25rem;

   @media (max-width: ${breakpoints.MD}) {
      font-size: 2.75rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      font-size: 2.25rem;
   }

   @media (max-width: ${breakpoints.XS}) {
      font-size: 1.5rem;
   }
`

export const Description = styled.h2`
   margin: 0;
   font-size: 1.5rem;
   font-weight: 300;

   @media (max-width: ${breakpoints.MD}) {
      font-size: 1rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      font-size: 0.75rem;
   }
`
