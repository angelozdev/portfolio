import styled from '@emotion/styled'

/* Types */
import { MaxWidth } from '@src/interfaces/styles'
import { breakpoints } from '@src/styles/theme'
interface theme {
   maxWidth: MaxWidth
   padding: boolean
}

export const WrapperStyled = styled.div`
   width: 100%;
   max-width: ${({ theme }: { theme: theme }) => theme.maxWidth};
   padding: ${({ theme }) => (theme.padding ? '0 1rem' : '0')};
   margin-right: auto;
   margin-left: auto;

   @media (max-width: ${breakpoints.SM}) {
      padding: ${({ theme }) => (theme.padding ? '0 .5rem' : '0')};
   }
`
