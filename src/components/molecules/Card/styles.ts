import styled from '@emotion/styled'
import { DividerStyled } from '@components/atoms/Divider/styles'
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
   hiddenOnMobile: boolean
   center: boolean
   color: colors
   size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

interface GridTheme {
   columns: number
   mount: boolean
}

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
`

export const Title = styled.h3`
   margin: 0;
   font-size: 2rem;
   transition: all ${transitions.FAST};

   @media (max-width: ${breakpoints.MD}) {
      font-size: 1.75rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      font-size: 1.5rem;
   }

   @media (max-width: ${breakpoints.XS}) {
      font-size: 1.25rem;
   }
`

export const Description = styled.div`
   padding: 2rem 0;
   transition: all ${transitions.FAST};

   @media (max-width: ${breakpoints.MD}) {
      font-size: 1rem;
   }

   @media (max-width: ${breakpoints.SM}) {
      font-size: 0.85rem;
   }
`

export const Container = styled.div`
   position: relative;
   padding: ${({ theme }) => (theme.padding ? '5rem 2rem' : 0)};
   background: ${({ theme }: { theme: ContainerTheme }) => theme.background};
   color: ${({ theme }) => theme.color};

   grid-column-start: span ${({ theme }) => theme.size};
   text-align: left;
   text-align: ${({ theme }) => (theme.center ? 'center' : 'left')};
   transition: all ${transitions.NORMAL};

   &:hover {
      box-shadow: inset ${shadows.NORMAL}, ${shadows.NORMAL};

      & ${Title} {
         transform: translateY(-0.5rem);
      }

      & ${Description} {
         transform: translateY(0.5rem);
      }

      & ${DividerStyled} {
         transform: scale(1.1) translateY(0.25rem);
      }
   }

   @media (max-width: ${breakpoints.MD}) {
      display: ${({ theme }) => (theme.hiddenOnMobile ? 'none' : 'initial')};
      padding: 5rem 1rem;
      grid-column-start: span 12;
      text-align: center;
   }
`

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

export const Anchor = styled.a`
   color: inherit;
`
