import React from 'react'

/* Styles */
import { Container, Title, Description, Grid } from './styles'
import { backgrounds } from '@src/styles/theme'

/* Components */
import { Divider } from '@src/components/atoms'

/* Types */
interface Props extends WithChildren {
   background?: backgrounds
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

function Card({
   background = backgrounds.BLACK,
   children
}: Props): JSX.Element {
   return <Container theme={{ background }}>{children}</Container>
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

export default Card
