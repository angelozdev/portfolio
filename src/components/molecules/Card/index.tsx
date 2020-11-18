import React from 'react'

/* Styles */
import {
   Container,
   Title,
   Description,
   Grid,
   ImageContainer,
   Image,
   Anchor
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
   image?: string
   size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
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

type PropsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement>

function Card({
   background = backgrounds.BLACK,
   children,
   padding = true,
   hiddenOnMobile = false,
   center = true,
   color = colors.WHITE,
   size = 12,
   image = ''
}: Props): JSX.Element {
   return (
      <Container
         theme={{
            background,
            padding,
            hiddenOnMobile,
            center,
            color,
            size,
            image
         }}
      >
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

Card.Anchor = function CardAnchor({ children, ...restProps }: PropsAnchor) {
   return (
      <Anchor target="_blank" {...restProps}>
         {children}
      </Anchor>
   )
}

export default Card
