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
import { backgrounds } from '@src/styles/theme'

/* Components */
import { Divider } from '@src/components/atoms'

/* Types */
interface Props extends WithChildren {
   background?: backgrounds
   padding?: boolean
}

interface WithChildren {
   children: React.ReactNode
}

interface PropsTitle extends WithChildren {
   divider?: boolean
}

interface PropsGrid extends WithChildren {
   columns: number
   mount: boolean
}

interface PropsImage extends React.ImgHTMLAttributes<HTMLImageElement> {
   src: string
}

function Card({
   background = backgrounds.BLACK,
   children,
   padding = true
}: Props): JSX.Element {
   return <Container theme={{ background, padding }}>{children}</Container>
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

Card.Grid = function CardGrid({ columns, children, mount }: PropsGrid) {
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
