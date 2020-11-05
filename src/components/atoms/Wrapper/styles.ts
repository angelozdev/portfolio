import styled from '@emotion/styled'

/* Types */
import { MaxWidth } from '@src/interfaces/styles'
interface theme {
   maxWidth: MaxWidth
}

export const WrapperStyled = styled.div`
   width: 100%;
   max-width: ${({ theme }: { theme: theme }) => theme.maxWidth};
   padding: 0 0.5rem;
   margin-right: auto;
   margin-left: auto;
`
