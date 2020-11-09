import React from 'react'

/* Components */
import { Card } from '@src/components/molecules'
import { backgrounds, colors } from '@src/styles/theme'

/* Styles */
import { Container, Title } from './styles'
import { Wrapper } from '@src/components/atoms'

function Projects() {
   return (
      <Container id="projects">
         <Wrapper padding={false} maxWidth="1024px">
            <Title>Projects.</Title>
            <Card.Grid columns={3}>
               <Card center background={backgrounds.GREEN}>
                  <Card.Title>Muvick - A Streaming Pletform</Card.Title>
                  <Wrapper padding={false} maxWidth="450px">
                     <Card.Description>
                        Muvick is an on demand streaming platform where each
                        user can watch their favorite movies and series and can
                        get recommendations depending on their movies or series
                        watched.
                     </Card.Description>
                  </Wrapper>
               </Card>
               <Card background={backgrounds.RED}>Hola mundo</Card>
               <Card color={colors.FONT} background={backgrounds.WHITE}>
                  Hola mundo
               </Card>
               <Card center background={backgrounds.DARK_BLUE}>
                  <Card.Title>Muvick - A Streaming Pletform</Card.Title>
                  <Wrapper padding={false} maxWidth="450px">
                     <Card.Description>
                        Muvick is an on demand streaming platform where each
                        user can watch their favorite movies and series and can
                        get recommendations depending on their movies or series
                        watched.
                     </Card.Description>
                  </Wrapper>
               </Card>
            </Card.Grid>
         </Wrapper>
      </Container>
   )
}

export default Projects
