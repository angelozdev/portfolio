import React from 'react'

/* Components */
import { Wrapper } from '@src/components/atoms'
import { HeaderItemsList as List } from '@src/components/molecules'
import { Logo as LogoIcon } from '@components/Icons'

/* Styles */
import { Container, Grid, Logo, Anchor } from './styles'

function Header(): JSX.Element {
   return (
      <Container id="#">
         <Wrapper maxWidth="100%">
            <Grid>
               <Logo>
                  <Anchor>
                     <LogoIcon />
                  </Anchor>
               </Logo>
               <List />
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Header
