import React from 'react'

/* Styles */
import { Container, Grid, Right, Left, Text } from './styles'

/* Components */
import { Wrapper } from '@src/components/atoms'
import { SocialNetworks } from '@src/components/molecules'

function Footer() {
   return (
      <Container>
         <Wrapper>
            <Grid>
               <Left>
                  <Text>
                     I would love to work with you. <br /> Contact me
                  </Text>

                  <SocialNetworks />
               </Left>
               <Right>
                  <Text theme={{ bold: true }}>Never stop learning</Text>
                  <Text theme={{ italic: true }}>
                     Handcrafted by me @angelozdev
                  </Text>
                  <Text theme={{ italic: true }}>Made with ReactJS</Text>
               </Right>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Footer
