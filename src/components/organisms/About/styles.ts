import styled from '@emotion/styled'
import { backgrounds, breakpoints, colors } from '@src/styles/theme'

interface Theme {
   color: colors
   bg: backgrounds
}

export const Container = styled.div`
   min-height: 100vh;
   background: ${colors.WHITE};

   @media (max-width: ${breakpoints.LG}) {
      min-height: auto;
   }
`
export const Grid = styled.div`
   min-height: 50vh;
   padding: 3rem 0;
   padding-bottom: calc(100px + 3rem);
   text-align: center;
`

export const Pane = styled.div`
   background: ${({ theme }: { theme: Theme }) => theme.bg};
   color: ${({ theme }: { theme: Theme }) => theme.color};
`

export const Title = styled.h3`
   margin-bottom: 0.5rem;
   font-size: 2.25rem;
   font-weight: 800;

   @media (max-width: ${breakpoints.SM}) {
      font-size: 1.75rem;
   }

   @media (max-width: ${breakpoints.XS}) {
      font-size: 1.5rem;
   }
`
export const Description = styled.p``

export const Image = styled.img`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
`

export const ImageContainer = styled.figure`
   position: relative;
   width: 100%;
   height: 0;
   padding: 0;
   padding-top: 100%;
   margin: 0;
`
