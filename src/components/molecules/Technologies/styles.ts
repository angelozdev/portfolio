import styled from '@emotion/styled'
import { breakpoints, colors, shadows, transitions } from '@src/styles/theme'

export const Container = styled.section`
   padding: 3rem 0;
`

export const Grid = styled.div`
   display: grid;
   justify-content: space-between;
   grid-column-gap: 5rem;
   grid-row-gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
   justify-items: center;

   @media (max-width: ${breakpoints.MD}) {
      grid-column-gap: 3.75rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      grid-column-gap: 3rem;
   }

   @media (max-width: ${breakpoints.XS}) {
      grid-column-gap: 1.25rem;
   }
`

export const IconContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0.5rem;
   border-radius: 0.1rem;
   transition: all ${transitions.NORMAL};

   &:hover {
      box-shadow: ${shadows.NORMAL};
   }
`

export const Title = styled.h1`
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
export const Icon = styled.div``

export const Tech = styled.p`
   margin-bottom: 0;
   text-align: center;
`
