import styled from '@emotion/styled'
import { breakpoints, colors } from '@src/styles/theme'

export const Container = styled.section`
   height: calc(100vh - 84px);
   display: flex;
   align-items: center;
   text-align: center;
   border-bottom: 1rem solid ${colors.FONT};
`

export const Grid = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: -145px 0;

   @media (max-width: ${breakpoints.MD}) {
      margin: -84px 0;
   }
`

export const Name = styled.h1`
   font-size: 4.25rem;
   margin: 0;

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
   font-size: 1.5rem;
   font-weight: 300;
   margin: 0;

   @media (max-width: ${breakpoints.MD}) {
      font-size: 1rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      font-size: 0.75rem;
   }
`
