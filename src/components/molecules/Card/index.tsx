import React from 'react'

/* Styles */
import {
   Container,
   Title,
   Description,
   Grid,
   ImageContainer,
   Image
} from './styles'
import { backgrounds, colors } from '@src/styles/theme'

/* Components */
import { Divider } from '@src/components/atoms'

/* Types */
interface Props extends WithChildren {
   background?: backgrounds
   padding?: boolean
   hiddenOnMobile?: boolean
   center?: boolean
   color?: colors
}

interface WithChildren {
   children: React.ReactNode
}

interface PropsTitle extends WithChildren {
   divider?: boolean
}

interface PropsGrid extends WithChildren {
   columns: number
   mount?: boolean
}

interface PropsImage extends React.ImgHTMLAttributes<HTMLImageElement> {
   src: string
}

function Card({
   background = backgrounds.BLACK,
   children,
   padding = true,
   hiddenOnMobile = false,
   center = true,
   color = colors.WHITE
}: Props): JSX.Element {
   return (
      <Container theme={{ background, padding, hiddenOnMobile, center, color }}>
         {children}
      </Container>
   )
}

Card.Description = function CardDescription({ children }: WithChildren) {
   return <Description>{children}</Description>
}

Card.Title = function CardTitle({ children, divider = false }: PropsTitle) {
   return (
      <React.Fragment>
         <Title>{children}</Title>
         {divider && <Divider />}
      </React.Fragment>
   )
}

Card.Grid = function CardGrid({ columns, children, mount = false }: PropsGrid) {
   return <Grid theme={{ columns, mount }}>{children}</Grid>
}

Card.Image = function CardImage({ ...props }: PropsImage) {
   return (
      <ImageContainer>
         <Image {...props} />
      </ImageContainer>
   )
}

export default Card
