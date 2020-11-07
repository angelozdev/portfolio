import React from 'react'

/* Styles */
import { Item, Anchor } from './styles'

/* Types */
interface Props {
   href: string
   title: string
}

function HeaderItem({ href, title }: Props): JSX.Element {
   return (
      <Item>
         <Anchor href={href}>{title}</Anchor>
      </Item>
   )
}

export default HeaderItem
