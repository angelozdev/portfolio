import styled from '@emotion/styled'
import { colors, shadows, social, transitions } from '@src/styles/theme'

interface IconTheme {
   bg: social
}

const widthIcon = '45px'

export const Icon = styled.a`
   display: flex;
   width: ${widthIcon};
   height: ${widthIcon};
   align-items: center;
   justify-content: center;
   border: 2px solid transparent;
   margin-top: 2rem;
   margin-right: 0.5rem;
   background-color: ${({ theme }: { theme: IconTheme }) => theme.bg};
   border-radius: 50%;
   transition: all ${transitions.NORMAL};

   &:hover {
      border-color: ${colors.FONT}33;
      box-shadow: ${shadows.NORMAL};
      filter: brightness(0.8);
   }
`
export const Container = styled.div`
   display: flex;
`
