import React from 'react'

/* Styles */
import { Container, Grid, Title, Description, Pane } from './styles'
import { backgrounds, colors } from '@src/styles/theme'

/* Components */
import { Divider, Wrapper } from '@src/components/atoms'
import { Card, SocialNetworks } from '@src/components/molecules'
import { React as ReactIcon } from '@components/Icons'

function About(): JSX.Element {
   return (
      <Container id="about">
         <Pane theme={{ color: colors.WHITE, bg: backgrounds.BLACK }}>
            <Wrapper padding={true} maxWidth="768px">
               <Grid>
                  <ReactIcon />
                  <Title>Hi, there! I’m Angelo. </Title>
                  <Divider />
                  <Description>
                     I am a frontend developer specialized in Reactjs. Web
                     development fascinates me, I am always looking to improve
                     my skills and I am continually learning new technologies. I
                     am currently part of the Platzi Master program where the
                     best Platzi students are.
                  </Description>
               </Grid>
            </Wrapper>
         </Pane>
         <Pane>
            <Wrapper padding={false} maxWidth="1024px">
               <Card.Grid mount columns={2}>
                  <Card background={backgrounds.DARK_BLUE}>
                     <Card.Title divider>About.</Card.Title>
                     <Card.Description>
                        I was born on December 17, 1997, in Bogotá, Colombia. I
                        am passionate about web technologies, mainly because of
                        React. I love TypeScript. One of my greatest motivations
                        is to learn. I started programming since I was in school
                        learning from YouTube videos and online education
                        platforms like Platzi and Udemy.
                     </Card.Description>

                     <SocialNetworks />
                  </Card>
                  <Card background={backgrounds.RED}>
                     <img src="" alt="" />
                  </Card>
               </Card.Grid>
            </Wrapper>
         </Pane>
      </Container>
   )
}

export default About
