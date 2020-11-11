import styled from '@emotion/styled'
import { backgrounds, breakpoints } from '@src/styles/theme'

const headerHeight = 84

export const Container = styled.section`
   display: flex;
   min-height: calc(100vh - ${headerHeight}px - 0.5rem);
   align-items: center;
   background: ${backgrounds.WHITE};

   @media (max-width: ${breakpoints.SM}) {
      min-height: calc(70vh);
   }
`

export const Grid = styled.div`
   width: 100%;
   margin-top: -${headerHeight}px;
   text-align: center;

   @media (max-width: ${breakpoints.SM}) {
      margin-top: -${headerHeight / 2}px;
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
