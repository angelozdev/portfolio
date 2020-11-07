import React from 'react'

/* Components */
import { Wrapper } from '@components/atoms'

/* Styles */
import { Container, Grid, Name, Description } from './styles'

function Hero(): JSX.Element {
   return (
      <Container>
         <Wrapper maxWidth="1440px" padding={true}>
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
