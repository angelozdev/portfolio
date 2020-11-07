import styled from '@emotion/styled'
import { social } from '@src/styles/theme'

interface IconTheme {
   bg: social
}

const widthIcon = '40px'

export const Icon = styled.a`
   display: flex;
   width: ${widthIcon};
   height: ${widthIcon};
   align-items: center;
   justify-content: center;
   margin-top: 2rem;
   margin-right: 0.5rem;
   background-color: ${({ theme }: { theme: IconTheme }) => theme.bg};
   border-radius: 50%;
`
export const Container = styled.div`
   display: flex;
`
