import React from 'react'

/* Components */
import { Wrapper } from '@src/components/atoms'
import { HeaderItemsList as List } from '@src/components/molecules'

/* Styles */
import { Container, Grid, Logo, Anchor } from './styles'

function Header(): JSX.Element {
   return (
      <Container id="#">
         <Wrapper maxWidth="100%">
            <Grid>
               <Logo>
                  <Anchor href="#">AZ</Anchor>
               </Logo>
               <List />
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Header
