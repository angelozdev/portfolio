import React from 'react'

/* Styles */
import { Icon, Container } from './styles'

/* Components */
import { GitHub, Gmail, LinkedIn, Twitter } from '@components/Icons'
import { social } from '@src/styles/theme'

const WIDTH = 20

const socialNetWorks = [
   {
      icon: <GitHub width={WIDTH} height={WIDTH} />,
      href: 'https://www.github.com/angelozdev',
      color: social.GITHUB
   },
   {
      icon: <Gmail width={WIDTH} height={WIDTH} />,
      href: 'mailto:angelozam17@gmail.com',
      color: social.GMAIL
   },
   {
      icon: <LinkedIn width={WIDTH} height={WIDTH} />,
      href: 'https://www.linkedin.com/in/angelozdev/',
      color: social.LINKEDIN
   },
   {
      icon: <Twitter width={WIDTH} height={WIDTH} />,
      href: 'https://www.twitter.com/angelozdev',
      color: social.TWITTER
   }
]

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
