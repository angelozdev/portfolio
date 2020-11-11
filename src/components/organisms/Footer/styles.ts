import styled from '@emotion/styled'
import { backgrounds, breakpoints, colors } from '@src/styles/theme'

/* Types */
interface TextTheme {
   bold?: boolean
   italic?: boolean
}

export const Container = styled.section`
   width: 100%;
   padding: 2rem 0;
   background: ${backgrounds.BLACK};
   color: ${colors.WHITE};
`

export const Grid = styled.div`
   display: flex;
   justify-content: space-between;

   @media (max-width: ${breakpoints.MD}) {
      flex-direction: column;
   }
`

export const Right = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: right;

   @media (max-width: ${breakpoints.MD}) {
      align-items: center;
      margin-top: 2rem;
   }
`

export const Left = styled.div`
   @media (max-width: ${breakpoints.MD}) {
      text-align: center;
   }
`

export const Text = styled.p`
   margin: 0;
   margin-bottom: 1rem;
   font-style: ${({ theme }) => (theme.italic ? 'italic' : '')};
   font-weight: ${({ theme }: { theme: TextTheme }) =>
      theme.bold ? '700' : 'initial'};
`
