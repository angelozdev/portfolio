import React from 'react'

/* Styles */
import { Icon, Container } from './styles'

/* Fixtures */
import socialNetWorks from '@src/fixtures/socialNetworks'

function SocialNetworks() {
   return (
      <Container>
         {socialNetWorks.map((item, index) => (
            <Icon
               key={index}
               theme={{ bg: item.color }}
               target="_blank"
               href={item.href}
            >
               {item.icon}
            </Icon>
         ))}
      </Container>
   )
}

export default SocialNetworks
