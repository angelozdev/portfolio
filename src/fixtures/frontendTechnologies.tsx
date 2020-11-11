import React from 'react'
import {
   Bootstrap,
   Css,
   Html,
   JavaScript,
   React as ReactIcon,
   ReactRouterDom,
   Redux,
   Sass,
   StyledComponents,
   Stylus,
   Tailwind,
   TypeScript,
   Webpack
} from '@src/components/Icons'
import { technology } from '@src/interfaces/components'
import { techs } from '@src/styles/theme'

const WIDTH = '75px'

const technologies: technology[] = [
   {
      title: 'Reactjs',
      icon: <ReactIcon fill={techs.REACT} width={WIDTH} height={WIDTH} />,
      color: techs.REACT,
      description: 'A JavaScript library for building user interfaces.'
   },
   {
      title: 'TypeScript',
      icon: <TypeScript width={WIDTH} height={WIDTH} />,
      color: techs.TS,
      description:
         'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.'
   },
   {
      title: 'JavaScript',
      icon: <JavaScript fill={techs.JS} width={WIDTH} height={WIDTH} />,
      color: techs.JS,
      description: 'JavaScript is the programming language of the Web.'
   },
   {
      title: 'HTML',
      icon: <Html fill={techs.HTML} width={WIDTH} height={WIDTH} />,
      color: techs.HTML,
      description:
         'HTML is the standard markup language for creating Web pages.'
   },
   {
      title: 'CSS',
      icon: <Css fill={techs.CSS} width={WIDTH} height={WIDTH} />,
      color: techs.CSS,
      description:
         'CSS describes how HTML elements are to be displayed on screen, paper, or in other media'
   },
   {
      title: 'Redux',
      icon: <Redux fill={techs.REDUX} width={WIDTH} height={WIDTH} />,
      color: techs.REDUX,
      description:
         'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'
   },
   {
      title: 'Stylus',
      icon: <Stylus fill={techs.STYLUS} width={WIDTH} height={WIDTH} />,
      color: techs.STYLUS,
      description:
         "Installing Stylus is very easy once you have Node.js.So get the binaries for your platform and make sure that they also include npm, Node's package manager."
   },
   {
      title: 'Sass',
      icon: <Sass fill={techs.SASS} width={WIDTH} height={WIDTH} />,
      color: techs.SASS,
      description:
         'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
   },
   {
      title: 'Tailwindcss',
      icon: <Tailwind fill={techs.TAILWIND} width={WIDTH} height={WIDTH} />,
      color: techs.TAILWIND,
      description:
         'A utility-first CSS framework for rapidly building custom designs.. Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.'
   },
   {
      title: 'Webpack',
      icon: <Webpack fill={techs.WEBPACK} width={WIDTH} height={WIDTH} />,
      color: techs.WEBPACK,
      description:
         'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.'
   },
   {
      title: 'Styled Components',
      icon: <StyledComponents fill={techs.SC} width={WIDTH} height={WIDTH} />,
      color: techs.SC,
      description:
         'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!'
   },
   {
      title: 'Bootstrap',
      icon: <Bootstrap fill={techs.BOOTSTRAP} width={WIDTH} height={WIDTH} />,
      color: techs.BOOTSTRAP,
      description:
         'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'
   },
   {
      title: 'React Router Dom',
      icon: <ReactRouterDom fill={techs.RRD} width={WIDTH} height={WIDTH} />,
      description:
         'React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!',
      color: techs.RRD
   }
]

export default technologies
