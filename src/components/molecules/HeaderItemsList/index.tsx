import React from 'react'

/* Styles */
import { List } from './styles'

/* Fixtures */
import items from '@src/fixtures/headerList'

/* Components */
import { HeaderItem as Item } from '@components/atoms'

function HeaderItemList() {
   return (
      <List>
         {items.map((item, index) => {
            const { title, href } = item
            return <Item key={index} href={href} title={title} />
         })}
      </List>
   )
}

export default HeaderItemList
