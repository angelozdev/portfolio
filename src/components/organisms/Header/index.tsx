import React from 'react'

/* Components */
import { Wrapper } from '@src/components/atoms'

/* Styles */
import { Container, Grid, List, Item, Logo, Anchor } from './styles'

function Header(): JSX.Element {
   const items = [
      {
         title: 'About',
         href: '#about'
      },
      {
         title: 'Projects',
         href: '#projects'
      },
      {
         title: 'Contact',
         href: '#contact'
      }
   ]

   return (
      <Container id="#">
         <Wrapper maxWidth="1024px">
            <Grid>
               <Logo>
                  <Anchor href="#">AZ</Anchor>
               </Logo>
               <List>
                  {items.map((item, index) => {
                     const { title, href } = item
                     return (
                        <Item key={index}>
                           <Anchor href={href}>{title}</Anchor>
                        </Item>
                     )
                  })}
               </List>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Header
