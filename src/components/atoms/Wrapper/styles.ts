import styled from '@emotion/styled'

/* Types */
import { MaxWidth } from '@src/interfaces/styles'
interface Theme {
   maxWidth: MaxWidth
}

export const WrapperStyled = styled.div`
   width: 100%;
   max-width: ${({ theme }: { theme: Theme }) => theme.maxWidth};
   margin-right: auto;
   margin-left: auto;
   padding: 0 0.5rem;
`
