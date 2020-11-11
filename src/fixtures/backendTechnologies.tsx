import { technology } from '@src/interfaces/components'
import React from 'react'
import { Node, GraphQL, Passport, Express } from '@components/Icons'
import { techs } from '@src/styles/theme'

const WIDTH = '75px'

const technologies: technology[] = [
   {
      title: 'Nodejs',
      description:
         "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      icon: <Node fill={techs.NODE} width={WIDTH} height={WIDTH} />,
      color: techs.NODE
   },
   {
      title: 'GraphQL',
      description:
         'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
      icon: <GraphQL fill={techs.GRAPHQL} width={WIDTH} height={WIDTH} />,
      color: techs.GRAPHQL
   },
   {
      title: 'Passport',
      description:
         'Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.',
      icon: <Passport width={WIDTH} height={WIDTH} />,
      color: techs.JS
   },
   {
      title: 'Express',
      description:
         'Web Applications Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
      icon: <Express width={WIDTH} height={WIDTH} />,
      color: techs.STYLUS
   }
]

export default technologies
