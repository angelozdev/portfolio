import React from 'react'

/* Components */
import { Wrapper } from '@components/atoms'

/* Styles */
import { Container, Grid, Name, Description } from './styles'

function Hero(): JSX.Element {
   return (
      <Container>
         <Wrapper>
            <Grid>
               <Name>Angelo Zambrano</Name>
               <Description>
                  Frontend Developer | Reactjs | TypeScript - JavaScript
               </Description>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Hero
