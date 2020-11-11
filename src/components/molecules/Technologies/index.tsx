import React from 'react'

/* Components */
import { Wrapper } from '@src/components/atoms'

/* Styles */
import { Container, Grid, IconContainer, Tech, Title, Icon } from './styles'
import { technology } from '@src/interfaces/components'

/* Types */
interface Props {
   title: string
   technologies: technology[]
}

function Technologies({ title, technologies }: Props): JSX.Element {
   return (
      <Container id="skills">
         <Wrapper maxWidth="1024px">
            <Title>{title}</Title>
            <Grid>
               {technologies.map((t, i) => {
                  const { description, icon, title } = t
                  return (
                     <IconContainer title={description} key={i}>
                        <Icon title={description}>{icon}</Icon>
                        <Tech>{title}</Tech>
                     </IconContainer>
                  )
               })}
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Technologies
