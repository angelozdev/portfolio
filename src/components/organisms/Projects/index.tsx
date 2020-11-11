import React from 'react'

/* Components */
import { Card } from '@src/components/molecules'

/* Styles */
import { Container, Title } from './styles'
import { Wrapper } from '@src/components/atoms'

/* Fixtures */
import projects from '@src/fixtures/projects'

function Projects() {
   return (
      <Container id="projects">
         <Wrapper maxWidth="1024px">
            <Title>Projects.</Title>
            <Card.Grid columns={12}>
               {projects.map((project, index) => {
                  const {
                     background,
                     color,
                     description,
                     link,
                     size,
                     title
                  } = project
                  return (
                     <Card
                        key={index}
                        color={color}
                        size={size}
                        center
                        background={background}
                     >
                        <Card.Anchor href={link}>
                           <Card.Title divider>{title}</Card.Title>
                           <Wrapper padding={false} maxWidth="768px">
                              <Card.Description>{description}</Card.Description>
                           </Wrapper>
                        </Card.Anchor>
                     </Card>
                  )
               })}
            </Card.Grid>
         </Wrapper>
      </Container>
   )
}

export default Projects
